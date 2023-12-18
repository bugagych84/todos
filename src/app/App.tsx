import { useState } from 'react';

import '../index.scss';

import { ITask } from '@/entities/Task';
import TaskInput from '@/features/TaskInput/TaskInput';
import TaskList from '@/features/TaskList/TaskList';

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    { text: 'Создание курса - 1 час', id: 't1' },
    { text: 'Разминка 15 мин', id: 't2' },
    { text: 'Создание курса - 1 час', id: 't3' },
  ]);

  const addTaskHandler = (inputText: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: inputText, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const deleteTaskHandler = (taskId: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  let content = <p style={{ textAlign: 'center' }}>Задач не найдено! Добавить?</p>;

  if (tasks.length > 0) {
    content = <TaskList items={tasks} onDeleteTask={deleteTaskHandler} />;
  }

  return (
    <div>
      <section id="task-form">
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks">{content}</section>
    </div>
  );
};

export default App;
