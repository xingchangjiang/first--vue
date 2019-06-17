<template>
    <div class="wrap">
        <Head><span>{{$route.meta.title}}</span>
        <span class="iconfont icon-riqixuanze"></span>
        <span class="iconfont icon-fangdajing"></span>
        </Head>
        <Nav :status="getlist.status" @add="changestatus"></Nav>
        <main>
            <Navbtn :type='getlist.type' @add="changetype"></Navbtn>
            <List :datalist="datalist"></List>
        </main>
        <div class="btn" @click="add">
            <span>+发起任务</span>
        </div>
        <div class="mask" v-show="flag">
            <div class="dialog">
                <span @click="$router.push('/send/overtime')">加班</span>
                <span @click="$router.push('/send/vacation')">休假</span>
            </div>
        </div>
    </div>
</template>
<script>
import List from '../components/List'
import Nav from '../components/Nav'
import Navbtn from '../components/Navbtn'
import {mapActions} from 'vuex'
import api from '../api/'
export default {
    props:{

    },
    components:{
        List,
        Nav,
        Navbtn
    },
    data(){
        return {
            flag:false,
            getlist:{
                page:1,
                pageSize:10,
                type:"overtime",
                status:0
            },
            datalist:[]
        }
    },
    computed:{

    },
    methods:{
        ...mapActions('user',['getUserInfo']),
        getlistdata(){
            api.getlists(this.getlist).then(res=>{
                this.datalist=res.data
            })
        },
        add(){
            this.flag=!this.flag
        },
        changetype(type){
            this.getlist.type=type
            this.getlistdata()
        },
        changestatus(status){
            this.getlist.status=status
            this.getlist.type='overtime'
            this.getlistdata()
        },
    },
    created(){
        this.getlistdata(),
        this.getUserInfo()
    },
    mounted(){

    }
}
</script>
<style lang="scss">
@import '../static/scss/common.scss';
.wrap{
    position: relative;
}
main{
    flex:1;
    width: 100%;
    overflow: auto;
    background: #ccc;
}
.btn{
    position: fixed;
    bottom: pxTorem(20px);
    right:pxTorem(25px);
    width: pxTorem(150px);
    height: pxTorem(50px);
    border-radius: pxTorem(25px);
    background: green;
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: pxTorem(20px);
    z-index: 99;
}
.mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    z-index: 98;
    .dialog{
        position: absolute;
        bottom:0;
        left:0;
        width: 100%;
        height: pxTorem(100px);
        background: #fff;
        span{
            display: inline-block;
            padding:pxTorem(20px);
        }
    }
}
</style>