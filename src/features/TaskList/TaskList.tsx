import styles from './TaskList.module.scss';

import { ITask } from '@/entities/Task';
import Task from '@/entities/Task/ui/Task';

interface TaskListProps {
  items: ITask[];
  onDeleteTask: (taskId: string) => void;
}

const TaskList = ({ items, onDeleteTask }: TaskListProps) => {
  return (
    <ul className={styles['task-list']}>
      {items.map((task) => (
        <Task key={task.id} id={task.id} onDelete={onDeleteTask}>
          {task.text}
        </Task>
      ))}
    </ul>
  );
};

export default TaskList;
