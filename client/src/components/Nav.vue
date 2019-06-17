<template>
    <nav>
        <div v-for="item in navlist" :key="item.status" :class="{active:item.status==status}"  @click="add(item.status)">
            <span :class=item.icon></span>
            <span>{{item.title}}</span>
        </div>
    </nav>
</template>
<script>
export default {
    props:["status"],
    components:{

    },
    data(){
        return {
             navlist:[
                {
                    title:'待处理',
                    icon:'iconfont icon-yibangding',
                    status:0
                },
                {
                    title:'已发起',
                    icon:'iconfont icon-07',
                    status:1
                },
                {
                    title:'待处理',
                    icon:'iconfont icon-yibangding',
                    status:2
                }
            ],
        }
    },
    computed:{

    },
    methods:{
        add(status){
            this.$emit('add',status)
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
nav{
    width: 100%;
    height: pxTorem(100px);
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color:#ccc;
        span{
            &:nth-child(1){
                font-size: pxTorem(25px);
            }
            &:nth-child(2){
                font-size: pxTorem(15px);
            }
        }
        &.active{
            color:green;
        }
    }
}
</style>