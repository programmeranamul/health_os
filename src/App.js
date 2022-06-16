import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignupPage from './pages/SignupPage';
import { Routes, Route } from "react-router-dom";
import NotificationPage from './pages/NotificationPage';
import HomePage from './pages/HomePage';
import OrderDetails from './pages/OrderDetails';
import FooterMenu from './components/common/FooterMenu';

function App() {
  return (
    <>
   <main>
   <Routes>
  
  {/* <Home></Home> */}
  {/* <SignInPage /> */}
  <Route path="/" element={<HomePage />} />
  <Route path="/notification" element={<NotificationPage />} />
  <Route path="/sing-up" element={<SignupPage />} />
  <Route path="/sing-in" element={<SignInPage />} />
  <Route path="/order-details" element={<OrderDetails />} />

</Routes>
   </main>
    <FooterMenu />
    </>
    
  );
}

export default App;
