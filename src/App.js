import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact/:id' element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
