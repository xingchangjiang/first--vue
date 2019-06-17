<template>
    <div class="tip" v-if="open"> 
        {{text}}
    </div>
</template>
<script>
export default {
    props:{
        text:String
    },
    components:{

    },
    data(){
        return {
            open:true,
            timer:null
        }
    },
    mounted(){
        this.timer=setTimeout(()=>{
            this.open=false
        },2000)
    },
    destroyed(){
        clearTimeout(this.timer)
    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/common.scss';
.tip{
    background: rgba(0,0,0,.5);
    color:#fff;
    padding:pxTorem(10px);
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 999999;
}
</style>