
/*
* 发送请求函数封装
*
* */
import axios from './request';

export const reqLogin = (username, password) => axios.post('/login', { username, password });