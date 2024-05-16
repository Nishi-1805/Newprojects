document.getElementById("appointment-form").addEventListener("submit", handleFormSubmit);
window.addEventListener("DOMContentLoaded", fetchAndDisplayUsers);

function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/753c5b07c7724977b1026319332f2aa4/appointmentData",
      userDetails)
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function fetchAndDisplayUsers(){
  axios.get("https://crudcrud.com/api/753c5b07c7724977b1026319332f2aa4/appointmentData")
  .then((response)=>{response.data.forEach(userDetails=>displayUserOnScreen(userDetails));
})
.catch((error)=>console.log(error));
}

function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
  userItem.setAttribute("data-id", userDetails._id);
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    const userId = event.target.parentElement.getAttribute("data-id");
    axios.delete(`https://crudcrud.com/api/753c5b07c7724977b1026319332f2aa4/appointmentData/${user-id}`)
    .then(()=>{userList.removeChild(event.target.parentElement);})
    .catch((error)=>console.log(error));
    //userList.removeChild(event.target.parentElement);
    //localStorage.removeItem(userDetails.email);
  });

  editBtn.addEventListener("click", function (event) {
    const userId=event.target.parentElement.getAttribute("data-id");
    
   // localStorage.removeItem(userDetails.email);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
    userList.removeChild(event.target.parentElement);
  });
}
