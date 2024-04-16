import { SMS } from './Classes/Nexmo'

const Data = {
    isim: "cartelfx",
    numara: "", // ülke kodu ile giriniz örn: (+90555XXXXXXX)
    content: "bu bir test mesajidir."
}

 const Nexmo = {
    apiKey: "4608c731",
    apiSecret: "P58wNRD4idhIN731"
 }

const API = new SMS(Nexmo.apiKey, Nexmo.apiSecret);

API.sendSms(Data.isim, Data.numara, Data.content);