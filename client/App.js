
import './App.css';
import { Login } from './components/login/index';
import './components/login/style.css';
import { Register } from './components/login/index';
const express = require('express');
const app = express(),
      bodyParser = require("body-parser"); 
      const port = 3001;

const { createProxyMiddleware } = require('http-proxy-middleware');

// app.use(
//   '/api',
//   createProxyMiddleware({
//     target: 'http://localhost:3001',
//     changeOrigin: true,
//   })
// );

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
    </div>
  );
}

export default App;
