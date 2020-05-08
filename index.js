'use strict';

console.log('funguju!');


const tasks = [];

const updateTasks = () => {
  const tasksElm = document.querySelector('.todo__tasks');
  tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    tasksElm.innerHTML += `<div class='task'>${tasks[i]}</div>`;
  }
}

const addTask = () => {
  const newTask = document.querySelector('#new-task');
  tasks.push(newTask.value);
  updateTasks();
  newTask.value = '';
};

const btnElm = document.querySelector('.btn-add');
btnElm.addEventListener('click', addTask);