import { added } from "../todos/actions";

const addTodo = (todoText) => {
  return async (dispatch) => {
    const response = await fetch("/api/todos/create", {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        "Content-type": "applicaton/json; charset=UTF-8",
      },
    });
    const todo = await response.json();
    dispatch(added(todo.text));
  };
};

export default addTodo;
