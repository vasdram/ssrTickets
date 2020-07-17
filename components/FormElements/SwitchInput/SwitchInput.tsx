import * as React from 'react';
import { TSwitchInput } from './SwitchInput.types';
import styles from './SwitchInput.module.scss';

export const SwitchInput: React.FC<TSwitchInput> = props => {
  const { onChange, value, name, isActive, children, classmod } = props;
  return (
    <label
      className={`${styles.switchIput} ${styles[classmod]} ${
        isActive ? styles.active : ''
      }`}
    >
      <input
        className={styles.input}
        type="radio"
        onChange={onChange}
        value={value}
        name={name}
        checked={isActive}
      />
      {children}
    </label>
  );
};
