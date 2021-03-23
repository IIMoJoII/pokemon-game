import HomePage from "./routs/Home";
import GamePage from "./routs/Game";
import {Route, useRouteMatch, Switch, Redirect} from 'react-router-dom'
import MenuHeader from "./components/MenuHeader/MenuHeader";
import cn from 'classnames'
import './App.css'
import s from './style.module.css'
import Footer from "./components/Footer/Footer";
import {NotFound} from "./routs/NotFound";
import {Contact} from "./routs/Contact";
import {About} from "./routs/About";
import {FireBaseContext} from "./context/firebaseContext";
import Firebase from "./service/firebase";


function App() {
    const match = useRouteMatch('/')

    return (
        <FireBaseContext.Provider value={new Firebase()}>
            <Switch>
                <Route>
                    <>
                        <MenuHeader bgActive={!match.isExact} />
                        <div className={cn(s.wrap, {[s.isHomePage]: match.isExact})}>
                            <Switch>
                                <Route path="/" exact component={HomePage} />
                                <Route path="/game" component={GamePage} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact}/>
                                <Route render={() => (<Redirect to="/404" />)} component={NotFound} />
                            </Switch>
                        </div>
                        <Footer />
                    </>
                </Route>
            </Switch>
        </FireBaseContext.Provider>
    )
}

export default App;
