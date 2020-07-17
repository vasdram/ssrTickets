import * as React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ru';
import 'react-dates/initialize';
// import '../../../public/styles/react-dates.css';
import styles from './DatepickerRange.module.scss'
import { updateAviaParamsDate, getAviaParamsDate } from '../../../api/AviaParams';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';

export type TDatepickerRange = {
    change: ({ startDate, endDate }: any) => void
    changeWay: () => void,
    isMobile: boolean,
    updateAviaParamsDate: (date: object) => void,
    aviaParamsDate: any
}


class DatepickerRange extends React.Component <TDatepickerRange> {
    state = {
        startDate: null,
        endDate: null,
        focusedInput: null,
        disableEndDate: false
    }

    componentDidMount() {
        moment.locale('ru')
    }

    renderHeader = () => {
        return <div style={{borderBottom: "1px solid #000", display: "flex", justifyContent: 'space-around', paddingTop: "20px", paddingBottom: "20px",}}>
            <div  style={{
                fontWeight: 700,
                fontSize: '21px'
            }}>Выберите дату:</div>
            <div style={{
                padding: '10px', 
                border: '1px solid #000',
                borderRadius: '4px',
                cursor: 'pointer'    
            }} 
            onClick={()=>{
                this.setState({
                    endDate: "",
                    disableEndDate: "endDate",
                    focusedInput: false
                })
                this.props.changeWay()
            }}>Обратный билет не нужен</div>  
        </div>
    }

    onChangeHandler = ({ startDate, endDate }: any) => {
      
        this.setState({
            startDate,
            endDate,
        })


        this.props.updateAviaParamsDate({
            startDate: moment(startDate),
            endDate: !!endDate ?  moment(endDate) : null
          })
    }

    onFocusChangeHandler = (focusedInput: any) => {
        this.setState({
            focusedInput,
            disableEndDate: false,
            [focusedInput]: ''
        })
    }

    isOrientation = () => {
        return this.props.isMobile ? "vertical" : "horizontal"
    }
    
    render() {
        const {aviaParamsDate} = this.props
                console.log(aviaParamsDate);
                
        return (
            <div className={styles.dateRangePickerWrapper}>
                <DateRangePicker
                    startDate={aviaParamsDate.startDate} // momentPropTypes.momentObj or null,
                    startDateId="startDate" // PropTypes.string.isRequired,
                    endDate={aviaParamsDate.endDate} // momentPropTypes.momentObj or null,
                    endDateId="endDate" // PropTypes.string.isRequired,
                    startDatePlaceholderText="Туда"
                    endDatePlaceholderText="Oбратно"
                    onDatesChange={this.onChangeHandler} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChangeHandler} // PropTypes.func.isRequired,
                    hideKeyboardShortcutsPanel={true}
                    disabled={this.state.disableEndDate}
                    displayFormat="DD.MM.YYYY"
                    // showDefaultInputIcon
                    //keepOpenOnDateSelect
                    withFullScreenPortal={this.props.isMobile}
                    calendarInfoPosition="top"
                    renderCalendarInfo={this.renderHeader}
                    orientation={this.isOrientation()}
                    />
            </div>
        )
    }
    
}

const mapStateToProps = (state: any) => ({
    aviaParamsDate: getAviaParamsDate(state) 
 })

const mapDispatchToProps = {
    updateAviaParamsDate
}

export default connect(mapStateToProps, mapDispatchToProps)(DatepickerRange)