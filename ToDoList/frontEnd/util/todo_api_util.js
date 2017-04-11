
const fetchToDos = () => {
  return $.ajax({method: "GET", url: "api/todos", dataType: "JSON"});
};

window.fetchToDos = fetchToDos 

export default fetchToDos;
