import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function setToken(userToken) {
        localStorage.setItem('token', JSON.stringify(userToken));
      }
      
function getToken() {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      }

export function isLoggedIn() {
  return ( getToken() != undefined);
  
}

export default { isLoggedIn , setToken, getToken};

