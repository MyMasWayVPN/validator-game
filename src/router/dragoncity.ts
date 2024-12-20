import { endpoint, headers, Result } from '../utils'

export default async function dragoncity(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=254278&voucherPricePoint.price=479000.0000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=DRAGON_CITY&shopLang=id_ID`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  if (data.success == true) {
    return {
      success: true,
      game: 'Dragon City',
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
