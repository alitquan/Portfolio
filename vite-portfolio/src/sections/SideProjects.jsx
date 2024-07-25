import React from 'react' 
import styles2 from './SideProjects.module.css'
import styles from './HomeStyles.module.css' 

function SideProjects() {
	return ( 
		<section id="sideprojects" className={styles.container}>
			<div className={styles2.gridProjects}>
				<div className = {styles2.gridProjectsRow}> 
					<div className = {styles2.gridProjectsItem}>
						One
					</div>

					<div className = {styles2.gridProjectsItem}>
						Two
					</div>

				</div> 
				<div className = {styles2.gridProjectsRow}> 
					<div className = {styles2.gridProjectsItem}>
						Three
					</div>

					<div className = {styles2.gridProjectsItem}>
						Four
					</div>

				</div> 
			</div> 


		</section>
	);

} 

export default SideProjects;
