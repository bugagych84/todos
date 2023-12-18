import { ReactNode } from 'react';

import styles from './Task.module.scss';

interface TaskProps {
  id: string;
  onDelete: (taskId: string) => void;
  children: ReactNode;
}

const Task = ({ id, onDelete, children }: TaskProps) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className={styles['task-item']} onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default Task;
