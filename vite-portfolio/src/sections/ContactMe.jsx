import React from 'react' 
import styles2 from './ContactMe.module.css'
import styles from './HomeStyles.module.css' 

function ContactMe() {
	return ( 
		<section id = "contact-me" className={styles.container}>
			<div className = {styles2.containerContactMe}> 
				
				<div className = {styles2.formBox}> 
					<p className={styles2.header}> 
						Contact Me
					</p>
					<div className = {styles2.formWords}>
						Name:
					</div> 
					

					<input className = {styles2.formInput} type="text" id="name" />

					<div className = {styles2.formWords}>
						E-Mail:
					</div> 

					<input className = {styles2.formInput} type="text" id="email" />

					<div className = {styles2.formWords}>
						Message: 
					</div> 

					<textarea className = {styles2.formTextArea} type="text" id="msg" />

				</div> 
			</div> 
		</section> 
	);

} 

export default ContactMe;
