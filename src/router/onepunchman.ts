import { endapigames, hapigames, Result } from '../utils'

export default async function onepunchman(id: string, zone: number): Promise<Result> {
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const config: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store?productId=97&itemId=917&product_ref=REG&product_ref_denom=REG&catalogId=2071&paymentId=5140&gameId=${id}&zoneId=${zone}&campaignUrl=',
    headers: { 
        'User-Agent': 'Apidog/1.0.0 (https://apidog.com)', 
        'Accept': '*/*', 
        'Host': 'api.duniagames.co.id', 
        'Connection': 'keep-alive'
    }
};

axios(config)
    .then((response: AxiosResponse) => {
        const data = await response.data()
      return {
    success: true,
    game: 'Mobile Legends: Bang Bang',
    id,
    server: zone,
    name: response.data.price.userNameGame
      }
    })
    .catch((error: any) => {
        console.log(error);
    });
  
}
