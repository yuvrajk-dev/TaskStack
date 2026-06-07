import React from "react";
import CustomSelect from "./CustomSelect";
import supabase from "../utils/supabase";

const TaskEdit = ({
  id,
  editTitle,
  editDescription,
  editPriority,
  editStatus,
  editLoading,
  setEditTitle,
  setEditDescription,
  setEditPriority,
  setEditStatus,
  cancelEdit,
  validation,
  setEditLoading,
  setIsEdit,
  selectorIsOpen,
  setSelectorIsOpen,
  setError,
  getTasks,
  isEdit,
}) => {
  return (
    isEdit && (
      <>
        <textarea
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
          maxLength={40}
          className=" font-semibold wrap-break-word w-full  border
          border-(--border) pl-1 outline-none  rounded-2xl pt-1 resize-none "
        />

        <textarea
          value={editDescription}
          onChange={(e) => {
            setEditDescription(e.target.value);
          }}
          maxLength={300}
          className=" border
          border-(--border) text-sm wrap-break-word pt-1  outline-none pl-1 resize-none w-full   rounded-2xl scrollbar-hide  "
        />

        <div className="flex   flex-col  gap-2 justify-between items-center">
          <div className="flex  gap-2  w-full justify-between items-center">
            <button
              type="button"
              onClick={cancelEdit}
              className={`
            text-xs
            rounded-full
cursor-default
 flex justify-center items-center

            px-4
            py-1
             border
             border-(--border)
             active:shadow-(--shadow-m)
          `}
            >
              Cancel
            </button>

            <button
              disabled={editLoading}
              onClick={async () => {
                try {
                  const validationErrors = validation(
                    editTitle,
                    editDescription,
                    editStatus,
                    editPriority,
                  );

                  if (Object.keys(validationErrors).length > 0) {
                    console.log(validationErrors);

                    return;
                  }
                  setEditLoading(true);

                  const { error: updateError } = await supabase
                    .from("tasks")
                    .update({
                      title: editTitle,
                      description: editDescription,
                      status: editStatus,
                      priority: editPriority,
                    })
                    .eq("id", id);

                  if (updateError) {
                    console.log(updateError);
                    return;
                  }

                  await getTasks();
                  setIsEdit(false);
                } catch (error) {
                  console.log(error);
                } finally {
                  setEditLoading(false);
                }
              }}
              className={`
           disabled:cursor-not-allowed
                disabled:border-red-500/20
            text-xs
            rounded-full
cursor-default
            px-4
            py-1
 flex justify-center items-center

             border
             border-(--border)
             active:shadow-(--shadow-m)
          `}
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex  w-full  gap-2 justify-between items-center">
          <CustomSelect
            value={editPriority}
            setValue={setEditPriority}
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

          <CustomSelect
            value={editStatus}
            setValue={setEditStatus}
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
        </div>
      </>
    )
  );
};

export default TaskEdit;
