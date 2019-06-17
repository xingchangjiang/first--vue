
import api from '../../api/'


export default {
    namespaced:true,
    state:{
        userinfo:{}
    },
    mutations:{
        setuser(state,data){
            state.userinfo=data
        }
    },
    actions:{
        getUserInfo({commit}){
            api.islogin().then(res=>{
                commit('setuser',res.data)
            })
        }
    }
}