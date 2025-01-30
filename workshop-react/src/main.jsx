import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gretting from './components/greeting.jsx'
import Product from './components/product.jsx'
import UserList from './components/UserList.jsx'
import ProductList from './components/ProductList.jsx'
import Person from './components/Person.jsx'
import Weather from './components/Weather.jsx'
import UserStatus from './components/UserStatus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<p>say hi to me</p>

  <App/>
  </StrictMode>,
)
