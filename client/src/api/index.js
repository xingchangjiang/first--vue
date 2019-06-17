import request from '../utils/request'

export default {
    islogin:()=>request.get('/api/user/info'),

    getlists:(data)=>request.get('/api/task/list',data),

    userLogin:(data)=>request.post('/api/login',data),

    //提交附件
    commitFile:(file)=>request.post('/api/upload',file),

    //提交加班''

    submitovertime:(data)=>request.post('/api/apply/overtime',data),
    submitvacation:(data)=>request.post('/api/apply/vacation',data)
    
}