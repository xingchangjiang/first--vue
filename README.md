##  技术栈

    vue+vuex+vue-router+webpack+ES6/7 +sass

##  项目运行
>注意：由于涉及大量的 ES6/7 等新属性，node 需要 6.0 以上版本

    git clone https://github.com/xingchangjiang/first--vue.git

    cd client

    npm install 或 yarn(推荐)

    npm run dev

## 目标功能
>登录-渲染-详情-提交
   
##  项目布局

    src/api/index.js                    //接口文件
    components/Head.vue                 //全局头部组件
    components/List.vue                 //列表组件
    components/Nav.vue                  //导航组件 
    components/Navbtn.vue               //按钮组件
    components/alertMessage/index.vue   //弹窗组件
    router/index.js                     //路由配置项
    static/fonts                        //字体图标
    static/scss                         //sass文件
    store                               //vuex仓库
    utils/fiexble.js                    //排版方法
    utils/isfile.js                     //验证图片方法
    utils/request.js                    //axios二次封装
    views/Home.vue                      //首页
    views/Login.vue                     //登录界面
    views/Send.vue                      //提交任务
    views/detail/index.vue              //列表详情页
        