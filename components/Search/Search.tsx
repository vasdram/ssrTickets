import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import moment from 'moment';
import styles from './Search.module.scss';
import translateMethod from '../../i18n/t';
import { useSelector, useDispatch } from 'react-redux';
import { getLang } from '../../api/I18n';
import AutocompleteInput from '../FormElements/AutocompleteInput/AutocompleteInput';
import DatepickerRange from '../FormElements/DatepickerRange/DatepickerRange';
import SearchDropdown from '../SearchDropdown/SearchDropdown';
import { useRouter } from 'next/router'
import { Btn } from '../FormElements/Btn/Btn';
import { IDeparture, IArrival } from './Search.types';
import { useState } from 'react';
import { getAdultSelector, getFlightClassSelector, getStopFlightCountSelector, getChildrenSelector, getInfantsSelector } from '../../api/Passengers';
import { getCitySelector, getQueryStringDepatcha, getQueryStringArrival, getDataCityRequestDep, getDataCityRequestArr } from '../../api/Autocomplete';
import { getAviaParams, getAviaParamsDate, updateAviaParams, updateAviaParamsWay } from '../../api/AviaParams';
import { oneWaySearchEvent, roundTripSearchEvent } from '../../helpers/searchData';
import { setTicketCity, getTicketRequest, getTIcketsStatusSelector } from '../../api/TicketsRest';
import Preloader from '../Preloader/Preoader';
import { TRootState } from '../../store/redusers.types';

const Search: React.FC<IProps> = ({fixHead}) => {

  const dispatch = useDispatch()
  const router = useRouter()

  //===================================================selectors
  const adult = useSelector(state =>  getAdultSelector(state))
  const flightClass = useSelector(state =>  getFlightClassSelector(state))
  const stopFlightCount = useSelector(state =>  getStopFlightCountSelector(state))
  const children = useSelector(state =>  getChildrenSelector(state))
  const infants = useSelector(state =>  getInfantsSelector(state))
  const options = useSelector(state =>  getCitySelector(state))
  const aviaParams = useSelector(state =>  getAviaParams(state))
  const autocompleteValueDepatcha = useSelector(state =>  getQueryStringDepatcha(state))
  const autocompleteValueArrival = useSelector(state =>  getQueryStringArrival(state))
  const aviaParamsDate = useSelector(state =>  getAviaParamsDate(state))
  const lang = useSelector(state => getLang(state))
  const status = useSelector((state: TRootState) => getTIcketsStatusSelector(state)) 
//===================================================selectors

    const [departure, setDeparture] = useState <IDeparture>({ value: '', label: '' })
    const [arrival, setArrival] = useState <IArrival>({ value: '', label: '' })
    const [selectedWay, setSelectedWay] = useState <string>('twoWay')
    const [isFix, setIsFix] = useState <boolean>(false)
    const [isMobile, setIsMobile] = useState <boolean>(false)
    
    const endDateRef = useRef(null)
    //===========================handlers
    const fixComponent = () => {
      // console.log("fixComponent", window.pageYOffset);
      
      if (window.pageYOffset >= 200) {
        setIsFix(true);
      } else {
        setIsFix(false);
      }
    };

    const reverseHandler = () => {
      dispatch( getDataCityRequestDep(autocompleteValueArrival) );
      dispatch( getDataCityRequestArr(autocompleteValueDepatcha) );
      setDeparture({ value: arrival.value, label: arrival.label })
      setArrival({ value: departure.value, label: departure.label })
    };


    const changeHandlerDeparture = (item: any) => {
      if (item.type === 'city') {
        setDeparture({ value: item.city_code, label: item.city_name.ru })
      } else {
        setDeparture({ value: item.code, label: item.name.ru })
      }
  
    };
  
    const changeHandlerArrival = (item: any) => {
      if (item.type === 'city') {
        setArrival({ value: item.city_code, label: item.city_name.ru })
      } else {
        setArrival({ value: item.code, label: item.name.ru })
      }
    };

    const findTckets = () => {
      let data: any;
      const options = {
        from: aviaParams.origin.cityCode,
        to: aviaParams.destination.cityCode,
        departTime: moment(aviaParamsDate.startDate).toDate(),
        departTimeTwo: moment(aviaParamsDate.endDate).toDate(),
        adult: adult,
        children: children,
        infants: infants,
        flightClass: flightClass,
        stopFlightCount: stopFlightCount,
        guiid: 'string'
      };
  
      if (selectedWay === 'oneWay') {
        data = oneWaySearchEvent(options);
      } else if (selectedWay === 'twoWay') {
        data = roundTripSearchEvent(options);
      }
  

      //dispatch( getTicketRequest(data) );
      dispatch( setTicketCity({cityFrom: aviaParams.origin.cityName, cityTo: aviaParams.destination.cityName}) );
      // {status === 'REQUEST' && <Preloader />} 
      // {status === 'SUCCESS' &&  }
      // console.log('---aviaParams search', aviaParams)

      router.push('/result')
    };

    const isEmptyReq = () => {
      const isEmptyEnd =  selectedWay === 'twoWay' ? !!aviaParamsDate.endDate : true
      return !!(aviaParams.origin.cityName &&  
             aviaParams.origin.cityCode &&
             aviaParams.destination.cityCode &&
             aviaParams.destination.cityCode &&  
             aviaParamsDate.startDate &&
             isEmptyEnd)
    }
    //===========================handlers

    
    useEffect(() => {
      window.addEventListener('scroll', fixComponent);
      
      if (window.innerWidth <= 725) {
        setIsMobile(true)
      }
      return () => {
        window.removeEventListener('scroll', fixComponent)
      }
    }, [])


    useEffect(() => {
      const queryData = {
        origin: {
          cityName: departure.label || aviaParams.origin.cityName,
          cityCode: departure.value || aviaParams.origin.cityCode
        },
        destination: {
          cityName: arrival.label || aviaParams.destination.cityName,
          cityCode: arrival.value || aviaParams.destination.cityCode
        }
      };
     
        dispatch(updateAviaParams(queryData));

      
    }, [arrival.value, departure.value])

    return  (
        <>
          <div
            className={cn(styles.search, {
              [styles.search__fix]: isFix, 
            [styles.search__fixHead]: fixHead 
            })}
          >
            <h1 className={styles.searchHead}>{translateMethod(lang, 'searchHead')}</h1>
            <div className={styles.search__inner}>
              
              <div className={styles.search__wrapper}>
                <div className={`${styles.search__input} ${styles.departure}`}>
                  <div
                    onClick={reverseHandler}
                    className={styles['search__rew-val']}
                  ></div>
  
                  <AutocompleteInput
                    name="departure"
                    change={changeHandlerDeparture}
                    defaultValue="Москва"
                    value={autocompleteValueDepatcha}
                  />
                </div>
  
                <div className={`${styles.search__input} ${styles.arrival}`}>
                  <AutocompleteInput
                    value={autocompleteValueArrival}
                    name="arrival"
                    change={changeHandlerArrival}
                    defaultValue="Сочи"
                  />
                </div>
  
                <div className={`${styles.search__input} ${styles['search__input-date']} ${styles.dates}`}
                >
                  <DatepickerRange
                    isMobile={isMobile}
                    changeWay={() => {
                      dispatch(updateAviaParamsWay('oneWay'));
                    }}
                    change={({ startDate, endDate }: any) => {
                      dispatch(updateAviaParamsWay('twoWay'))
                    }}
                  />
  
                </div>
                <div
                  className={`${styles.search__input} ${styles['search__input-long']} ${styles.options}`}
                >
                  <SearchDropdown />
                </div>
                <div className={`${styles.search__input} ${styles['search__input-btn']} ${styles.sbm}`}
                >
                <Btn click={findTckets} bg="yellow" disabled={!isEmptyReq()}>
                  <span>{translateMethod(lang, 'findTickets')}</span>
                </Btn>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default Search