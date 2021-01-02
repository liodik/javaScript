import { initToDoListHandlers } from './toDoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => initToDoListHandlers(), renderTasks());

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);
