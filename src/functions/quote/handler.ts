import { APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import quoteService from 'src/service/QuoteService'


export const getQuote = middyfy(async (): Promise<any> => {
    const { data } = await quoteService.getQuote("wege3")
    return data;
})

export const calculateQuote = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const body = event.body
        const quotes = await quoteService.amountToInvest(body)
        console.log("calculateQuote ", quotes);
        return formatJSONResponse({
            quotes
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})