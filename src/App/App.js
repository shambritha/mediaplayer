import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';

import MainPanel from '../views/MainPanel';

import css from './App.module.less';




import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Header from '../components/Header';
import folderList from './components/redux/folderList';

class App extends Component{
	render(){
		return (
		<Provider store={store}>
			<div>
				<Header />
				<folderList />
			</div>
		</Provider>
		);
	}
}


export default App;