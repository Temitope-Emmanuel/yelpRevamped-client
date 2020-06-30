import axios from "axios"


export function setTokenHeader(token){
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
    if(token){
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common["Authorization"]
    }
}


export function apiCall(method,url,payload){
    return new Promise((resolve,reject) => {
        return axios[method.toLowerCase()](`http://localhost:3001/${url}`,payload).then(
            response => {
                console.log(url)
                return resolve(response.data)
            }
        ).catch(err => {
            if(err.response){
              reject(err.response.data.error)
            }else{
                reject("Network unavailable")
            }
        }
        )
    })
}