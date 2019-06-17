import axios from 'axios'
import router from '../router/index'
import Vue from 'vue'

const request=axios.create({
    baseURL:'http://localhost:3000'
});


//请求之前的拦截器
request.interceptors.request.use((config)=>{
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem('token')
        }
    }
},(error)=>{
    return Promise.reject(error)
})


//响应之前的拦截
request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    const response=error.response;
    const status=response.status;
    if(status>400){
        switch(status){
            case 401:
                router.push('/login')
            break;
            case 403:
                new Vue().$alert('没有权限');
            break;
            case 404:
            new Vue().$alert('页面走丢了');
            break;
        }
    }
    return Promise.reject(error)
})




export default {
    get(url,data){
        return request.get(url,{
            params:data
        })
    },
    post(url,data){
        return request.post(url,data)
    }
};