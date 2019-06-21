import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//引入store，把刚才的管理员和store一起拿过来
import store from './store'
//引入redux和react的连接工具
//provider 提供者是一个组件
import{Provider} from 'react-redux';
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
