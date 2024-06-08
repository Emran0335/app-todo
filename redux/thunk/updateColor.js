import toast from "react-hot-toast";
import { colorSelected } from "../todos/actions";

const updapteColor = (todoId, color) => {
  console.log(todoId)
  return async (dispatch) => {
    const response = await fetch(`/api/todos/${todoId}/color`, {
      method: "PUT",
      body: JSON.stringify({
        color,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
    const todo = await response.json();
    dispatch(colorSelected(todo.id, todo.color));
    toast.success("color updated successfully");
  };
};

export default updapteColor;
