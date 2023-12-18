import { BaseSyntheticEvent, useState } from 'react';
import styled from 'styled-components';

import Button from '@/shared/ui/Button/Button';

interface TaskInputProps {
  onAddTask: (inputText: string) => void;
}

const FormControl = styled.div<{ error?: string }>`
  margin: 0.5rem 0;
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.error === 'true' ? 'red' : 'black')};
  }
  input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.error === 'true' ? 'red' : 'black')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  input:focus {
    outline: none;
    background: #c8e1e4;
    border-color: #00358b;
  }
`;

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [inputText, setinputText] = useState('');
  const [error, setError] = useState(false);

  const taskInputChangeHandler = (event: BaseSyntheticEvent) => {
    if (event.target.value.length) setError(false);
    setinputText(event.target.value);
  };

  const formSubmitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    if (!inputText.trim().length) {
      setError(true);
      return;
    }

    setinputText('');
    onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl error={error.toString()}>
        <label>Задачи</label>
        <input type="text" value={inputText} onChange={taskInputChangeHandler} />
      </FormControl>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
