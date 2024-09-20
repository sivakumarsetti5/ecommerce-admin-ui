import { getDate,getCookiesObj, getPrevDate } from "./functions"

export class AppCookies {
    static setCookie(key:string,value:string,days:number){
        if(days){
            document.cookie = `${key}=${value};expires=${getDate(days)}`
        }else{
            document.cookie = `${key}=${value}`
        }
    }
    static getCookie(key:string){
        const cookieObj = getCookiesObj()
        return cookieObj[key]
    }
    static getAllCookies(){
        return getCookiesObj()
    }
    static deleteCookie(key:string){
        document.cookie = `${key}=;expires=${getPrevDate()}`
    }
    static deleteAllCookies(){
        const cookieObj = getCookiesObj()
        for(let key in cookieObj){
            document.cookie = `${key}=:expires=${getPrevDate()}`
        }
    }
    static isUserLoggedIn(){
        const {uid} = getCookiesObj()
        return uid ? true:false
    }
}
