<template>
    <div class="content">
        <ul v-for="(item,index) in datalist" :key="index" @click="todetail(item.list_type,item.applicationNumber)">
            <li><span>{{item.applicationNumber}}</span><span><i class="iconfont icon-yibangding"></i>待审批</span></li>
            <li><span>申请人</span><span>{{item.nickname}}</span><span>加班类型</span><span>工作日加班</span></li>
            <li><span>加班日期</span><span>{{new Date(item.startTime).toLocaleDateString()}}</span><span>加班时长</span><span>2.5</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    props:["datalist"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        
    },
    methods:{
        todetail(type,id){
            this.$router.push({
                name:'detail',
                params:{
                    type,
                    id
                }
            })
        }
    },
    created(){
        console.log(this.datalist)
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../static/scss/common.scss';
@import '../static/scss/_minix.scss';
.content{
    width: 100%;
    ul{
        width: 100%;
        height: pxTorem(150px);
        display: flex;
        flex-direction: column;
        background: #fff;
        margin-bottom: pxTorem(10px);
        li{
            &:nth-child(1){
                flex:2;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color:#aaa;
                padding: pxTorem(5px) pxTorem(10px);
            }
            &:nth-child(2){
                flex:1;
                display: flex;
                padding: pxTorem(5px) pxTorem(10px);
                span{
                    flex:1;
                    display: flex;
                    justify-content: space-between;
                }
                
            }
            &:nth-child(3){
                flex:1;
                padding: pxTorem(5px) pxTorem(10px);
                display: flex;
                span{
                    flex:1;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
}
</style>