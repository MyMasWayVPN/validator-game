import { endpoint, headers, Result } from '../utils'

export default async function onepunchman(id: number, zone: number): Promise<Result> {
  const body = `voucherPricePoint.id=308472&voucherPricePoint.price=10890.0000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${zone}&voucherTypeName=ONE_PUNCH_MAN&shopLang=id_ID&voucherTypeId=1&gvtId=1`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  if (data.confirmationFields.username) {
    return {
      success: true,
      game: 'One Punch Man',
      id,
      name: data.confirmationFields.username
    }
  } else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}