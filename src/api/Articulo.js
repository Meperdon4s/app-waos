
import { ENV } from "../utils";

export class Articulo{
    baseApi=ENV.BASE_API;

    async getArticulos(accessToken){
        try {

            const url=`${this.baseApi}/${ENV.API_ROUTES.GETART}`;

            const params={
                method: "GET",
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            }

            const response= await fetch(url, params);
            const result= await response.json();

            if(response.status!==200) throw result;
            return result;

        }catch (error) {
            throw error;
        }
    }

    async subirArticulo(accessToken, data){
        try {

            const url=`${this.baseApi}/${ENV.API_ROUTES.POSTART}`;

            const params={
                method: "POST",
                headers:{
                    "Content-Type":"application/json ",
                    Authorization:`Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            }

            const response= await fetch(url, params);
            const result= await response.json();

            if(response.status!==200) throw result;
            return result;

        }catch (error) {
            throw error;
        }

    }

    async verArticulo(accessToken, id){
        try {

            const url=`${this.baseApi}/${ENV.API_ROUTES.VERART}/${id}`;

            const params={
                method: "GET",
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            }

            const response= await fetch(url, params);
            const result= await response.json();

            if(response.status!==200) throw result;
            return result;

        }catch (error) {
            throw error;
        }
    }
}