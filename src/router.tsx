import React from 'react';
import { Redirect, Route, routerRedux, Switch } from 'dva/router';
import { LocaleProvider, Button } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';

import styles from './index.less';
// import AuthorizedRoute from './common/AuthorizedRoute';
// import Login from './routes/Login';
// import App from './layouts/App';

import PageA from './routes/PageA';
import PageB from './routes/PageB';

interface RoutersProps{
  history: object;
  app: object;
}

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }: RoutersProps) {
  // const passProps = {
  //   app,
  //   component: App,
  // };
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={PageA} />
          <Route exact path="/b" component={PageB} />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
