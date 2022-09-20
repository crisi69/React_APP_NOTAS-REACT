import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InitialPage } from './pages/InitialPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { LoggedPage } from './pages/LoggedPage';
import { NotFoundPage } from './pages/NotFoundPage';






function App() {
  return (
    <main>
      
      <BrowserRouter>
      
      <Header/>

      

      
      
        <Routes>
          <Route path= "/" element = {<InitialPage/>} />
          <Route path= "/register" element = {<RegisterPage/>} />
          <Route path= "/login" element = {<LoginPage/>} />
          <Route path= "/logge" element = {<LoggedPage/>} />
          <Route path= "*" element = {<NotFoundPage/>} />
        </Routes> 
      
      
      <Footer />
      
      </BrowserRouter>
      
    </main>
  );
}

export default App;

