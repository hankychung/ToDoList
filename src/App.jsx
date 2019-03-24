import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route } from 'react-router-dom'
import Hello from '@pages/hello/Hello'

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Hello} />
  </BrowserRouter>
)

export default hot(App)
