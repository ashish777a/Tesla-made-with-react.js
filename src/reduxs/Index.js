import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import Store from '../app/Store' 
function Index() {
  return (
    <div>   
        <Provider store={Store}>
            <App />
        </Provider>
    </div>
  )
}

export default Index