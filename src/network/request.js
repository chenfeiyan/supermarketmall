import axios from "axios"


export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/hy66",
        timeout: 5000
    });

    // 2.  axios请求的拦截
    instance.interceptors.request.use(config => {
        // console.log(config);
        // 这里拦截成功了  输出的就是我们的请求配置信息   
        // 但是我们应该return出去这个请求信息   不然后面的程序不执行
        return config;
    }, err => {
        console.log(err);
    });


    //    2-2  aixos响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);
        // 这里得到的是我们请求结果   但是我们不是在这里处理这个请求结果的   所以我们将这个res返回出去
        // 在调用这个request函数的时候在来处理这个res结果
        return res.data;
    }, err => {
        console.log(err);
    });


    // 3.发送真正的axios网络请求
    return instance(config);
}