import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import VehicleType from './components/VehicleType';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import VehicleForm from './components/VehicleForm';
import PaymentForm from './components/PaymentForm';
import PaymentSuccessPage from './components/PaymentSuccessPage';
import AllRoutes from './AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
