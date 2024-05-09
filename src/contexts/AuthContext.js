import {useState, useEffect, createContext} from "react";
import {Auth, User} from "../api"; 
import {hasExpiredToken} from '../utils';

const authCtr=new Auth();
const userCtr =new User();

export const AuthContext=createContext();

export function AuthProvider({children}){
    const [user, setUser ]=useState(null);
    const [token, setToken]=useState(null);
    const [loading, setLoading]=useState(true);

    useEffect(() => {
        (async()=>{
            const accessToken=authCtr.getAccessToken();
            const refreshToken=authCtr.getRefreshToken();

            await login (accessToken);

            if(!accessToken || !refreshToken){
                logout();
                setLoading(false);
                return;
            }
            if(hasExpiredToken(accessToken)){
                if(hasExpiredToken(refreshToken)){
                    logout();
                }else{
                    await relogin(refreshToken);
                }
            }else{
                await login(accessToken);
            }
            setLoading(false);
              

        })()
    },[])
    const login = async (accessToken) => {
        try {
            const response = await userCtr.getMe(accessToken);
            delete response.password;
    
            setUser(response);
            setToken(accessToken);
        } catch (error) {
            console.error(error);
        }
    }
    const updateProfileImage = async (newProfileImage) => {
        try {
            // Aquí enviarías la nueva imagen al servidor
            // y luego actualizarías la imagen en el estado del usuario
            setUser(prevUser => ({
                ...prevUser,
                profileImage: newProfileImage
            }));
        } catch (error) {
            console.error(error);
        }
    }

    const relogin=async(refreshToken)=>{
        try {
            const {accessToken} = await authCtr.refreshToken(refreshToken);
            authCtr.setAccessToken(accessToken);
            await login(accessToken);
        } catch (error) {
         console.error(error);   
        }
    }

    const logout=()=>{
        setUser(null);
        setToken(null);
        authCtr.removeToken(); 
    }

    const data={
        accessToken:token,
        user,
        login,
        logout
    }
    if(loading) return null;

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}