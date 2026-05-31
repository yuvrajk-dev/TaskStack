import TaskCard from "./TaskCard";

const TaskSection = () => {
  return (
    <section className="w-23/24 mx-auto flex-1 p-4 mb-2 border-(--border) border theme-transition rounded-xl  bg-(--surface)   flex gap-4 overflow-y-auto justify-center items-start scrollbar-hide ">
      {/* section-1 */}
      <div className="   flex-1   flex flex-col  gap-5 ">
        {/* title */}
        <div className="p-4 border-b border-(--border) ">
          <p className="font-medium  text-center ">📋 Planning</p>
        </div>
      </div>

      {/* section-2*/}
      <div className="   flex-1   flex flex-col  gap-5">
        {/* title */}
        <div className="p-4 border-b border-(--border)">
          <p className="font-medium  text-center ">🚧 In Progress</p>
        </div>
      </div>

      {/* section-3*/}
      <div className="   flex-1   flex flex-col  gap-5">
        {/* title */}
        <div className="p-4 border-b border-(--border)">
          <p className="font-medium  text-center ">✅ Done</p>
        </div>
      </div>
    </section>
  );
};

export default TaskSection;
