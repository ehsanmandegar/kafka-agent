import * as Kavenegar from 'kavenegar';
import { isProduction } from '../app/base/constants';

const api = Kavenegar.KavenegarApi({
  apikey: process.env.KAVENEGAR_API_KEY,
});

export class SmsResponse {
  status: boolean;
  message: string;

  constructor(status, message) {
    this.status = status;
    this.message = message;
    return this;
  }
}

export const send = async (
  token,
  phoneNumber: string,
): Promise<SmsResponse> => {
  if (!isProduction) {
    return new SmsResponse(true, null);
  }
  return new Promise((resolve, reject) => {
    try {
      api.VerifyLookup(
        {
          receptor: phoneNumber,
          token,
          template: 'Verify',
        },
        function (response, status) {
          if (status === 200) {
            return resolve(new SmsResponse(true, null));
          } else {
            return reject(new SmsResponse(false, status));
          }
        },
      );
    } catch (e) {
      return reject(new SmsResponse(false, e.message));
    }
  });
};
