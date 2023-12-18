import { ReactNode } from 'react';
import styled from 'styled-components';

interface TaskProps {
  id: string;
  onDelete: (taskId: string) => void;
  children: ReactNode;
}

const TaskItem = styled.li`
  margin: 1rem 0;
  background: #00358b;
  box-shadow: 0 2px 8px rgba(50, 50, 50, 0.25);
  border-radius: 8px;
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`;

const Task = ({ id, onDelete, children }: TaskProps) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return <TaskItem onClick={deleteHandler}>{children}</TaskItem>;
};

export default Task;
