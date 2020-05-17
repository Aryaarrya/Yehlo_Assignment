import React from 'react' 

const ProjectDetails = (props) => {
	
	const id = props.match.params.id;
	
	return(
		<div class="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>Lorem ispum dolor sit amet consectuenn irghiwkjg ngirwhwbir krgni4whrngi ghiwheb</p>	
				</div>
				<div className="card-action gret lighten-4 grey-text">
					<div>Posted by the Net Ninja</div>
					<div>2nd September, 2AM</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails