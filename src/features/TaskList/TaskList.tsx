import styled from 'styled-components';

import { ITask } from '@/entities/Task';
import Task from '@/entities/Task/ui/Task';

interface TaskListProps {
  items: ITask[];
  onDeleteTask: (taskId: string) => void;
}

const StyledTaskList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TaskList = ({ items, onDeleteTask }: TaskListProps) => {
  return (
    <StyledTaskList>
      {items.map((task) => (
        <Task key={task.id} id={task.id} onDelete={onDeleteTask}>
          {task.text}
        </Task>
      ))}
    </StyledTaskList>
  );
};

export default TaskList;
