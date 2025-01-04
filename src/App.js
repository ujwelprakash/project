import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Read from './pages/read'
import About from './pages/about';
import Home from './pages/home';
import Booklists from './pages/booklists';
import Footer from './pages/footer';
import Navbarone from './navbar/navbar';
import Venue from './pages/venue';
import Events from './pages/Events';
import Menu from './pages/menu';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Customer from './pages/userlogin';
import Adminlogin from './pages/login';



// const PrivateRoute = ({ element, isAuthenticated }) => {
//     return isAuthenticated ? element : <Navigate to="/Adminlogin" />;
//   };

//   function App() {
//     const [isAuthenticated, setAuthenticated] = useState(false);
//     const handlelogin = () => {
//         setAuthenticated(true); 
//     };
//     const handlelogout = () => {
//         setAuthenticated(false);
//     };

//     return ( <div className = "App" >





//             <Navbarone /> 

//             <Routes>

//            <Route path = '/' element = { < Home /> }/>


//            <Route path = 'specific' element = { < Home /> }/>

//             <Route path = 'About' element = { < About /> }/>

//             <Route path = 'Venue'element = { < Venue /> }/>

//             <Route path = 'Events' element = { < Events /> }/>

//             <Route path = 'Menu'element = { < Menu /> } />

//             <Route path = 'Customer' element = { < Customer /> } />

//             <Route path = '/book-now/:number'element = { < Booklists /> }/>

//             <Route path = '/register' element = { < Register /> } />



//             <Route path="/Dashboard" element={<PrivateRoute element={<Dashboard />}
//              isAuthenticated={isAuthenticated} />} />

//             <Route path="/Adminlogin" element={<Adminlogin onLogin={handlelogin} isAuthenticated={isAuthenticated} />}/>

//             </Routes> 

//             <Footer/>



//                     </div>
//                 );
//             }



//             export default App;

const PrivateRoute = ({ element, isAuthenticated }) => {
    return isAuthenticated ? element : < Navigate to = "/Adminlogin" / > ;
};

function App() {
    // State for Admin Authentication
    const [isAuthenticated, setAuthenticated] = useState(false);

    // Handlers for Admin Authentication
    const handleLogin = () => setAuthenticated(true);
    const handleLogout = () => setAuthenticated(false);

    return (

        <
        div className = "App" > { /* Navbar Component */ } <
        Navbarone isAuthenticated = { isAuthenticated }
        handleLogin = { handleLogin }
        handleLogout = { handleLogout }
        />

        { /* Routes Configuration */ } <
        Routes > { /* Public Routes */ } <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/specific"
        element = { < Home / > }
        /> <
        Route path = "/About"
        element = { < About / > }
        /> <
        Route path = "/Venue"
        element = { < Venue / > }
        /> <
        Route path = "/Events"
        element = { < Events / > }
        /> <
        Route path = "/Menu"
        element = { < Menu / > }
        /> <
        Route path = "/Customer"
        element = { < Customer / > }
        /> <
        Route path = "/book-now/:number"
        element = { < Booklists / > }
        /> <
        Route path = "/register"
        element = { < Register / > }
        />

        { /* Admin Protected Route */ } <
        Route path = "/Dashboard"
        element = { <
            PrivateRoute
            element = { < Dashboard / > }
            isAuthenticated = { isAuthenticated }
            />
        }
        />

        { /* Admin Login Route */ } <
        Route path = "/Adminlogin"
        element = { <
            Adminlogin
            onLogin = { handleLogin }
            isAuthenticated = { isAuthenticated }
            />
        }
        /> <
        /Routes>

        { /* Footer Component */ } <
        Footer / >
        <
        /div>

    );
}

export default App;