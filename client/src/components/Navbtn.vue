<template>
    <div class="main-top">
        <div class="top-cont">
            <span v-for="(item,index) in maintop" :key="index" @click="add(item.type)" :class="{active:type==item.type}">{{item.title}}</span>
        </div>
        <div class="top-right">
            <span class="iconfont icon-share"></span>
            <span class="iconfont icon-gengduo-2"></span>
        </div>
    </div>
</template>
<script>
export default {
    props:['type'],
    components:{

    },
    data(){
        return {
            maintop:[
                {
                    title:'加班',
                    type:'overtime'
                },
                {
                    title:'休假',
                    type:'vacation'
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        add(type){
            this.$emit('add',type)
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
.main-top{
    position: relative;
    width: 100%;
    height: pxTorem(50px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    .top-cont{
        span{
            text-align: center;
            display: inline-block;
            width: pxTorem(100px);
            height: pxTorem(30px);
            line-height: pxTorem(30px);
            border:1px solid #ccc;
            font-size: pxTorem(13px);
            &:nth-child(1){
                border-radius: pxTorem(25px) 0 0 pxTorem(25px);
                color: green;
                &.active{
                    color:#fff;
                    background:green;
                }
            }
            &:nth-child(2){
                border-radius: 0 pxTorem(25px) pxTorem(25px) 0;
                color:green;
                &.active{
                    color:#fff;
                    background:green;
                }
            }
            
        }
    }
    .top-right{
        position: absolute;
        right:pxTorem(10px);
        top:pxTorem(15px);
        span{
            font-size: pxTorem(18px);
            margin-left: pxTorem(10px);
        }
    }
}
</style>