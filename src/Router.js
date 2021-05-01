import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
// import Details from './pages/Details';
import Units from './pages/Units';
import Unity from './pages/Unity';
import CreateUnityOrUser from './pages/CreateUnityOrUser';
import CreateAssets from './pages/CreateAssets';

const Router = () => {
  return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/* <Route exact path="/details/:unity_id" component={Details} /> */}
        <Route exact path="/units/:_id" component={Units} />
        <Route exact path="/unity/:_id" component={Unity} />
        <Route exact path="/create-user-or-unity/:company_id" component={CreateUnityOrUser} />
        <Route exact path="/create-assets/:unity_id" component={CreateAssets} />
      </Switch>
  )
}

export default Router;