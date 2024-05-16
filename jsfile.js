const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios
  .get("https://crudcrud.com/api/413d9d67038d4f24925099646961f0f9/todo",{
  })
  .then((result)=>console.log(result))
       .catch((error)=>console.log(error));
}

function postTodo() {
  // Write your code here
  axios
    .post("https://crudcrud.com/api/413d9d67038d4f24925099646961f0f9/todo",{
   title: "Learn Axios",
    completed: false,
  })
  .then((result)=>console.log(result))
  .catch((error)=>console.log(error));
}

function putTodo() {
  // Write your code here
  
}

function deleteTodo() {
  // Write your code here
}
