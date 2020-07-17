import * as React from 'react';
import Autocomplete from 'react-autocomplete';
import styles from './AutocompleteInput.module.scss';
import { connect } from 'react-redux';

import {
  getCitySelector,
  getDataCityRequest,
  getDataCityRequestDep,
  getDataCityRequestArr
} from '../../../api/Autocomplete/index';

type TProps = {
  getDataCityRequest?: (e: any) => void;
  getDataCityRequestDep: (e: any) => void;
  getDataCityRequestArr: (e: any) => void;
  options: [];
  change: (e: any) => void;
  name: string;
  defaultValue?: string;
  value?: string;
};

// TProps
const AutocompleteInput:React.FC<TProps> = (props) => {
  const [value, setValue] = React.useState('')


  const changeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {

    setValue(e.currentTarget.value);
    if (props.getDataCityRequest) {
      props.getDataCityRequest(e.currentTarget.value);
    }

    if (props.name === 'departure') {
      props.getDataCityRequestDep(e.currentTarget.value);
    }

    if (props.name === 'arrival') {
      props.getDataCityRequestArr(e.currentTarget.value);
    }
  };

  const selectHandler = (val: string, item: any) => {
    const value = item.type === 'city' ? item.city_name.ru : item.name.ru
    if (props.name === 'departure') {
      props.getDataCityRequestDep(value);
    }
    if (props.name === 'arrival') {
      props.getDataCityRequestArr(value);
    }
    props.change(item);
  };

  const renderItems = (item: any, isHighlighted: any) => {
    const city = (<div className={styles.autocompleteCity}>
      <div className={styles.autocompleteCityTop}>
        {item.city_name.ru} (все аэропорты) <span className={styles.autocompleteCityCode}>{item.city_code}</span>
      </div>
      <div>
        <span className={styles.autocompleteCityName}>{item.country_name.ru}</span>
      </div>
    </div>)
    const air = (<div className={styles.autocompleteAir}>
      <span className={styles.autocompleteAirName}>{item.name.ru}</span> <span className={styles.autocompleteAirCode}>{item.code}</span>
    </div>)

    return (
        <div
            style={{
              padding: '10px 5px',
              background: isHighlighted ? 'lightgray' : 'white',
              borderBottom: '1px solid #58656b'
            }}
        >
          { item.type === 'city' ? city : air }
        </div>
    )
  }

    const { options } = props;

    return (
      <Autocomplete
        selectOnBlur={true}
        inputProps={{
          className: 'inputTextAutoComplete',
          placeholder: 'Введите город'
        }}
        shouldItemRender={(item: any, value:string) => item.flightable !== false || value === item.city_name.ru || value === item.name.ru || value === item.city_name.en || value === item.name.en }
        menuStyle={{ padding: '0px', zIndex: 200, position: "absolute", top: 50, left: 0 }}
        getItemValue={(item: any) => item.city_name.ru || item.city_name.en}
        items={options}
        renderItem={renderItems}
        value={props.value}
        onChange={changeHandler}
        onSelect={selectHandler}
      />
    );
}

const mapStateToProps = (state: any) => ({
  options: getCitySelector(state)
});

const mapDispatchToProps = {
  getDataCityRequest,
  getDataCityRequestDep,
  getDataCityRequestArr
};

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteInput);

// {
//   "city_code": "",
//   "city_name": { "en": "", "ru": "" },
//   "code": "",
//   "coordinates": { "lat": 0, "lon": 0 },
//   "country_code": "",
//   "country_name": { "en": "", "ru": "" },
//   "flightable": false,
//   "name": { "en": "", "ru": "" },
//   "time_zone": ""
// }
