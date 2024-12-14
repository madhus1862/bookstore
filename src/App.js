// import './App.css'; 
import LoginForm from './components/login/login'; 
import BookPage from "./components/book/book"; 
import CartPage from "./components/cart/cart"; 
import HomePage from "./components/home/home"; 
import AdminPage from "./components/admin/admin"; 
import PaymentPage from "./components/payment/payment"; 
import ContactPage from "./components/contact/contact"; 

import {
  BrowserRouter as Router,Routes,Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<LoginForm />} />
      <Route exact path='/book' element={<BookPage />} />
      <Route exact path='/cart' element={<CartPage />} />
      <Route exact path='/home' element={<HomePage />} />
      <Route exact path='/admin' element={<AdminPage />} />
      <Route exact path='/payment' element={<PaymentPage />} />
      <Route exact path='/contact' element={<ContactPage />} />

      </Routes>
    </Router>
  );
}

export default App;