import { endapigame, hapigames, Result } from '../utils'

export default async function onepunchman(id: string, zone: number): Promise<Result> {
  const body = `productId=97&itemId=917&product_ref=REG&product_ref_denom=REG&catalogId=2071&paymentId=5140&gameId=${id}&zoneId=${zone}&campaignUrl=`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  return {
    success: true,
    game: 'Mobile Legends: Bang Bang',
    id,
    server: zone,
    name:data.price.userNameGame
  }
}
