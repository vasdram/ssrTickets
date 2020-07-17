import {  AppContext } from 'next/app'
import '../public/styles/common.scss';
import '../public/styles/typo.scss';
import '../public/styles/colors.scss';
import '../public/styles/react-datepicker.css';
import '../public/styles/react-dates.css';
import { Provider } from 'react-redux';
import store from "../store/store";
import { createWrapper } from 'next-redux-wrapper'
// import withReduxSaga from 'next-redux-saga'


function MyApp({ Component, pageProps }: any) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
  }

  MyApp.getInitialProps = async({Component, ctx}: AppContext) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps};
    }
  
const makestore = () => store 
const wrapper = createWrapper(makestore) 

export default wrapper.withRedux(MyApp)
