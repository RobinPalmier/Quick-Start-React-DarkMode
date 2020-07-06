import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { roadMap } from './router';
import Header from './components/Header';
import ThemeChoice from './components/Header/Theme';
import useStyles from './assets/style/baseStyle';

const App = () => {
  const theme = useSelector(state => state.theme);
  const classes = useStyles(theme);

  return (
      <div className={classes.app}>
        <div className={classes.bodyApp}>
          <Header />
          <ThemeChoice />
          { 
            roadMap.map((prop,key) => 
              prop.redirect
                ? <Redirect from={prop.path} to={prop.to} key={key}/>
                : <Route path={prop.path} component={prop.component} key={key}/>
            )
          }
          </div>
        </div>
  );
}

export default App;
