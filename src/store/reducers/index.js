//  reducers是管理员页面
const defaultState ={
    num:100  //初始数据
};
// 暴露函数出去
export default(state =defaultState,action)=>{
    return state;  //必须return一个state
}