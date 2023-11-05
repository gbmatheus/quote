import { handlerPath } from "@libs/handler-resolver";

export const getQuote = {
    handler: `${handlerPath(__dirname)}/handler.getQuote`,
    events: [
        {
            http: {
                method: 'get',
                path: 'quotes/'
            }
        }
    ]
}

export const calculateQuote = {
  handler: `${handlerPath(__dirname)}/handler.calculateQuote`,
  events: [
    {
      http: {
        method: "post",
        path: "quotes",
      },
    },
  ],
};