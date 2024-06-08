import { loaded } from "../todos/actions";

const fetchTodos = () => {
  return async (dispatch) => {
    const response = await fetch("/api/todos/");
    const todos = await response.json();
    dispatch(loaded(todos));
  };
};
export default fetchTodos;
