const validation = (title, description, status, priority) => {
  const error = {};
  if (!title.trim()) {
    error.titleError = "Title is empty";
  }

  if (!description.trim()) {
    error.descriptionError = "Description is empty";
  }

  if (!status) {
    error.statusError = "Status is empty";
  }

  if (!priority) {
    error.priorityError = "Priority is empty";
  }

  return error;
};

export default validation;
