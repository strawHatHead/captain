import React from 'react';
import {
 Card
} from '@alifd/next';
import styles from './index.module.scss';

export default function Base() {
  return (
    <Card className={styles.Base}>
      <div className={styles.Base_title}>网络</div>
    </Card>
  );
}
