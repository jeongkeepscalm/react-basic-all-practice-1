import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
  React.StrictMode
    개발 환경에서 컴포넌트가 2번 렌더링된다.
    why?
      잠재적인 버그를 감지하고, 예상치 못한 부작용을 방지하기 위해서
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
