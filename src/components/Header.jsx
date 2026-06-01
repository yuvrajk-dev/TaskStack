import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import validation from "../utils/validation";

const Header = () => {
  const [selectorIsOpen, setSelectorIsOpen] = useState(null);

  const [selectPriority, setSelectPriority] = useState("");
  const [selectStatus, setSelectStatus] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState({});

  // console.log(description);

  return (
    <section className="w-23/24 mx-auto p-4 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const errors = validation(
            title,
            description,
            selectStatus,
            selectPriority,
          );

          if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
          }

          const task = {
            id: crypto.randomUUID(),
            title,
            description,
            status: selectStatus,
            priority: selectPriority,
          };

          console.log(task);
          setDescription("");
          setSelectPriority("");
          setSelectStatus("");
          setTitle("");
          setError({});
        }}
        className="
    bg-(--surface)
    border
    
    border-(--border)
    rounded-2xl
    p-3
  "
      >
        <div className="flex  gap-4 ">
          {/* Left */}
          <div className=" min-w-64 flex    flex-col gap-2">
            <div className="">
              <input
                type="text"
                maxLength={50}
                value={title}
                onChange={(e) => {
                  setError((prev) => ({
                    ...prev,
                    titleError: "",
                  }));
                  setTitle(e.target.value);
                }}
                placeholder="Title..."
                className="
          h-10
w-full
          px-3
          rounded-xl
          bg-(--bg)
          border
          border-(--border)
          text-(--text)
          outline-none
           placeholder:text-(--text-muted)/60
        "
              />
              {error.titleError && (
                <p className=" pl-1 text-red-500 text-xs">{error.titleError}</p>
              )}
            </div>

            <div>
              <CustomSelect
                value={selectPriority}
                setValue={setSelectPriority}
                isOpen={selectorIsOpen}
                toggle={() => {
                  setSelectorIsOpen((prev) =>
                    prev === "Priority" ? null : "Priority",
                  );
                }}
                options={["High", "Medium", "Low"]}
                placeholder="Priority"
                clearError={() =>
                  setError((prev) => ({
                    ...prev,
                    priorityError: "",
                  }))
                }
              />
              {error.priorityError && (
                <p className="text-red-500 pl-1 text-xs">
                  {error.priorityError}
                </p>
              )}
            </div>
          </div>

          {/* Center */}
          <div className="flex-1 ">
            <textarea
              onChange={(e) => {
                setError((prev) => ({
                  ...prev,
                  descriptionError: "",
                }));

                setDescription(e.target.value);
              }}
              value={description}
              maxLength={300}
              placeholder="Description..."
              className="
            min-w-65
            w-full
    min-h-23
    p-3
    block
    rounded-xl
    bg-(--bg)
    border
    border-(--border)
    text-(--text)
    placeholder:text-(--text-muted)/60
    resize-none
    outline-none 
    
  
  "
            />
            {error.descriptionError && (
              <p className="text-red-500  pl-1 text-xs">
                {error.descriptionError}
              </p>
            )}
          </div>

          {/* Right */}
          <div className="w-48 flex flex-col gap-2">
            <div>
              <CustomSelect
                value={selectStatus}
                setValue={setSelectStatus}
                isOpen={selectorIsOpen}
                toggle={() => {
                  setSelectorIsOpen((prev) =>
                    prev === "Status" ? null : "Status",
                  );
                }}
                options={["Planning", "In Progress", "Done"]}
                placeholder="Status"
                clearError={() =>
                  setError((prev) => ({
                    ...prev,
                    statusError: "",
                  }))
                }
              />

              {error.statusError && (
                <p className="text-red-500 text-xs">{error.statusError}</p>
              )}
            </div>

            <button
              type="submit"
              className="
          h-10
          rounded-xl
          bg-(--primary)
          text-(--bg)
          font-medium
          cursor-pointer
        "
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Header;
