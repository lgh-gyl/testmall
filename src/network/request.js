import axios from 'axios'


export function  request(config){
    //   1，创建axios的实列
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout: 5000
    })
    // console.log(axios.create,2222);
    //    2,axois 拦截器    //拦截请求  
  instance.interceptors.request.use(config =>{

      return config
  },err =>{
        // console.log(err)
  });
        //拦截响应
  instance.interceptors.response.use(res =>{
     return res.data
    },err =>{
         console.log(err);        
  })
   
    // 3. 发送正真的网路请求
    return instance(config)
  
   }