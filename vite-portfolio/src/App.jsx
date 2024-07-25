import './App.css'
import Home from './sections/Home.jsx'; 
import AboutMe from './sections/AboutMe.jsx';
import SideProjects from './sections/SideProjects.jsx';
import ContactMe from './sections/ContactMe.jsx';
import Footer from './sections/Footer.jsx';


function App() {
  return <>
	<Home /> 
	<AboutMe />;
	<SideProjects />;
	<ContactMe />; 
	<Footer />;
	</>;
}
 

export default App;
