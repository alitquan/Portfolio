import React from 'react' 
import styles2 from './SideProjects.module.css'
import styles from './HomeStyles.module.css' 

function SideProjects() {
	return ( 
		<section id="sideprojects" className={styles.container}>
			<div className={styles2.gridProjects}>
				<div className = {styles2.gridProjectsRow}> 
					<div className = {styles2.gridProjectsItem}>
						<p>One</p> 
					</div>

					<div className = {styles2.gridProjectsItem}>

						<p>One</p> 
					</div>

				</div> 
				<div className = {styles2.gridProjectsRow}> 
					<div className = {styles2.gridProjectsItem}>

						<p>One</p> 
					</div>

					<div className = {styles2.gridProjectsItem}>

						<p>One</p> 
					</div>

				</div> 
			</div> 


		</section>
	);

} 

export default SideProjects;
