<template>
    <div class="wrap">
        <Head><span>{{this.type=="overtime"?'加班申请表':"休假申请表"}}</span></Head>
        <nav>
            <div class="left-nav">
                <span><img :src='userinfo.avatar'/></span>
            </div>
            <div class="right-nav">
                <p>申请姓名<span>{{userinfo.nickname}}</span></p>
                <p>直接主管<span>秦义超</span></p>
            </div>
            <div class="bot-nav">
                <span>&gt;</span>
            </div>
        </nav>
        <main>
            <div class="main-content">
                <div class="xinxi">
                    <h2>申请信息</h2>
                    <ul>
                        <li><span>{{types+"日期"}}</span><span><el-date-picker
                            v-model="value1"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期">
                            </el-date-picker></span></li>
                        <li><span>{{types+"类型"}}</span><span>
                                <select v-model="usertype">
                                    <option value="-1">默认选项</option>
                                    <option v-for="val in this[type+'Types']" :key="val.id" :value='val.id'>{{val.title}}</option>
                                </select>
                            </span></li>
                        <li><span>{{types+"起始时间"}}</span><span>
                            <el-time-picker
                                v-model="startTime"
                                format="HH:MM"
                                placeholder="任意时间点">
                            </el-time-picker>
                            </span></li>
                        <li><span>{{types+"截止时间"}}</span><span>
                            <el-time-picker
                                v-model="endTime"
                                format="HH:MM"
                                @change="getendTime"
                                placeholder="任意时间点">
                            </el-time-picker>
                            </span></li>
                        <li><span>共计时数</span><span>{{times}}</span></li>
                    </ul>
                </div>
                <div class="shiyou">
                    <h2>{{types}}事由</h2>
                    <ul>
                        <li><input type="text" v-model="describe"></li>
                    </ul>
                </div>
                <div class="fujian">
                    <h2>附件</h2>
                    <ul>
                        <li>
                            <img v-for="(item,i) in annex" :key="i" :src="'http://localhost:3000'+item" />
                            <input type="file" @change="addpic"  ref="filebtn"/>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <footer>
            <span @click="$router.back()">返回</span>
            <span @click="sendtask">提交</span>
        </footer>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import Isfile from '../utils/isfile'
import api from '../api/index'
export default {
    props:{
        type:String
    },
    components:{

    }, 
    data(){
        return {
            annex:[],
            value1:"",
            value:'',
            startTime:'',
            endTime:'',
            times:'',
            describe:"",
            usertype:"",
            overtimeTypes:[
                {
                    id:1,
                    title:"双休日加班"
                },
                {
                    id:2,
                    title:"节假日加班"
                },
                {
                    id:3,
                    title:"工作日加班"
                }
            ],
            vacationTypes:[
                {
                    id:1,
                    title:"年假"
                },
                {
                    id:2,
                    title:"调休"
                }
            ]
        }
    },
    computed:{
        ...mapState('user',['userinfo']),
        types(){
            return this.type=="overtime"?"加班":"休假"
        }
    },
    methods:{
        ...mapActions('user',['getUserInfo']),
        getendTime(){
            let n=new Date(this.endTime).getTime()-new Date(this.startTime).getTime()
            if(n<0){
                alert('您的操作不合法')
                return
            }else{
                this.times=n
            }
        },
        addpic(){
            let userfile=this.$refs.filebtn.files[0];
            let formdata=new FormData();

            formdata.append('file',userfile);
            let isCheck=new Isfile(this.$refs.filebtn.files[0],{
                type:['jpg','png','gif','jpeg'],
                size:3
            })
            if(isCheck.isType() && isCheck.isSize()){
                //发起请求
                //发起图片对象
                api.commitFile(formdata).then(res=>{
                    this.annex.push(res.url)
                })
            }else{
                this.$alert('文件不符合规格')
            }
        },
        sendtask(){
            let options={
                annex:this.annex,
                describe:this.describe,
                endTime:this.endTime,
                startTime:this.startTime,
                type:this.usertype
            }
            api['submit'+this.type](options).then(res=>{
                let {msg}=res
                if(msg==="提交成功"){
                    this.$alert(msg)
                    this.$router.back()
                }
            })
        }
    },
    created(){
        this.getUserInfo()
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../static/scss/common.scss';
header{
    background: green;
    span{
        color:#fff;
    }
}
nav{
    width: 100%;
    height: pxTorem(150px);
    background: green;
    display: flex;
    padding-top:pxTorem(10px);
    border-radius: 0 0 pxTorem(25px) pxTorem(25px);
    .left-nav{
        flex:2;
        display: flex;
        justify-content: center;
        span{
            display: inline-block;
            width: pxTorem(50px);
            height: pxTorem(50px);
            border-radius: 50%;
            background: #ccc;
        }
    }
    .right-nav{
        flex:6;
        display: flex;
        flex-direction: column;
        line-height: pxTorem(25px);
        p{
            color:#fff;
            font-size: pxTorem(14px);
            span{
                margin-left: pxTorem(40px);
            }
        }
    }
    .bot-nav{
        flex:1;
        span{
            color:#fff;
            font-size: pxTorem(20px);
        }
    }
}
main{
    flex:1;
    width: 100%;
    overflow: auto;
    background: #F6F6F6;
    .main-content{
        position: absolute;
        left:0;
        top:pxTorem(180px);
        width: 92%;
        margin-left: 4%;
        .xinxi,.shiyou,{
            margin-bottom:pxTorem(20px);
            width: 100%;
            background: #fff;
            border-radius: pxTorem(20px);
            h2{
                width:100%;
                height: pxTorem(50px);
                line-height: pxTorem(50px);
                border-bottom:pxTorem(1px) solid #ccc;
                font-size: pxTorem(20px);
                padding-left:pxTorem(10px);
            }
            ul{
                width: 100%;
                li{
                    width: 100%;
                    height: pxTorem(30px);
                    line-height: pxTorem(30px);
                    display:flex;
                    justify-content: space-between;
                    font-size: pxTorem(15px);
                    span{
                        &:nth-child(1){
                            padding-left: pxTorem(10px);
                        }
                        &:nth-child(2){
                            padding-right: pxTorem(10px);
                        }
                    }
                }
            }
        }
        .fujian{
            width: 100%;
            background: #fff;
            border-radius: pxTorem(20px);
            h2{
                width:100%;
                height: pxTorem(50px);
                line-height: pxTorem(50px);
                border-bottom:pxTorem(1px) solid #ccc;
                font-size: pxTorem(20px);
                padding-left:pxTorem(10px);
            }
            ul{
                width: 100%;
                li{
                    width: 100%;
                    img{
                        width: pxTorem(50px);
                        height: pxTorem(50px);
                    }
                }
            }
        }
    }
    
}
footer{
    width: 100%;
    height: pxTorem(50px);
    display: flex;
    span{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(1){
            color:#ccc;
        }
        &:nth-child(2){
            background: #404A53;
            color:#eee;
        }
        &:nth-child(3){
            background: #016341;
            color:#eee;
        }
    }
}
</style>