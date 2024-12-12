import { endpoint, headers, Result } from '../utils'

export default async function onepunchman(id: string, zone: number): Promise<Result> {
  const body = `voucherPricePoint.id=308472&voucherPricePoint.price=10890.0000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${zone}&voucherTypeName=ONE_PUNCH_MAN&shopLang=id_ID`
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
    name:data.confirmationFields.username
  }
}
