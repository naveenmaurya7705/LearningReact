import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from "./components/card.jsx"
import Product from "./components/product.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App /><br></br>
    <Card username="William" profession="Software Engineer" country='USA'/>
    <br></br>
    <Product />
    <br></br>
    <Card username="JETJET" profession="Electrical Engineer" />
  </>
)
