<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import request from './utils/request'
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
    // request.get('/api/user/info').then(res=>{
    //   console.log(res)
    // })
  },
  mounted(){

  }
}
</script>
<style scoped lang="">

</style>