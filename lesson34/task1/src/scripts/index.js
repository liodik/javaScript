import { initToDoListHandlers } from './toDoList.js';
import { renderTasks } from './renderer.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    setItem('tasksList', tasksList);
    renderTasks();
  });

  initToDoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

// 1. get data form server
// 2. save date to font-end storage
