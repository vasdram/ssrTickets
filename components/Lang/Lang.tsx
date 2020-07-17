import React from 'react';
// import { connect } from 'react-redux';
import styles from './Lang.module.scss';
import { setLang } from '../../api/I18n/index';
import cn from 'classnames';
import { TProps } from './Lang.types';
import { useDispatch } from "react-redux";

//, TState
export const Lang:React.FC<TProps> = () =>  {
  const [active, setActive] = React.useState<string | null>( 'ru')
  const dispatch = useDispatch()

  const clickHandler = (e: React.SyntheticEvent<HTMLSpanElement>) => {
    const lang = e.currentTarget.getAttribute('data-lang') || 'ru';
    localStorage.setItem('lang', lang);
    setActive( e.currentTarget.getAttribute('data-lang') );
    dispatch(setLang(e.currentTarget.getAttribute('data-lang') || 'ru'));
  };

    return (
      <div className={styles.choiseLang}>
        <span
          className={cn({ [styles.active]: active === 'ru' })}
          onClick={clickHandler}
          data-lang="ru"
        >
          RU
        </span>
        <span
          className={cn({ [styles.active]: active === 'en' })}
          onClick={clickHandler}
          data-lang="en"
        >
          ENG
        </span>
      </div>
    );
}

// const mapDispatchToProps = { setLang };
//
//
// export default connect(null, mapDispatchToProps)(Lang);
