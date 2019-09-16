import {SAVE_USER,REMOVE_USER,SET_TITLE} from './action-types'
//保存用户数据
export const   saveUser = (value)=>({type:SAVE_USER, data:value})
//清除用户数据 不用传参数 用不到
export const removeUser = ()=>({type:REMOVE_USER})
//设置title
export const setTitle = (title)=>({type:SET_TITLE,data: title})