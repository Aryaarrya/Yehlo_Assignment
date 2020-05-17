import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
	return (
		<ul className="right">
			<li><NavLink to='/add'>New Record<i class="material-icons right large">create</i></NavLink></li>
		</ul>
	)
}

export default SignedInLinks;