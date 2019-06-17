<template>
    <div class="wrap">
        <Head><span>{{this.type=="overtime"?'办公室加班申请表':"节假日休假申请表"}}</span></Head>
        <nav>
            <div class="left-nav">
                <span></span>
            </div>
            <div class="right-nav">
                <p>申请姓名<span>{{this.detaildata.nickname}}</span></p>
                <p>直接主管<span>秦义超</span></p>
                <p>申请单号<span>{{this.detaildata.applicationNumber}}</span></p>
                <p>发起时间<span>{{new Date(this.detaildata.create_at).toLocaleDateString()}}</span></p>
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
                        <li><span>加班日期</span><span>{{new Date(this.detaildata.startTime).toLocaleDateString()}}</span></li>
                        <li><span>加班类型</span><span>双休日加班</span></li>
                        <li><span>加班起始时间</span><span>{{this.detaildata.startTime}}</span></li>
                        <li><span>加班截止时间</span><span>{{this.detaildata.endTime}}</span></li>
                        <li><span>共计时数</span><span>2.4</span></li>
                    </ul>
                </div>
                <div class="shiyou">
                    <h2>加班事由</h2>
                    <ul>
                        <li>{{this.detaildata.describes}}</li>
                    </ul>
                </div>
                <div class="fujian">
                    <h2>附件</h2>
                    <ul>
                        <li>
                            <img v-for="(item,i) in this.detaildata.annex" :key="i" :src="'http://localhost:3000'+item"/>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <footer>
            <span>审批历史</span>
            <span>退回</span>
            <span>同意</span>
        </footer>
    </div>
</template>
<script>
import request from '../../utils/request'
export default {
    props:{
        type:String,
        id:String
    },
    components:{

    },
    data(){
        return {
            detaildata:{}
        }
    },
    computed:{

    },
    methods:{
        getdata(){
            request.get(`/api/apply/${this.type}`,{
                applicationNumber:this.id
            }).then(res=>{
                this.detaildata=res.data
                console.log(this.detaildata)
            })
        }
    },
    created(){
        // console.log(`/api/apply/${this.type}?applicationNumber=${this.id}`),
        this.getdata()
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/common.scss';
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
        z-index: 9999;
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