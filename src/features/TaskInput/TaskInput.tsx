import { BaseSyntheticEvent, useState } from 'react';

import styles from './TaskInput.module.scss';

import Button from '@/shared/ui/Button/Button';

interface TaskInputProps {
  onAddTask: (inputText: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [inputText, setinputText] = useState('');
  const [error, setError] = useState(false);

  const taskInputChangeHandler = (event: BaseSyntheticEvent) => {
    if (event.target.value.length) setError(false);
    setinputText(event.target.value);
  };

  const formSubmitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (!inputText.length) {
      setError(true);
      return;
    }
    setinputText('');
    onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${error && styles.error} `}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} value={inputText} />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
