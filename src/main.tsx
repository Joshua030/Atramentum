import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AtramentumApp } from './AtramentumApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>
    <AtramentumApp />
  </BrowserRouter>
  </React.StrictMode>,
)
