/**
 * FETCH SOAP REQUEST APİ (Asp.Net Web Service)
 * Author: @muratonay1
 * @param {Url,WebMethod}
 * @return {JSON}
 * @
 */
import PropTypes from 'prop-types';

export class SoapService {
    static withPostParameter=(Url:String, WebMethod:String)=>{
        return fetch(Url + '/' + WebMethod,{
            method:'POST',
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            body:"JobName=deneme"//deneme olarak konulmuştur. Modüler hali üzerinde çalışılıyor.
        })
        .then(response => response.json())
        .then((data) => console.log("data:", data))
        
    }
   
    static withoutParameter=(Url:String, WebMethod:String)=>{
        return fetch(Url + '/' + WebMethod, {
            method: 'POST',
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
        })
        .then(response => response.json())
        .then((data) => console.log("data:", data))
    }
}