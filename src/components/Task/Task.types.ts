import { TaskType } from '../../Interfaces';

export interface TaskStyledProps {
  task: TaskType;
  deleteTask: () => void;
  completeTask: () => void;
}
