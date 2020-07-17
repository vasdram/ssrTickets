import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Ticket } from '../Ticket/Ticket';

import Preloader from '../Preloader/Preoader';

import { TPropsTicketsList } from './Tickets.types';
import styles from "./TicketList.module.scss";
import {getTIcketsDataRequest, getTIcketsStatusSelector, getTicketMoreRequest, getTIcketsCity} from "../../api/TicketsRest";
import {Btn} from "../FormElements/Btn/Btn";
// import { TicketTest } from '../TicketTest/Ticket';
import { TRootState } from '../../store/redusers.types';

const TicketList: React.FC = (props) =>  {

  const dispatch = useDispatch()
  const tickets = useSelector((state: TRootState) => getTIcketsDataRequest(state)) 
  const city = useSelector((state: TRootState) => getTIcketsCity(state)) 
  const status = useSelector((state: TRootState) => getTIcketsStatusSelector(state)) 
  
  const getMoreTIckets = () => {
    dispatch(getTicketMoreRequest())
  }


  const {cityFrom, cityTo} = city
    console.log('---tickets', tickets)
    
    return (
      <React.Fragment>
        
      <div className={styles.ticketList}>
        {/* {status === 'REQUEST' && <Preloader />} */}

        {tickets.map((item: any, index: number, ) => {

          if(typeof item.errorType === "undefined") {
            return <Ticket
                priсe={item.price}
                thereList={item.segment.thereFlight}
                backList={item.segment.backFlight}
                there={item.segment.thereFlight}
                back={item.segment.backFlight}
                uri={item.uri}
                key={index}
                cityTo={cityTo}
                cityFrom={cityFrom}
            />
          }

        })}
        {tickets.length > 0 &&
         <div className={styles.ticketListMore}>
        <Btn click={getMoreTIckets} bg="yellow">
          Get more tickets
        </Btn>
         </div>
        }
      </div>
        
      </React.Fragment>
    );
}


export default TicketList;


