function extractUserId(token) { 
    const [, payloadB64] = token.split('.') //para agarrar la segunda parte del token, split devuelve un nuevo array. Se queda con la segunda parte del token
    
    const payloadJson = atob(payloadB64) //decodifica con el metodo atob a json

    const payload = JSON.parse(payloadJson) //le llega un json lo parsea y lo convierte en objeto

    return payload.sub //del objeto devuelve el sub que es el id del usuario
}

export default extractUserId