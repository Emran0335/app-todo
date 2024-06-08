import toast from "react-hot-toast";
import { toggled } from "../todos/actions";

const updateStatus = (todoId, currentStatus) => {
  console.log(currentStatus)
  return async (dispatch) => {
    const response = await fetch(`/api/todos/${todoId}/status`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
    const todo = await response.json();
    console.log(todo.id);
    dispatch(toggled(todo.id));
    toast.success("status updated successfully");
  };
};

export default updateStatus;
