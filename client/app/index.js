import React from 'react'
import {render} from 'react-dom'
import {Router, Link, browserHistory, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import {StyleRoot} from 'radium';
import store, {history} from './store.js'
import MainWrapper from './components/mainwrapper.js'

//todo - takeout provider if no redux implementation
const Root = (
	<StyleRoot>
		<Provider store={store}>
			<Router history={history}>
				<Route path="*" component={MainWrapper} />
			</Router>
		</Provider>
	</StyleRoot>
)

render(Root, document.getElementById('app'))