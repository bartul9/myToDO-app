"use strict";

const addNew = document.querySelector(".addNewBtn");

const ul = document.querySelector(".myList");

const myInput = document.getElementById("myInput");

// Todo array

const myTodo = ["Go Shopping", "Learn how to code"];

//Create delete btn
let delBtn = document.createElement("button");
delBtn.type = "button";
delBtn.innerHTML = "Del";
delBtn.className = "btn btn-warning delete del";

// Function to add element on click

addNew.addEventListener("click", function () {
  //Create text node from input
  const textN = document.createTextNode(myInput.value);

  if (textN.textContent === "") {
    alert("Please enter some text");
    return;
  }

  //Push value of input to array
  const input = document.querySelector("#myInput").value;
  myTodo.push(input);

  let delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.innerHTML = "Del";
  delBtn.className = "btn btn-warning delete del";

  //Create li element on click and append it to ul, with del btn
  const li = document.createElement("li");
  li.className = "clickNew var";
  li.appendChild(textN);
  li.appendChild(delBtn);
  ul.appendChild(li);

  // Delete each element on del btn click

  const all = document.getElementsByClassName("btn btn-warning delete del");

  for (let i = 0; i < all.length; i++) {
    all[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
});

//

//Function for displaying messages in array

//const myList = document.querySelector(".myList");

// const displayMessages = function (x) {
//   x.forEach((y, i) =>
//     myList.insertAdjacentHTML(
//       "beforeend",
//       ` <li class="clickNew var-${i}">
//   <span>${y}</span>
//   <button type="button" class="btn btn-warning delete del-">Del</button>
// </li>`
//     )
//   );
// };

// displayMessages(myTodo);

// var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
