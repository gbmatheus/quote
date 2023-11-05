import Quote from "./quote"

export default interface Invest {
    amountInvested: number;
    quotes: Quote[];
}