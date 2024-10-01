import axios from "axios";

class Ajax {
    static get(url:string){
        return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`)
    }
    static post(url:string,data :any){
        return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`,data)
    }
    static put(){

    }
    static delete(){

    }
    static patch(){

    }
    static head(){

    }
}
export default Ajax