import { endpoint, headers, Result } from '../utils'

export default async function undawn(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=866334&voucherPricePoint.price=15000.0000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=UNDAWN&shopLang=id_ID&voucherTypeId=336&gvtId=478`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  if (data.success == true) {
    return {
      success: true,
      game: data.confirmationFields.productName,
      id,
      name: data.confirmationFields.roles[0].role
    }
  } else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}
