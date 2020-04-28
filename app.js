let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

let orderedListElement = document.querySelector("ol");

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  
  var listItem = document.createElement("li");

  arrayOfTodos.forEach((obj) => {
    listItem.innerText = obj.title;
    orderedListElement.appendChild(listItem);
  });


//ANOTHER WAY OF DOING ABOVE CODE 

// for (let index = 0; inOfTodosdex < arrayOfTodos.length; index++) {
//   const element = arrayOfTodos[index];
//   var listItem =document.createElement('li')
//   listItem.innerText = element.title + " " + element.userId
//   listItem.innerText = `${element.title} and userID: {element.userID}`
//   orderedListElement.appendChild(listItem)
// }



};
