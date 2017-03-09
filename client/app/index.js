import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory, Route} from 'react-router'
import {StyleRoot} from 'radium';
import MainWrapper from './components/mainwrapper.js'

const Root = (
	<StyleRoot>
		<Router history={browserHistory}>
			<Route path="*" component={MainWrapper} />
		</Router>
	</StyleRoot>
)

render(Root, document.getElementById('app'))