
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import {Routes , Route} from 'react-router'
import LandingPage from './Component/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/review" element={<App/>} />
      
     
    </Routes>
  
  </BrowserRouter>
    
   

)
