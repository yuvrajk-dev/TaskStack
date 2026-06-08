import { useState } from "react";
import supabase from "../utils/supabase";
import TaskCard from "./TaskCard";

const TaskSection = ({ taskObject = [], getTasks, getTaskLoading }) => {
  const columns = [
    { title: "📋 Planning", statusCheck: "Planning" },
    { title: "🚧 In Progress", statusCheck: "In Progress" },
    { title: "✅ Done", statusCheck: "Done" },
  ];

  const [wait, setWait] = useState(false);

  return (
    <section className="w-[96%]  min-h-0   mx-auto flex-1 p-5 pb-0 mb-2 border-(--border) border rounded-xl  bg-(--surface)  md:flex-row flex flex-col gap-5 overflow-y-auto justify-start items-center md:justify-center md:items-start scrollbar-hide  ">
      {columns.map(({ title, statusCheck }) => {
        return (
          <div
            onDragOver={(e) => {
              if (wait) return;
              e.preventDefault();
            }}
            onDrop={async (e) => {
              if (wait) return;

              try {
                setWait(true);
                const taskId = e.dataTransfer.getData("taskId");

                const task = taskObject.find(
                  (task) => String(task.id) === taskId,
                );
                if (!task) return;

                if (task.status === statusCheck) {
                  return;
                }

                const { error } = await supabase
                  .from("tasks")
                  .update({ status: statusCheck })
                  .eq("id", taskId);

                if (error) {
                  console.log(error);
                  return;
                }

                await getTasks();
              } catch (error) {
                console.log(error);
              } finally {
                setWait(false);
              }
            }}
            key={statusCheck}
            className="   md:w-[30%] w-[95%] flex flex-col md:h-full  "
          >
            <div className="p-4 border-b  border-(--border) ">
              <p className="font-medium  text-center  ">{title}</p>
            </div>
            <div
              className={`flex-1 ${wait && "cursor-not-allowed"}   pt-5 gap-5 flex pb-70 flex-col md:overflow-y-auto scrollbar-hide `}
            >
              {taskObject
                ?.filter(({ status }) => {
                  return status === statusCheck;
                })
                .map(
                  ({ id, title, description, status, priority, createdAt }) => {
                    return (
                      <TaskCard
                        getTaskLoading={getTaskLoading}
                        getTasks={getTasks}
                        key={id}
                        title={title}
                        description={description}
                        status={status}
                        priority={priority}
                        id={id}
                        createdAt={createdAt}
                      />
                    );
                  },
                )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TaskSection;
