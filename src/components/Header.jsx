import React, { useEffect, useState } from "react";
import CustomSelect from "./CustomSelect";
import validation from "../utils/validation";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Header = ({ setTaskObject }) => {
  const [selectorIsOpen, setSelectorIsOpen] = useState(null);

  const [selectPriority, setSelectPriority] = useState("");
  const [selectStatus, setSelectStatus] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isClose, setIsClose] = useState(true);

  const [error, setError] = useState({});

  // console.log(description);

  return (
    <section className="w-23/24 mx-auto   p-4 ">
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

          setTaskObject((prev) => {
            return [task, ...prev];
          });
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
    p-1
    md:p-3

  "
      >
        {/* hidden on pc */}
        <div className={`  py-2 flex    md:hidden justify-center items-center`}>
          <button
            onClick={() => setIsClose((prev) => !prev)}
            type="button"
            className="
            border
          h-10
          px-6
          rounded-xl
          bg-(--primary)
          text-(--bg)
          font-medium
          cursor-pointer
          flex justify-center items-center
        "
          >
            Create Task{" "}
            {isClose ? (
              <RiArrowUpSLine
                size={20}
                className=" translate-0.5 text-(--bg)"
              />
            ) : (
              <RiArrowDownSLine
                size={20}
                className="translate-0.5 text-(--bg)"
              />
            )}
          </button>
        </div>

        <div
          className={` flex flex-col  ${isClose && "max-h-0 overflow-hidden"} md:overflow-visible  md:max-h-full md:items-start  transition-all
    duration-300   gap-4  md:flex-row  `}
        >
          {/* Left */}
          <div className=" flex-1 flex    flex-col gap-2">
            <div className="">
              <input
                type="text"
                maxLength={40}
                value={title}
                onChange={(e) => {
                  setError((prev) => ({
                    ...prev,
                    titleError: "",
                  }));
                  setTitle(e.target.value);
                }}
                placeholder="Title..."
                className={`
          h-10
          w-full
          ${title.length === 40 && "border-red-500"}
          px-3
          rounded-xl
          bg-(--bg)
          border
          border-(--border)
          text-(--text)
          outline-none
           placeholder:text-(--text-muted)/60
        `}
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
          <div className="flex-2 relative   ">
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
              className={`
            
            w-full
          ${description.length === 300 && "border-red-500"}
scrollbar-hide
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
    
    
  
              `}
            />
            {description.length >= 1 && (
              <div className=" flex justify-end items-center absolute right-2 bottom-1">
                <p
                  className={`${description.length === 300 ? "text-red-500" : "text(--text-muted)"} text-xs`}
                >
                  {description.length}/300
                </p>
              </div>
            )}

            {error.descriptionError && (
              <p className="text-red-500   pl-1 text-xs">
                {error.descriptionError}
              </p>
            )}
          </div>

          {/* Right */}
          <div className="flex-1 flex  flex-col gap-2  ">
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
