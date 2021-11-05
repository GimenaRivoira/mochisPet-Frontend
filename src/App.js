import './App.css';
import Index from './Pages';
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import Products from './Pages/Allproducts';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Oneproduct from './Pages/oneProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>

        <Route path="/" exact component={Index} />
        <Route path="/products/:id" exact component={Oneproduct}/>
        <Route path="/products" exact component={Products}/>

      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
