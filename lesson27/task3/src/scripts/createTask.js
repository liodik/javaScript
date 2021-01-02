import { getItem, setItem } from './storage.js';
import { renderTasks } from './renderer.js';

export const addTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;

  if (!text) {
    return;
  }
  inputElem.value = '';
  const tasksList = getItem('taskList') || [];

  const newTaskList = tasksList.concat({
    text,
    done: false,
    id: (Math.random() * 1000).toFixed(),
  });
  setItem('taskList', newTaskList);

  renderTasks();
};
