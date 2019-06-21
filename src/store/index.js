//引入管理员 里面有原始数据
import reducer from './reducers';
//引入仓库生成器
import{createStore} from 'redux';
//把管理员和store一起暴露
export default createStore(reducer);