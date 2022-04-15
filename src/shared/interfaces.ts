export interface IChannel {
  id: string;
  name: string;
  allocation: string;
  amount: number;
  frequency: string;
  breakdown: IBreakdown[];
  isOpened: boolean;
}

export interface IBreakdown {
  name: string;
  value: number;
}
