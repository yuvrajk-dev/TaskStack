import React from "react";
import { MdDelete } from "react-icons/md";

const TaskView = ({
  id,
  title,
  description,
  status,
  priority,
  deleteTask,
  setIsEdit,
  priorityStyles,
  statusStyles,
  isEdit,
  editLoading,
}) => {
  return (
    !isEdit && (
      <>
        <h3 className="font-semibold wrap-break-word pl-1 pt-1  ">{title}</h3>
        <p className="text-sm  text-(--muted-foreground) pt-1 pl-1 wrap-break-word mt-2">
          {description}
        </p>

        <div className="flex   flex-col  gap-2 justify-between items-center">
          <div className="flex  gap-2  w-full justify-between items-center">
            <button
              disabled={editLoading}
              onClick={() => {
                deleteTask(id);
              }}
              className={`
                        text-xs
                        rounded-full
            cursor-default
            disabled:cursor-not-allowed
              disabled:border-red-500/20
                        px-4
                        py-1
                         border
                         border-(--border)
             flex justify-center items-center
            
                         active:shadow-(--shadow-m)
                      `}
            >
              <MdDelete size={16} />
            </button>

            <button
              type="button"
              onClick={() => {
                setIsEdit(true);
              }}
              className={`
            text-xs
            rounded-full
cursor-default
w-15
 text-center

            px-4
            py-1
             border
             border-(--border)
             active:shadow-(--shadow-m)
          `}
            >
              Edit
            </button>
          </div>
          <div className="flex  w-full  gap-2 justify-between items-center">
            <span
              className={`
            text-xs
            px-2
            py-1
            rounded-full
            ${priorityStyles[priority]}
          `}
            >
              {priority}
            </span>

            <span
              className={`
            text-xs
            px-2
            py-1
            rounded-full
            ${statusStyles[status]}
          `}
            >
              {status}
            </span>
          </div>
        </div>
      </>
    )
  );
};

export default TaskView;
