import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/screens/home/Home.jsx'
import './assets/styles/global.scss'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './redux/store.js'


const main = () => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

main()
