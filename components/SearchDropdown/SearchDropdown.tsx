import * as React from 'react';
import styles from './SearchDropdown.module.scss';
import { RangeElem } from '../FormElements/RangeElem/RangeElem';
import { endWorld } from '../../helpers/endWorld';
import { connect } from 'react-redux';

import {
  getAdult,
  getFlightClass,
  getStopFlightCount,
  getChildren,
  getInfants
} from '../../api/Passengers';

type TState = {
  adult: number;
  children: number;
  infants: number;
  flightClass: number;
  stopFlightCount: number;
  countPass: number;
  showList: boolean;
};

type TProps = {
  getAdult: (value: number) => void;
  getFlightClass: (value: number) => void;
  getStopFlightCount: (value: number) => void;
  getChildren: (value: number) => void;
  getInfants: (value: number) => void;
};

class SearchDropdown extends React.Component<TProps, TState> {
  state = {
    adult: 1,
    children: 0,
    infants: 0,
    flightClass: 0,
    stopFlightCount: 0,
    countPass: 0,
    showList: false
  };

  private flightClass = ['Эконом', 'Комфорт', 'Бизнес', 'Первый класс'];
  private select = React.createRef<HTMLDivElement>()

  componentDidUpdate(prevProps: {}, prevState: TState) {
    const { adult, children, infants } = this.state;
    if (
      prevState.adult !== adult ||
      prevState.children !== children ||
      prevState.infants !== infants
    ) {
      this.setState(state => {
        return {
          ...state,
          countPass: state.adult + state.children + state.infants
        };
      });
    }
  }

  closeSelect = (e:any) => {
    if(!this.select.current!.contains(e.target) && this.state.showList) {
      this.setState({showList: false})
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.closeSelect)
    this.setState(state => {
      return {
        ...state,
        countPass: state.adult + state.children + state.infants
      };
    });
  }

  componentWillUnmount(): void {
    document.body.removeEventListener('click', this.closeSelect)
  }

  changeHadlerFlightClass = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      flightClass: Number(e.currentTarget.value)
    });
  };

  clickHandlerDropDown = (e: any) => {
    this.setState(state => {
      return {
        ...state,
        showList: !state.showList
      };
    });
  };

  changeHadlerRangeAdult = (value: number) => {
    this.setState({ adult: value });
    this.props.getAdult(value);
  };

  changeHadlerRangeChildren = (value: number) => {
    this.setState({ children: value });
    this.props.getChildren(value);
  };

  changeHadlerRangeinfants = (value: number) => {
    this.setState({ infants: value });
    this.props.getInfants(value);
  };

  changeHadlerRangestopFlightCount = (value: number) => {
    this.setState({ stopFlightCount: value });
    this.props.getStopFlightCount(value);
  };

  render() {
    const {
      showList,
      flightClass,
      countPass,
      stopFlightCount,
      adult,
      children,
      infants
    } = this.state;

    return (
      <div className={styles.dropdown} ref={this.select}>
        <div
          onClick={this.clickHandlerDropDown}
          className={styles.dropdown__value}
        >
          {`${countPass} ${endWorld(countPass)}`}
          <span>{this.flightClass[flightClass]}</span>
        </div>
        {showList && (
          <div className={styles.dropdown__list}>
            <div className={`${styles['dropdown__list-passengers']}`}>
              {/* <div className={styles.dropdown__item}>
                <div className={`${styles['dropdown__item-left']}`}>
                  <span className={`${styles['dropdown__item-name']}`}>
                    Количество пересадок
                  </span>
                </div>
                <div className="dropdown__item-right">
                  <RangeElem
                    defaultValue={stopFlightCount}
                    onChange={this.changeHadlerRangestopFlightCount}
                  />
                </div>
              </div> */}
              <div className={styles.dropdown__item}>
                <div className={`${styles['dropdown__item-left']}`}>
                  <span className={`${styles['dropdown__item-name']}`}>
                    Взрослые
                  </span>
                  <span className={`${styles['dropdown__item-desc']}`}>
                    Старше 12 лет
                  </span>
                </div>
                <div className="dropdown__item-right">
                  <RangeElem
                    defaultValue={adult}
                    onChange={this.changeHadlerRangeAdult}
                  />
                </div>
              </div>
              <div className={styles.dropdown__item}>
                <div className={`${styles['dropdown__item-left']}`}>
                  <span className={`${styles['dropdown__item-name']}`}>
                    Дети
                  </span>
                  <span className={`${styles['dropdown__item-desc']}`}>
                    От 2 до 12 лет
                  </span>
                </div>
                <div className="dropdown__item-right">
                  <RangeElem
                    defaultValue={children}
                    onChange={this.changeHadlerRangeChildren}
                  />
                </div>
              </div>
              <div className={styles.dropdown__item}>
                <div className={`${styles['dropdown__item-left']}`}>
                  <span className={`${styles['dropdown__item-name']}`}>
                    Младенцы
                  </span>
                  <span className={`${styles['dropdown__item-desc']}`}>
                    До 2 лет,
                    <br /> без места
                  </span>
                </div>
                <div className="dropdown__item-right">
                  <RangeElem
                    defaultValue={infants}
                    onChange={this.changeHadlerRangeinfants}
                  />
                </div>
              </div>
            </div>
            <div className="dropdown__list-flightClass">
              <div
                className={`${styles.dropdown__item} ${styles['dropdown__item-r']}`}
              >
                <label>
                  <input
                    onChange={this.changeHadlerFlightClass}
                    checked={flightClass === 0}
                    type="radio"
                    name=""
                    value="0"
                    id=""
                  />
                  Эконом
                </label>
              </div>
              <div
                className={`${styles.dropdown__item} ${styles['dropdown__item-r']}`}
              >
                <label>
                  <input
                    onChange={this.changeHadlerFlightClass}
                    checked={flightClass === 1}
                    type="radio"
                    name=""
                    value="1"
                    id=""
                  />
                  Комфорт
                </label>
              </div>
              <div
                className={`${styles.dropdown__item} ${styles['dropdown__item-r']}`}
              >
                <label>
                  <input
                    onChange={this.changeHadlerFlightClass}
                    checked={flightClass === 2}
                    type="radio"
                    name=""
                    value="2"
                    id=""
                  />
                  Бизнес
                </label>
              </div>
              <div
                className={`${styles.dropdown__item} ${styles['dropdown__item-r']}`}
              >
                <label>
                  <input
                    onChange={this.changeHadlerFlightClass}
                    checked={flightClass === 3}
                    type="radio"
                    name=""
                    value="3"
                    id=""
                  />
                  Первый класс
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAdult,
  getFlightClass,
  getStopFlightCount,
  getChildren,
  getInfants
};

export default connect(null, mapDispatchToProps)(SearchDropdown);
