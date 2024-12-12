import { endpoint, headers, Result } from '../utils'

const API_CODASHOP = 'https://order-sg.codashop.com/initPayment.action';

function ONE_PUNCH_MAN(id: string, otherid: string = ''): Promise<Result> {
    const postData = buildBodys(77832, 5500000.0, 0, id, otherid, 'ONE_PUNCH_MAN', '', 'id_ID', '', '');
    return Request(API_CODASHOP, postData, 'codashop')
        .then((response: any) => {
            const parsedResponse = JSON.parse(response);

            if (parsedResponse.RESULT_CODE && parsedResponse.RESULT_CODE === '10001') {
                return { status: 429, msg: 'Too many attempts, plz wait 5 seconds' };
            } else {
                if (parsedResponse.success) {
                    return {
                        status: true,
                        nickname: decodeURIComponent(parsedResponse.confirmationFields.username)
                    };
                } else {
                    return { status: 400, msg: 'Invalid ID or Server' };
                }
            }
        })
        .catch((error: any) => {
            return { status: 500, msg: 'Internal Server Error', error };
        });
}

// Helper functions
function buildBodys(
    voucherPricePoint.id: number,
    voucherPricePoint.price: number,
    voucherPricePoint.variablePrice: number,
    user.userId: string,
    user.zoneId: string,
    voucherTypeName: string,
    lvtId: string,
    shopLang: string,
    dynamicSkuToken: string,
    pricePointDynamicSkuToken: string,
    voucherTypeId: string
): any {
    return {
        voucherPricePoint.id,
        voucherPricePoint.price,
        voucherPricePoint.variablePrice,
        user.userId,
        user.zoneId,
        voucherTypeName,
        lvtId,
        shopLang,
        dynamicSkuToken,
        pricePointDynamicSkuToken,
        voucherTypeId,
    };
}

function Request(url: string, body: any, serviceName: string): Promise<Result> {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
                if (!response.ok) {
                    reject(`Error in ${serviceName} service`);
                }
                return response.text();
            })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
}
