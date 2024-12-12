export const endpoint = 'https://order-sg.codashop.com/initPayment.action'

export const allowedMethod = ['GET', 'POST', 'HEAD']

export function getUrl(request: Request): URL {
  return new URL(request.url)
}

export function timeNow(): number {
  return Date.now()
}

export const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
})

export interface Result {
  success: boolean
  game?: string
  id?: number | string
  server?: string | number,
  name?: string
  message?: string
}