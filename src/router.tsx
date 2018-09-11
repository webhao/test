import React from 'react';
import { routerRedux, Route, Switch, Redirect } from 'dva/router';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';

import styles from './index.less';
// import AuthorizedRoute from './common/AuthorizedRoute';
// import Login from './routes/Login';
// import App from './layouts/App';

const { ConnectedRouter } = routerRedux;
dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin} />;
});

function RouterConfig({ history, app }) {
  // const passProps = {
  //   app,
  //   component: App,
  // };
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <div>hello</div>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
