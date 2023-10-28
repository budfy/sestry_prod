import './App.scss';

import { Route, Routes } from 'react-router';

import Container from './components/base-components/Container';
import Footer from './components/site-components/Footer/Footer';
import Header from './components/site-components/Header/Header';
import IndexRoute from './routes/index/Index';

function App() {
  return (
    <div className="App">
      <Header cart_full='0'/>
      <main classname="main">
        <Routes>
          <Route path='/' element={<IndexRoute />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
