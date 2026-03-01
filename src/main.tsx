//Imports React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Imports CSS
import './index.css'

//Imports Components
import App from './App.tsx'

//Imports Firebase Provider
import { FirebaseAppProvider } from 'reactfire'

//Imports Config Firebase
import { firebaseConfig } from './config/firebase.ts'

//Imports Hooks Firebase Services
import FirebaseServices from './config/firebase-services.tsx'

//Imports React Router
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseServices>
        <BrowserRouter>
           <App />
        </BrowserRouter> 
      </FirebaseServices> 
    </FirebaseAppProvider>
  </StrictMode>,
)
