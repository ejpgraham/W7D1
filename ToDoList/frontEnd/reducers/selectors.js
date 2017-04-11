
const allTodos = ({ todos }) => {
 return Object.keys(todos).map( id => todos[id]);
};
window.allTodos = allTodos;

export default allTodos;
