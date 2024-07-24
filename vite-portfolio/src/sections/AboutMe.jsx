import React from 'react' 
import styles2 from './AboutMe.module.css' 
import styles from './HomeStyles.module.css'

function AboutMe() {
	return ( 
		<section id="about-me" className={styles.container}>

		<p id="bio" className={styles2.bioblock}>
			My name is Ali. I am currently a system administrator with over 3 years of experience in the IT field. I have work experience with the following technologies: 
			<ul>
				<li> Windows Servers (AD, GPO, Hyper-V)  </li>
				<li> RedHat and Ubuntu Servers</li>
				<li> Cisco, Netgear, and Ubiquiti Managed Switches</li>
				<li> SonicWall and WatchGuard Firewalls</li>
				<li> MySQL and Microsoft SQL Server Maagement  </li>
				<li> Proprietary Access Control Systems</li>
			</ul>
		</p> 


		<p id="bio2" className={styles2.bioblock}>
			I have been able to program since the age of 15. I have experience with the following
			<ul> 
				<li> Python </li>
				<li> C++ </li>
				<li> Javascript </li>
				<li> Java (inc. Android Development)</li>
				<li> SQL </li>
			</ul>
		</p>

		<p id="bio3" className={styles2.bioblock}>
			In my free time I like to: 
			<ul> 
				<li> Program</li>
				<li> Homelab </li>
				<li> Play basketball </li>
				<li> Learn languages </li>
				<li> Produce music </li>
				<li> Read music </li> 
			</ul>
		</p>

		</section>
	);
} 

export default AboutMe;
