import { endpoint, headers, Result } from '../utils'

export default async function undawn(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=866394&voucherPricePoint.price=149000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=UNDAWN&shopLang=id_ID&voucherTypeId=1&gvtId=1`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  return {
    success: true,
    game: 'UNDAWN',
    id,
    name: data.confirmationFields.roles[0].role
  }
}
