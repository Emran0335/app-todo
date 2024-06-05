import { loaded } from "../todos/actions";


const fetchTodos = async (dispatch) => {
  const response = await fetch("/api/todos");
  const todos = await response.json();
console.log(todos)
  dispatch(loaded(todos));
};

export default fetchTodos;
