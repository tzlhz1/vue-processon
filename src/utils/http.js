import axios from 'axios'

let  base_url = ""

console.log('-------',process.NODE_ENV)
switch (process.env.NODE_ENV) {
    case 'dev':
        base_url = process.env.VUE_APP_DEV
        break;
    default:
        break;
}


const HTTP_CONFIG = {
    timeout: 5000,
    baseURL:base_url
}
Object.entries(HTTP_CONFIG).forEach(([key,value])=>{
    axios.defaults[key] = value
})
console.log(Object.entries(HTTP_CONFIG))

axios.interceptors.request.use(config=>{
    // 在发送请求之前做些什么
    return config;
}, error=>{
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.interceptors.response.use(config=>{
    // 在发送请求之前做些什么
    return config;
}, error=>{
    // 对请求错误做些什么
    return Promise.reject(error);
})
  
export function get(url){
    return (data={},config)=>{
        Promise.resolve(
            axios.get(url,data,config).then(response=>response.data)
        ) 
    }
}

export function post(url){
    return (data={},config)=>{
        Promise.resolve(
            axios.post(url,data,config).then(response=>response.data)
        ) 
    }
}