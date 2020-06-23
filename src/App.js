import React, { useContext } from 'react';
import Context from './store/context';
import { Route, Redirect } from 'react-router-dom';
import { roadMap } from './router';
import Header from './components/Header';
import ThemeChoice from './components/Header/Theme';
import useStyles from './assets/style/baseStyle';

const App = () => {
  const { state } = useContext(Context);
  const classes = useStyles(state.isDark);

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
