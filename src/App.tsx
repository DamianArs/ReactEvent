import React from 'react';

import { GlobalStyles } from './theme/GlobalStyles'
import { Header } from './views/Header'
import { ListOfEvents } from './components/ListOfEvents'
import { AddNewEvent } from './components/AddNewEvent'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index'

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path='/' component={ListOfEvents} />/>
        <Route path='/add' component={AddNewEvent} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
