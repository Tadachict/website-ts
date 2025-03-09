import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './style.css'
import Home from './home';
import About from './about';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Login from './Login';


const App:React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const validUser = {email: "admin@gmail.com", password: "12345", name:"AD: Carlos Tiburcio"};
  const handlelogin = (email: string, password:string) => {
    if(email === validUser.email && password === validUser.password){
      setIsAuthenticated(true);
      setUserName(validUser.name)
    }
    else{
      alert("Usuario o contraseña incorrectos");
    }
  };

  const handlelogout = () => {
    setIsAuthenticated(false);
    setUserName("");
  };

  return(
    <Router>
      {isAuthenticated && <Navbar onLogout={handlelogout} userName ={userName}/>}
      <div className="content-container">
        <div className="content">
          <Routes>
            {!isAuthenticated?(
              <Route path="/*" element = {<Login onLogin = {handlelogin}/>}/>
            ):(
              <>
              <Route path="/" element = {<Home userName={userName}/>}/>
              <Route path="/about" element = {<About/>}/>
              <Route path="/gallery" element = {<Gallery/>}/>
              <Route path="/login" element = {<Navigate to="/"/>}/>
              </>
            )
            }
          </Routes>
        </div>
      </div>
    </Router>
  )
};
export default App;
