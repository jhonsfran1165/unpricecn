import { Unprice } from "@unprice/api"

export const unprice = new Unprice({
  token: process.env.UNPRICE_API_KEY as string,
  baseUrl: process.env.UNPRICE_API_URL as string,
})
