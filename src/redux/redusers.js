import {combineReducers} from 'redux'
import {SAVE_USER,REMOVE_USER,SET_TITLE} from './action-types'
import {setItem,getItem,removeItem} from '../utils/storage'
const initUser = {
    user:getItem('user') || {},
    token:getItem('token') || ''
}
function user(preState=initUser,action) {
    switch (action.type) {
        case SAVE_USER:
            //进行持久化存储
            setItem('user',action.data.user)
            setItem('token',action.data.token)
            return action.data
        case REMOVE_USER:
            // 清除本地数据
            removeItem('user')
            removeItem('token');
            // 清除redux中的数据
            return{
                user:{},
                token: ""
            }
        default:
            return preState;
    }
}
function title(preState='',action) {
  switch (action.type) {
      case SET_TITLE:
          return action.data
      default:
          return preState
  }
}
export default combineReducers({
    user,
    title
})