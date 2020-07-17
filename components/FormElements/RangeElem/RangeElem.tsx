import * as React from 'react';
import styles from './RangeElem.module.scss';

type TState = {
  value: number;
};

type TProps = {
  onChange?: (value: number) => void;
  defaultValue: number;
};
//, TState
export const RangeElem:React.FC<TProps>  = (props) => {
  const [value, setValue] = React.useState<number>(props.defaultValue || 0)

  const incrementHandler = () => {
    setValue(value + 1)
  };

  const decrementHandler = () => {
    if (value > 0) setValue(value - 1)
  };

  React.useEffect(() => {
    onChangeValue(value);
  }, [value])


  const onChangeValue = (value: number) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };

    return (
      <div className={styles.range}>
        <div onClick={decrementHandler} className={styles.range__cr}>
          -
        </div>
        <div className={styles.range__val}>{value}</div>

        <div onClick={incrementHandler} className={styles.range__cr}>
          +
        </div>
      </div>
    );
}
