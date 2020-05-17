import React from 'react'
import {Link} from 'react-router-dom'



const ProjectSummary = ({project}) => {
  return (
	  
<div className="rec small">
	<div className="col s12 m7">
		<h2 className="header">{project.title}</h2>
		<div className="card horizontal">
			<div className="card-image">
				<img className="phuto" src={project.photo}></img>
			</div>
			<div className="card-stacked">
				<div className="card-content">
					<h6>{project.name}</h6>
					<p>{project.address}</p>
				</div>
				<div className="card-action">
					<a href='/'>More details</a>
				</div>
			</div>
		</div>
	</div>
</div>
  
	 

	
	
  )
}

export default ProjectSummary
