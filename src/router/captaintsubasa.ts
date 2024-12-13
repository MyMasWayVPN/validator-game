import { endpoint, headers, Result } from '../utils'

export default async function captaintsubasa(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=352045&voucherPricePoint.price=109000.0000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=CAPTAIN_TSUBASA&shopLang=id_ID`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  if (data.success == true) {
    return {
      success: true,
      game: 'CAPTAIN_TSUBASA',
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
