import React from 'react';
import { Redirect, Route, routerRedux, Switch } from 'dva/router';
import { LocaleProvider, Button } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';

import styles from './index.less';
// import AuthorizedRoute from './common/AuthorizedRoute';
// import Login from './routes/Login';
// import App from './layouts/App';

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
        <div>
          <p className={styles.test}>hello</p>
          <br/>
          <Button type="primary">Primary</Button>
        </div>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
