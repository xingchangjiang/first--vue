<template>
    <header>
        <span  @click="$router.back()" class="iconfont icon-arrow-left"></span>
        <slot></slot>
    </header>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../static/scss/common.scss';
@import '../static/scss/_minix.scss';
header{
    width: 100%;
    height: pxTorem(44px);
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(1){
            flex:1;
             font-size: pxTorem(20px);
        }
        &:nth-child(2){
            flex:7;
            font-size: pxTorem(18px);
        }
        &:nth-child(3){
            flex:1;
            font-size: pxTorem(20px);
        }
        &:nth-child(4){
            flex:1;
            font-size: pxTorem(20px);
        }
    }
}
</style>