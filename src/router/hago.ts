import { endpoint, headers, Result } from '../utils'

export default async function hago(id: string): Promise<Result> {
  const body = `voucherPricePoint.id=272113&voucherPricePoint.price=29700.0000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=HAGO&shopLang=id_ID`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  if (data.confirmationFields.username) {
    return {
      success: true,
      game: 'Hago_',
      id,
      name: data.confirmationFields.username
    }
  }
  else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}