export default interface Quote {
  symbol: string;
  amount: number;
  price?: number;
  totalPrice?: number;
  approximatePrice?: number;
  approximateTotalPrice?: number;
  percent?: number;
  priority?: number;
}