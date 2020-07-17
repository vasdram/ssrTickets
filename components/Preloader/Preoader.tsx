import * as React from 'react';
import styles from './Preloader.module.scss';

const Preloader = (): JSX.Element => (
  <div className={styles.prelloader}>
    <div className={styles.prelloader__img}>
      <div className={styles.prelloader__progress}>
        <div
          className={`${styles.prelloader__circle} ${styles['prelloader__circle-0']}`}
        />
        <div
          className={`${styles.prelloader__circle} ${styles['prelloader__circle-1']}`}
        />
        <div
          className={`${styles.prelloader__circle} ${styles['prelloader__circle-2']}`}
        />
      </div>
    </div>
  </div>
);

export default Preloader;
