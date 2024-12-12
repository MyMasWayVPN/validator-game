export const endpoint = 'https://order-sg.codashop.com/initPayment.action'

export const endapigames = 'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store'

export const allowedMethod = ['GET', 'HEAD']

export function getUrl(request: Request): URL {
  return new URL(request.url)
}

export function timeNow(): number {
  return Date.now()
}

export const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
})

export const hapigames = new Headers({
  'Content-Type': 'application/json'
})

export interface Result {
  success: boolean
  game?: string
  id?: number | string
  server?: string | number,
  name?: string
  message?: string
}
