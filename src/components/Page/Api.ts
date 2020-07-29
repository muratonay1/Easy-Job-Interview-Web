/**
 * FETCH SOAP REQUEST APİ (Asp.Net Web Service)
 * Author:  https://github.com/muratonay1
 * If you have a question? 
 * ContactMe: imuratony@gmail.com
 */

function bodyParameterParser(params:JSON) {
    try {
        var param = params;
        var keys = Object.keys(param);
        var values = Object.values(param);
        var bodyObject="";
        for(var i=0;i<keys.length;i++){
            var key = keys[i];
            var value = values[i];
            bodyObject=bodyObject+key+"="+value+"&"
        }
        console.log("bodyObject: ",bodyObject.substring(0,bodyObject.length-1))
        return bodyObject.substring(0,bodyObject.length-1)
    } catch (error) {
        console.log("bodyParserERROR: ",error)
    }
}


export class SoapService {
   
    static withPostParameter=(Url:String, WebMethod:String, Parameter:JSON)=>{
        var responseParser;
        var promisVal;
        Parameter === null ? console.log("Post Parameter Invalid"):responseParser=bodyParameterParser(Parameter)
        
        return fetch(Url + '/' + WebMethod,{
            method:'POST',
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            body:responseParser
        })
        .then(response => response.json())
        .then((data) => {
           return data
        })
    }
   
    static  withoutParameter=(Url:String, WebMethod:String)=>{
        console.log("ts isteğine girdi")
        fetch(Url + '/' + WebMethod, {
            method: 'POST',
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
        })
        .then(response => response.json())
        .then((datam) => {
            console.log("api data resturn etti: ",datam);
            return datam;
        })
    }
}