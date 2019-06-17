<template>
    <div class="wrap">
        <header>&times;</header>
        <h2>欢迎来到星享俱乐部</h2>
        <input type="text" v-model="user" placeholder="手机号"/>
        <input type="password" v-model="pwd" placeholder="验证码"/>
        <button @click="login">登录</button>
    </div>
</template>
<script>
import api from '../api/'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            user:"",
            pwd:'',
            userReg:/^1[3579]\d{9}$/
        }
    },
    computed:{

    },
    methods:{
        login(){
            if(this.pwd.trim()!=="" && this.userReg.test(this.user)){
                api.userLogin({
                    phone:this.user,
                    password:this.pwd
                }).then(res=>{
                    let {token}=res
                    window.localStorage.setItem('token',token)
                    this.$router.back()
                }).catch(error=>{
                    this.$alert(error.response.data.message)
                })
            }else{
                this.$alert('手机号和密码输入有误')
            }
            
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../static/scss/common.scss';
    header{
        width: 100%;
        height:pxTorem(40px);
        line-height: pxTorem(40px);
        font-size: pxTorem(30px);
        padding:0 pxTorem(10px);
    }
    h2{
        height: 100%;
        height: pxTorem(50px);
        line-height: pxTorem(50px);
        padding:pxTorem(10px);
        font-size: pxTorem(30px);
    }
    input{
        width: 90%;
        margin-left: 5%;
        height: pxTorem(50px);
        border-bottom:pxTorem(1px) solid #ccc;
        margin-top: pxTorem(10px);
    }
    button{
        width: 90%;
        margin-left: 5%;
        height: pxTorem(50px);
        margin-top: pxTorem(80px);
        border-radius: pxTorem(25px);
        font-size: pxTorem(20px);
        border:0;
    }

</style>