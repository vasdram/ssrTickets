import * as React from 'react';
import cn from 'classnames';
import styles from './Ticket.module.scss';
import {Btn} from '../FormElements/Btn/Btn';
import {getDate, getClock, getTimeDiff} from '../../helpers/formateDate';
import {IPropsTickets} from '../TicketList/Tickets.types';
import {TicketsFlyDetails} from '../TicketsFlyDetails/TicketsFlyDetails';

// const logo = require('../../public/images/flights/NW.png');
//IPropsTickets
export const Ticket: React.FC<IPropsTickets> = (props) => {
    const [active, setActive] = React.useState(false)
    const activeInfoHandler = () => {
        setActive(!active)
    }
    const testClick = () => {
        // console.log('asdsad');
    };

    const {
        there,
        back,
        priсe,
        uri,
        cityFrom,
        cityTo,
        thereList,
        backList
    } = props;

    return (
        <div className={styles.ticket}>
            <div onClick={activeInfoHandler} className={styles.ticket__aside}></div>
            <div className={styles.ticket__options}>
                <div className={styles.ticket__info}>
                    <div
                        className={cn(styles.ticket__head, {[styles.active]: active})}>{`Туда: ${cityFrom} - ${cityTo}`}</div>
                    <div className={styles.ticket__there}>
                        <div className={styles.ticket__logo}>
                            {/* <img src={`/images/flights/${there[0].airline.code}.png`} width="90"
                                 height="90" title={there[0].airline.name} alt={there[0].airline.name}/> */}
                        </div>
                        <div className={styles.ticket__departure}>
                            <div className={styles.ticket__time}>
                                {getClock(there[0].departureDateTime)}
                            </div>
                            <div className={styles.ticket__place}>{cityFrom}</div>

                            {/*<div className={styles.ticket__date}>{getDate(there.departureDateTime)}</div>*/}
                        </div>
                        <div className={styles.ticket__flyline}>
                            <div className={styles.ticket__flytime}>
                                {getTimeDiff(there[there.length - 1].arrivalDateTime, there[0].departureDateTime)}
                            </div>
                            <div className={styles.ticket__from}>
                                {there[0].departureAirport.code}
                                <div className={styles.ticket__flyInfo}>
                                    {`Вылет из аэропорта ${there[0].departureAirport.name} в  ${getClock(there[0].departureDateTime)}`}
                                </div>
                            </div>
                            <div className={styles.ticket__line}>
                                {thereList.length &&
                                thereList.map((item, index, arr) => {
                                  if(index !== 0 || index !== arr.length - 1) {
                                    return <div className={styles.ticket__linePoint}>
                                        <div className={styles.ticket__linePointInfo}>
                                            {`Пересадка в аэропорту ${item.departureAirport.name} в 
                                                    ${getClock(item.departureDateTime)}`}
                                        </div>
                                    </div>
                                  }
                                })
                                }
                            </div>
                            <div className={styles.ticket__to}>
                                {there[there.length - 1].arrivalAirport.code}
                                <div className={styles.ticket__flyInfo}>
                                    {`Прилет в аэропорт ${there[there.length - 1].arrivalAirport.name} в 
                ${getClock(there[there.length - 1].arrivalDateTime)}`}
                                </div>
                            </div>
                        </div>
                        <div className={styles.ticket__arrival}>
                            <div className={styles.ticket__time}>
                                {getClock(there[there.length - 1].arrivalDateTime)}
                            </div>
                            <div className={styles.ticket__place}>{cityTo}</div>
                        </div>
                    </div>
                    <div className={cn(styles.ticket__details, {[styles.active]: active})}>
                        {thereList.map((item: any) => {
                            return <TicketsFlyDetails logoName={item.airline.name} logo={item.airline.code}
                                                      flightNumber={item.flightNumber}
                                                      departureTime={item.departureDateTime}
                                                      arrivalTime={item.arrivalDateTime}
                                                      departureСode={item.departureAirport.code}
                                                      arrivalСode={item.arrivalAirport.code}
                                                      departureName={item.departureAirport.name}
                                                      arrivalName={item.arrivalAirport.name}/>
                        })}
                    </div>
                </div>


                {!!back.length && <div className={styles.ticket__info}>
                    <div
                        className={cn(styles.ticket__head, {[styles.active]: active})}>{`Обратно: ${cityTo} - ${cityFrom}`}</div>
                    <div className={styles.ticket__back}>
                        <div className={styles.ticket__logo}>
                            {/* <img src={require(`../../public/images/flights/${back[0].airline.code}.png`)} width="90"
                                 height="90" title={back[0].airline.name} alt={back[0].airline.name}/> */}
                        </div>
                        <div className={styles.ticket__departure}>
                            <div className={styles.ticket__time}>
                                {getClock(back[0].departureDateTime)}
                            </div>
                            <div className={styles.ticket__place}>{cityTo}</div>

                            {/*<div className={styles.ticket__date}>{getDate(back.departureDateTime)}</div>*/}
                        </div>
                        <div className={styles.ticket__flyline}>
                            <div className={styles.ticket__flytime}>
                                {getTimeDiff(back[back.length - 1].arrivalDateTime, back[0].departureDateTime)}
                            </div>
                            <div className={styles.ticket__from}>
                                {back[0].departureAirport.code}
                                <div className={styles.ticket__flyInfo}>
                                    {`Вылет из аэропорта ${back[0].departureAirport.name} в 
                                    ${getClock(back[0].departureDateTime)}`}
                                </div>
                            </div>
                            <div className={styles.ticket__line}>
                                {backList.length &&
                                backList.map((item, index, arr) => {
                                    if(index !== 0 || index !== arr.length - 1) {
                                        return <div className={styles.ticket__linePoint}>
                                            <div className={styles.ticket__linePointInfo}>
                                                {`Пересадка в аэропорту ${item.departureAirport.name} в 
                                                    ${getClock(item.departureDateTime)}`}
                                            </div>
                                        </div>
                                    }
                                })
                                }
                            </div>
                            <div className={styles.ticket__to}>
                                {back[back.length - 1].arrivalAirport.code}
                                <div className={styles.ticket__flyInfo}>
                                    {`Прилет в аэропорт ${back[back.length - 1].arrivalAirport.name} в 
                ${getClock(back[back.length - 1].arrivalDateTime)}`}
                                </div>
                            </div>
                        </div>
                        <div className={styles.ticket__arrival}>
                            <div className={styles.ticket__time}>
                                {getClock(back[back.length - 1].arrivalDateTime)}
                            </div>
                            <div className={styles.ticket__place}>{cityFrom}</div>

                        </div>
                    </div>
                </div>}
                <div className={cn(styles.ticket__details, {[styles.active]: active})}>
                    {backList.map((item: any) => {
                        return <TicketsFlyDetails logoName={item.airline.name} logo={item.airline.code}
                                                  flightNumber={item.flightNumber}
                                                  departureTime={item.departureDateTime}
                                                  arrivalTime={item.arrivalDateTime}
                                                  departureСode={item.departureAirport.code}
                                                  arrivalСode={item.arrivalAirport.code}
                                                  departureName={item.departureAirport.name}
                                                  arrivalName={item.arrivalAirport.name}/>
                    })}
                </div>
            </div>
            <div className={styles.ticket__link}>
                <Btn
                    type="link"
                    target="_blank"
                    url={uri}
                    click={testClick}
                    bg="yellowLarge"
                >
                    Купить за {priсe} P
                </Btn>
            </div>
        </div>
    );

}
