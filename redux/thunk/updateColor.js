import { colorSelected } from "../todos/actions";

const updapteColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:3000/api/todos/${todoId}/color`,
      {
        method: "PUT",
        body: JSON.stringify({
          color,
        }),
        headers: {
          "Content-type": "application/json; charset = UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(colorSelected(todo.id, todo.color));
  };
};

export default updapteColor;
