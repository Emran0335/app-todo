import toast from "react-hot-toast";
import { deleted } from "../todos/actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`/api/todos/${todoId}/delete`, {
      method: "DELETE",
    });
    dispatch(deleted(todoId));
    toast.success("todo deleted successfully");
  };
};

export default deleteTodo;
