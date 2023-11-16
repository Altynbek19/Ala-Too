import { useState, createContext, useEffect } from 'react'
import './App.css'
import HeaderView from './components/header/Header'
import WelcomeView from './components/Welcome'
import router from './app/index'
import {RouterProvider} from 'react-router-dom'
export const ContextBox = createContext()

function App() {
  return (
    <div className="App">
    <ContextBox.Provider>
      <RouterProvider
        router={router}
      />  
    </ContextBox.Provider>
    </div>
  )
}

export default App