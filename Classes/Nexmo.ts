import Nexmo, { SendSmsOptions, MessageRequestResponse, MessageError } from 'nexmo';

class SMS {
  private nexmo: Nexmo;

  constructor(apiKey: string, apiSecret: string) {
    this.nexmo = new Nexmo({
      apiKey: apiKey,
      apiSecret: apiSecret,
    });
  }

  public sendSms(from: string, to: string, text: string): void {
    const opts: Partial<SendSmsOptions> = {}; 
    this.nexmo.message.sendSms(from, to, text, opts, (err: MessageError, responseData: MessageRequestResponse) => {
      if (err) {
        console.error('Error:', err);
      } else {
        console.log('Response:', responseData);
      }
    });
  }
}

export { SMS }