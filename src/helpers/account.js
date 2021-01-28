import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

var setToken = function(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

var  getToken = function () {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

export default { setToken, getToken };