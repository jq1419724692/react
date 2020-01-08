import ajax from "./ajax"
//登录
const base = "http://192.168.36.253:4000"
const loginUser = (loginname,pass) => ajax(base+"/myuser/login",{loginname,pass},"POST");
//查询所有用户
const getUserList = () => ajax(base+"/myuser/listuser","GET");
//修改用户积分u_id,points
const updatePoints = (u_id,points) => ajax(base+"/myuser/upd",{u_id,points},"POST");
//添加用户时查重
const queryUser = (loginname) => ajax(base+"/myuser/getname",{loginname},"GET");
//添加用户
const addUser = (loginname,pass) => ajax(base+"/myuser/add",{loginname,pass},"POST");
//删除用户
const delUser = (u_id) => ajax(base+"/myuser/del",{u_id},"GET");
//获取每个人的发帖数
const getNum = () => ajax(base+"/myinfo/getInNum","GET");
export {loginUser,getUserList,updatePoints,queryUser,addUser,delUser,getNum}