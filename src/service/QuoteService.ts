import Quote from "src/models/quote";
import Invested from "src/models/invest";
import axios from "axios";

class QuoteService {
  constructor() {}

  async getQuote(symbol: string): Promise<any> {
    const { data, status } = await axios.get(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}.SA`
    );
    return { data, status }
  }

  async amountToInvest(invested: Invested | any): Promise<Quote[]> {
    const quotes: Quote[] = await Promise.all(invested.quotes.map(async quoteActual => {
        const { data } = await this.getQuote(quoteActual.symbol);
        
        const price = data.chart.result[0].meta.regularMarketPrice;
        const quote: Quote = {
          amount: quoteActual.amount,
          symbol: quoteActual.symbol,
          price: price,
          approximatePrice: price + 1,
          totalPrice: price * quoteActual.amount,
        };

        const approximateTotalPrice = quote.approximatePrice * quoteActual.amount
        
        quote.approximateTotalPrice = approximateTotalPrice;
        console.log("quote", { quote });
        return quote
    }));

    console.log({ quotes });
    return quotes
  }
}

export default new QuoteService();
