import MainLayout from '../components/Layouts/MainLayout'
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'

const Home = () => {
  return (
    <MainLayout>
      <Header />
      <Search />
    </MainLayout>
  )
}
``

Home.getInitialProps = async ({store, pathname, req, res}) => {
  //await console.log('store', store);
  // store.dispatch({type: 'TICK', payload: 'was set in error page ' + pathname});
};

export default Home