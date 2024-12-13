import { endpoint, headers, Result } from '../utils'

const API_URL = "https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store";

export default async function onepunchman(id: number, zone: number): Promise<Result> {
  const payload = JSON.stringify({
            productId: 97,
            itemId: 918,
            catalogId: 2072,
            paymentId: 5141,
            gameId: id,
            zoneId: zone,
            product_ref: "REG",
            product_ref_denom: "REG"
        });
  const headers1 = {
            'Host': 'api.duniagames.co.id',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0',
            'Content-Type': 'application/json'
        };
  const response = await fetch(API_URL, {
    method: 'POST',
    headers1,
    payload
  })
  const data = await response.json()
  return {
    success: true,
    game: 'Mobile Legends: Bang Bang',
    id,
    server: zone,
    name:data.data.userNameGame
  }
}
