import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Headroom from 'react-headroom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import Header from './routes/components/header';
import Home from './routes/main/home';
import Login from './routes/main/login';
import Notfound from './routes/util/notfound';
import Logout from './routes/util/logout';
import Post from './routes/post/post';
import Register from './routes/main/register';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    document.title = '반성하세요 - dodol:i';
  }
  render() {
    return (
      <div>
        <Headroom>
          <Header />
        </Headroom>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/register" component={Register} />
            <Route component={Notfound} />
          </Switch>
          <div className="App"></div>
        </Router>
      </div>
    );
  }
}

export default App;
