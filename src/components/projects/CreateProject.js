import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'


class CreateProject extends Component {
	state = {
		name: '',
		image: '',
		address: ''
	}

	handleChange =(e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	
	handleSubmit =(e) => {
		e.preventDefault();
		//console.log(this.state);
		this.props.createProject(this.state)
	}


	
	render () {		
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Enter your details</h5>
					<div className="input-field">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" onChange = {this.handleChange}/>
					</div>
					<div className="input-field">
						<label htmlFor="address">Address</label>
						<input type="text" id="address" onChange = {this.handleChange}></input>
					</div>
					<div className="input-field">
						<label htmlFor="photo">Path to the image</label>
						<input type="text" id="photo" onChange = {this.handleChange}></input>
					</div>
					<div className="input-field">
						<button class="btn waves-effect waves-light">Submit</button>
					</div>
				</form>
				<div className="input-field">
						<a href="/" class="waves-effect waves-light btn-large"><i class="material-icons right">arrow_back</i>Go back to home page</a>
				</div>
				
			
				
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProject : (project) => dispatch(createProject(project))
	}
}

export default connect(null, mapDispatchToProps)(CreateProject)