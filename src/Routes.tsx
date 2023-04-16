import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate
}
from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Version } from './pages/Version';
import { About } from './pages/About';
import Login from './pages/Login';
import { Ventiladores, VentiladorForm , VentiladorView} from './pages/Ventiladores';
import { Proveedores, ProveedorForm , ProveedorView} from './pages/Proveedores';
import  PrivateRoute from './components/PrivateRoute';
import SignUp from './pages/Signup';
import Logout from './pages/Login/LogOut';

const Routes = ()=>{
  return (
    <Router>
      <Switch>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/version" element={<Version />} />
        <Route path="/about" element={<About />} />
        <Route path="/ventiladores" element={<PrivateRoute><Ventiladores/></PrivateRoute>} />
        <Route path="/ventiladores/new" element={<PrivateRoute><VentiladorForm/></PrivateRoute>} />
        <Route path="/ventiladores/:id" element={<PrivateRoute><VentiladorView/></PrivateRoute>} />
        <Route path="/proveedores" element={<PrivateRoute><Proveedores/></PrivateRoute>} />
        <Route path="/proveedores/new" element={<PrivateRoute><ProveedorForm/></PrivateRoute>} />
        <Route path="/proveedores/:id" element={<PrivateRoute><ProveedorView/></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Switch>
    </Router>
  );
}

export default Routes;
