import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export function setToken(userToken) {
  localStorage.setItem('token', userToken);
}

export function getToken() {
  const tokenString = localStorage.getItem('token');
  return tokenString;
}

export function isLoggedIn() {
  console.log(getToken());
  return ( getToken() != null && getToken() != undefined);
}


