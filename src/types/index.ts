export interface ITaskInfo {
  name: string;
  id: string;
  status: number;
  labels: string[];
  deadline: string;
}

export interface ILabel {
  id: number;
  value: string;
}

export interface ITask {
  id: number;
  title: string;
  labels: number[];
  assignee: string;
  order: number;
  dateRange: null | string[];
}

export interface IMember {
  id: number;
  name: string;
  imgUrl?: string;
  isAdmin: boolean;
}
