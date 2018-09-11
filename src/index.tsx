import dva from 'dva'
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'
import 'moment/locale/zh-cn';

import router from './router'
import './index.less';

const app = dva({
  history: createHistory(),
  onError(error: any) {
    console.error(`dva global error: ${error}`);
  },
});

// 2. Plugins
app.use(createLoading({ effects: true }));

// 3. Model
// app.model(require('./models/app'))

// 4. Router
app.router(router.default);

// 5. Start
app.start('#root');

export default app._store; // eslint-disable-line
