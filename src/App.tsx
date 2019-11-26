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
import Register from './routes/main/register';
import Mypage from './routes/main/mypage';
import FindPassword from './routes/util/FindPassword';
import UploadProducts from './routes/util/UploadProducts';
import Terms from './routes/etc/Terms';

import Comsil from './routes/service/Comsil';
import Utility from './routes/service/Utility';
import Graphics from './routes/service/Graphics'
import Game from './routes/service/Game'

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
            <Route exact path="/register" component={Register} />
            <Route exact path="/mypage" component={Mypage} />
            <Route exact path="/terms" component={Terms} />

            <Route exact path="/service/comsil" component={Comsil} />
            <Route exact path="/service/utility" component={Utility} />
            <Route exact path='/service/graphics' component={Graphics}/>
            <Route exact path='/service/game' component={Game}/>

            <Route exact path="/find/password" component={FindPassword} />

            <Route exact path="/admin/upload" component={UploadProducts} />

            <Route component={Notfound} />
          </Switch>
        <div className='Blank-small'/>
        </Router>
      </div>
    );
  }
}

export default App;
