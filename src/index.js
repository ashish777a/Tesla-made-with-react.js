import React from 'react';
import ReactDOM from 'react-dom/client';
import Tesla from './Tesla/Tesla'
import Axiosdata from './axios/Axiosdata';
import Axiosbox from './boxes-axios/Axiosbox';
import Axiostry from './axios-try/Axiostry';
import Games from './Games/Games';
import Sarchmovie from './sarch movie/Sarchmovie';
import ToDoList from './To do list/ToDoList'
import Mouse from './mouse/Mouse'
import Menu from './menu/Menu'
import App from './pagelayout/App'
import AppBooks from './Books/AppBooks'
import FakeStore from './FakeStoreApi/MenuFake'
import AppFake from './Books/AppFake';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Tesla/>
  // <Axiosdata/>
  // <Axiosbox />
  // <Axiostry />
  // <ToDoList />
  // <Sarchmovie/>
  // <Games />
  // <Mouse />
  // <Menu />
  // <App/>
  
  // <AppBooks />
  // <FakeStore />
  <AppFake/>

);
 