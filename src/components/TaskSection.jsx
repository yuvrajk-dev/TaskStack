import TaskCard from "./TaskCard";

const TaskSection = ({ taskObject = [] }) => {
  const columns = [
    { title: "📋 Planning", statusCheck: "Planning" },
    { title: "🚧 In Progress", statusCheck: "In Progress" },
    { title: "✅ Done", statusCheck: "Done" },
  ];
  return (
    <section className="w-[96%]  min-h-0   mx-auto flex-1 p-5 mb-2 border-(--border) border rounded-xl  bg-(--surface)  md:flex-row flex flex-col gap-5 overflow-y-auto justify-start items-center md:justify-center md:items-start scrollbar-hide  ">
      {columns.map(({ title, statusCheck }) => {
        return (
          <div
            key={statusCheck}
            className="   md:w-[30%] w-[95%] flex flex-col  gap-5 "
          >
            <div className="p-4 border-b border-(--border) ">
              <p className="font-medium  text-center ">{title}</p>
            </div>
            {taskObject
              ?.filter(({ status }) => {
                return status === statusCheck;
              })
              .map(({ id, title, description, status, priority }) => {
                return (
                  <TaskCard
                    key={id}
                    title={title}
                    description={description}
                    status={status}
                    priority={priority}
                    id={id}
                  />
                );
              })}
          </div>
        );
      })}
    </section>
  );
};

export default TaskSection;
