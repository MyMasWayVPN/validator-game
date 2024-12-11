import { endpoint, headers, Result } from '../utils'

export default async function eightball(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=272564&voucherPricePoint.price=14000.0000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=EIGHT_BALL_POOL&shopLang=id_ID`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  if (data.confirmationFields.username) {
    return {
      success: true,
      game: '8 Ball Pool',
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