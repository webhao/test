import React from 'react';
import { Button } from 'antd';

import styles from './index.less';

class PageA extends React.Component<{}> {
  render() {
    return (
      <div className={styles.a}>
        aaa.tsx
        <br/>
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}

export default PageA;
