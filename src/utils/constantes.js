const SERVER_IP ="localhost:4000"

export const ENV = {
    BASE_PATH:`http://${SERVER_IP}`,
    BASE_API:`http://${SERVER_IP}/api`,
    API_ROUTES:{
        LOGIN:"auth/login",
        REGISTRO:"auth/registro",
        USER_ME:"userme",
        REFRESHTOKEN:"auth/refreshtoken",
        GETART: "buscarArticulo",
        POSTART:"saveArticulo",
        VERART:"articulo/"
    },

    JWT:{
        ACCESS:"access",
        REFRESH:"refresh"
    }
}