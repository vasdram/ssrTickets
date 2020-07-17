import * as React from 'react';
import styles from './TicketsFlyDetails.module.scss';
import { getClock } from '../../helpers/formateDate';

type Tlogo = {
  code: string,
  name: string
}
type TProps = {
  logo: string
  logoName: string
  departureTime: string
  arrivalTime: string
  departureСode?: string,
  arrivalСode?: string,
  departureName?: string
  arrivalName?: string
  flightNumber: string
}

const TicketsFlyDetails: React.FC<TProps> = (props) => {

  const {
    logo,
    departureTime,
    arrivalTime,
    departureСode,
    departureName,
    arrivalСode,
    arrivalName,
    logoName,
    flightNumber
  } = props;

  return (
    <div className={styles.ticket__detailsItem}>
      <div className={styles.ticket__detailsItemHead}>
        Рейс {flightNumber}
            </div>
      <div className={styles.ticket__detailsItemBody}>
        <div className={styles.ticket__detailsLogo}>
          {/* <img src={require(`../../public/images/flights/${logo}.png`)} width="90" height="90" title={logoName} alt={logoName} /> */}
        </div>
        <div className={styles.ticket__detailsInfo}>
          <div className={styles.ticket__detailsInfoLine}>
            <span className={styles.ticket__detailsInfoTime}>{getClock(departureTime)}</span> 
            <span className={styles.ticket__detailsInfoCode}>{departureСode}</span>
            <span className={styles.ticket__detailsInfoName}>{departureName}</span>
            <span className={styles.ticket__detailsInfoDate}>26 Апр, Вс</span>    
          </div>
          <div className={styles.ticket__detailsInfoLine}>
            <span className={styles.ticket__detailsInfoTime}>{getClock(arrivalTime)}</span> 
            <span className={styles.ticket__detailsInfoCode}>{arrivalСode}</span>
            <span className={styles.ticket__detailsInfoName}>{arrivalName}</span>
            <span className={styles.ticket__detailsInfoDate}>26 Апр, Вс</span>  
            </div>
        </div>
      </div>
    </div>
  )
}

export { TicketsFlyDetails }