import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Token  {
    setToken(userToken) {
        sessionStorage.setItem('token', JSON.stringify(userToken));
      }
      
    getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      }
}



export default Token;