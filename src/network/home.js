import { request } from "./request";

// 我们这个函数会返回一个请求的结果
export function getHomeMultidata() {
    return request({
        url: "/home/multidata"
    })
}