//import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {NextPage} from 'next';
import MainLayout from '../components/Layouts/MainLayout'
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'
import TicketList from '../components/TicketList/TicketList'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';
import { getAdultSelector, getFlightClassSelector, getStopFlightCountSelector, getChildrenSelector, getInfantsSelector } from '../api/Passengers';
import { getCitySelector, getQueryStringDepatcha, getQueryStringArrival, getDataCityRequestDep, getDataCityRequestArr } from '../api/Autocomplete';
import { getAviaParams, getAviaParamsDate, updateAviaParams, updateAviaParamsWay } from '../api/AviaParams';
import { oneWaySearchEvent, roundTripSearchEvent } from '../helpers/searchData';
import { getLang } from '../api/I18n'
import { getTIcketsStatusSelector, getTicketRequest } from '../api/TicketsRest'
import { TRootState } from '../store/redusers.types'
import { getAviaParamsWay } from '../api/AviaParams'


const Result: NextPage = ({data}: any) => {
  // useEffect(() => {
  //   console.log('qwe', data);
    
  // })
  // const adult = useSelector(state =>  getAdultSelector(state))
  // const flightClass = useSelector(state =>  getFlightClassSelector(state))
  // const stopFlightCount = useSelector(state =>  getStopFlightCountSelector(state))
  // const children = useSelector(state =>  getChildrenSelector(state))
  // const infants = useSelector(state =>  getInfantsSelector(state))
  // const options = useSelector(state =>  getCitySelector(state))
  // const aviaParams = useSelector(state =>  getAviaParams(state))
  // const selectedWay = useSelector(state =>  getAviaParamsWay(state))
  // const autocompleteValueDepatcha = useSelector(state =>  getQueryStringDepatcha(state))
  // const autocompleteValueArrival = useSelector(state =>  getQueryStringArrival(state))
  // const aviaParamsDate = useSelector(state =>  getAviaParamsDate(state))
  // const lang = useSelector(state => getLang(state))
  // const status = useSelector((state: TRootState) => getTIcketsStatusSelector(state)) 
 
 
 
//   useEffect(() => {
    
//     let data: any;
//       const options = {
//         from: aviaParams.origin.cityCode,
//         to: aviaParams.destination.cityCode,
//         departTime: moment(aviaParamsDate.startDate).toDate(),
//         departTimeTwo: moment(aviaParamsDate.endDate).toDate(),
//         adult: adult,
//         children: children,
//         infants: infants,
//         flightClass: flightClass,
//         stopFlightCount: stopFlightCount,
//         guiid: 'string'
//       };
  
//       if (selectedWay === 'oneWay') {
//         data = oneWaySearchEvent(options);
//       } else if (selectedWay === 'twoWay') {
//         data = roundTripSearchEvent(options);
//       }
//       // console.log('---selectedWay', selectedWay)
//       // console.log('---options', options)
//       //dispatch( getTicketRequest(data) );
//  }, [])

  let [hideHead, setHidehead] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', hideHeadHandler)
        return () => {
            window.removeEventListener('scroll', hideHeadHandler)
        }
        
    }, [])
 
    const hideHeadHandler = () => {
       
      if (window.pageYOffset >= 15) {
          setHidehead(true);
        } else {
          setHidehead(false);
        }
    }

    return (
    <MainLayout>
      <Header isHide={hideHead} isInn={true} isFIx={true} />
      <Search isFix={true} />
      <TicketList />
    </MainLayout>
  )
}

Result.getInitialProps = async ({store, pathname, req, res}) => {
  
      const options = {
        from: store.getState().aviaParams.params.origin.cityCode,
        to: store.getState().aviaParams.params.destination.cityCode,
        departTime: moment(store.getState().aviaParams.dates.startDate).toDate(),
        departTimeTwo: moment(store.getState().aviaParams.dates.endDate).toDate(),
        adult: store.getState().passengers.adult,
        children: store.getState().passengers.children,
        infants: store.getState().passengers.infants,
        flightClass: store.getState().passengers.flightClass,
        stopFlightCount: store.getState().passengers.stopFlightCount,
        guiid: 'string'
      };
  
  

      if (store.getState().aviaParams.selectWay === 'oneWay') {
        store.dispatch( getTicketRequest(oneWaySearchEvent(options)) )
      } else if (store.getState().aviaParams.selectWay === 'twoWay') {
        store.dispatch( getTicketRequest(roundTripSearchEvent(options)) )
      }
};

export default Result