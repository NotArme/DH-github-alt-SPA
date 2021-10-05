import { Switch, Route } from 'react-router-dom';

import Error404 from './pages/Errors/Error404';
import Disabled from './pages/Errors/Disabled';
<<<<<<< HEAD
import Pesquisa from "./pages/pesquisa";
=======
import Pesquisa from './pages/Pesquisa';
import Perfil from './pages/Perfil';
>>>>>>> 8b9ed9da3eb63e45a23705eb817eb6c8895b1472

function Routes() {
  return (
    <div className="container-lg">
      <Switch>
<<<<<<< HEAD
        <Route path="/pesquisa" component={Pesquisa} />
=======
        <Route path='/' exact component={Perfil} />
        <Route path='/perfil/:usuario' component={Perfil} />

        <Route path='/pesquisa' component={Pesquisa} />
>>>>>>> 8b9ed9da3eb63e45a23705eb817eb6c8895b1472
        <Route path='/contact' component={Disabled} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Routes;
