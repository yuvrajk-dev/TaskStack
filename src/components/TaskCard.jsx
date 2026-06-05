const TaskCard = ({ title, description, priority, status, id }) => {
  const priorityStyles = {
    High: "bg-red-500/10 text-red-500 border border-red-500/20",
    Medium: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
    Low: "bg-green-500/10 text-green-500 border border-green-500/20",
  };

  const statusStyles = {
    Planning: "bg-slate-500/10 text-slate-500 border border-slate-500/20",
    "In Progress": "bg-blue-500/10 text-blue-500 border border-blue-500/20",
    Done: "bg-green-500/10 text-green-500 border border-green-500/20",
  };

  return (
    <div
      id={id}
      className="
      
        bg-(--background)
        border
        border-(--border)
        rounded-lg
        p-4
        shadow-sm
        hover:shadow-md
        hover:-translate-y-0.5
        transition-all
        cursor-grab
        active:cursor-grabbing
      "
    >
      <h3 className="font-semibold wrap-break-word">{title}</h3>

      <p className="text-sm text-(--muted-foreground)   wrap-break-word mt-2">
        {description}
      </p>

      <div className="flex items-center justify-between mt-4">
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
  );
};

export default TaskCard;
