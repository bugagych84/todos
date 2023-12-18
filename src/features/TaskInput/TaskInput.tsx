import { BaseSyntheticEvent, useState } from 'react';

import styles from './TaskInput.module.scss';

import Button from '@/shared/ui/Button/Button';

interface TaskInputProps {
  onAddTask: (inputText: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [inputText, setinputText] = useState('');

  const taskInputChangeHandler = (event: BaseSyntheticEvent) => {
    setinputText(event.target.value);
  };

  const formSubmitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles['form-control']}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
