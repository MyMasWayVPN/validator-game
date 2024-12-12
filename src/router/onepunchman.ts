import { endpoint, headers, Result } from '../utils'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apidog/1.0.0 (https://apidog.com)");
myHeaders.append("Accept", "*/*");
myHeaders.append("Host", "api.duniagames.co.id");
myHeaders.append("Connection", "keep-alive");



export default async function onepunchman(id: string, zone: string = ''): Promise<Result> {
    const API_DUNIAGAMES = 'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store';
    const body = "productId=97&itemId=917&product_ref=REG&product_ref_denom=REG&catalogId=2071&paymentId=5140&gameId=${id}&zoneId=${zone}&campaignUrl="
    try {
        // Mengirim permintaan HTTP ke API_DANCINGIDOL
        const response = await fetch(`${API_DUNIAGAMES}${body}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Tambahkan header lain jika diperlukan
            }
        });

        if (!response.ok) {
            return JSON.stringify({ status: 400, msg: 'Invalid ID' });
        }

        const responseData = await response.json();

        // Memeriksa apakah data 'rolename' tersedia
        if (response.data.status.message === 'succes') {
            return JSON.stringify({ status: true, nickname: response.data.data.price.userNameGame });
        } else {
            return JSON.stringify({ status: false, msg: 'Invalid ID' });
        }
    } catch (error) {
        // Penanganan kesalahan
        console.error('Error fetching data:', error);
        return JSON.stringify({ status: 500, msg: 'Internal Server Error' });
    }
}


export default async function onepunchman(id: string, zone: number): Promise<Result> {
  const body = `productId=97&itemId=917&product_ref=REG&product_ref_denom=REG&catalogId=2071&paymentId=5140&gameId=${id}&zoneId=${zone}&campaignUrl=`
  const response = await fetch("https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store", {
    method: 'POST',
    myHeaders,
    body
  })
  const data = await response.json()
  if (response.data.price.userNameGame) {
    return {
      success: true,
      game: 'One Punch Man',
      id,
      name: response.data.price.userNameGame
    }
  } else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}
