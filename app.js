"use strict";

const addNew = document.querySelector(".addNewBtn");

const ul = document.querySelector(".myList");

const liElement = document.querySelector(".clickNew");

const myInput = document.getElementById("myInput");

const deleteBtn = document.getElementsByClassName("delete");

// Function to add element on click

addNew.addEventListener("click", function () {
  const li = document.createElement("li");
  const textN = document.createTextNode(myInput.value);
  li.appendChild(textN);
  ul.appendChild(li);
});

//Delete element function

deleteBtn.addEventListener("click", function () {
  liElement.classList.add("displayNone");
  console.log("hello");
});
