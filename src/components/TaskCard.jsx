import supabase from "../utils/supabase";
import { useState } from "react";
import TaskView from "./TaskView";
import TaskEdit from "./TaskEdit";
import toast from "react-hot-toast";

const TaskCard = ({ title, description, priority, status, id, getTasks }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editPriority, setEditPriority] = useState(priority);
  const [editStatus, setEditStatus] = useState(status);
  const [selectorIsOpen, setSelectorIsOpen] = useState(null);
  const [editLoading, setEditLoading] = useState(false);
  const [error, setError] = useState({});

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

  const cancelEdit = () => {
    setEditTitle(title);
    setEditDescription(description);
    setEditPriority(priority);
    setEditStatus(status);
    setSelectorIsOpen(null);
    setIsEdit(false);
  };

  const deleteTask = async (id) => {
    try {
      setEditLoading(true);

      const { error } = await supabase.from("tasks").delete().eq("id", id);

      if (error) {
        toast.error("Failed to delete task");
        return;
      }

      await getTasks();
      toast.success("Task deleted");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("taskId", String(id));
      }}
      id={id}
      className="
      
        bg-(--background)
        border
        border-(--border)
        rounded-lg
        p-4
        shadow-sm
        hover:shadow-md flex flex-col  gap-2
        hover:-translate-y-0.5
        transition-shadow
        cursor-grab
        active:cursor-grabbing
      "
    >
      <TaskView
        id={id}
        title={title}
        description={description}
        status={status}
        priority={priority}
        deleteTask={deleteTask}
        setIsEdit={setIsEdit}
        priorityStyles={priorityStyles}
        statusStyles={statusStyles}
        isEdit={isEdit}
        editLoading={editLoading}
      />

      <TaskEdit
        id={id}
        editTitle={editTitle}
        editDescription={editDescription}
        editPriority={editPriority}
        editStatus={editStatus}
        editLoading={editLoading}
        setEditTitle={setEditTitle}
        setEditDescription={setEditDescription}
        setEditPriority={setEditPriority}
        setEditStatus={setEditStatus}
        cancelEdit={cancelEdit}
        setEditLoading={setEditLoading}
        setIsEdit={setIsEdit}
        selectorIsOpen={selectorIsOpen}
        setSelectorIsOpen={setSelectorIsOpen}
        setError={setError}
        getTasks={getTasks}
        isEdit={isEdit}
        error={error}
      />
    </div>
  );
};

export default TaskCard;
