export interface TaskType {
  id: number;
  taskName: string;
  hours: number;
  details: string;
  completed?: boolean;
}
