import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import {auth} from "./firebase/firebase.utils";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        // Listening to user authentication
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(user);
        })
    }

    componentWillUnmount() {
        // unsubscribe to avoid memory leaks
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                {/*by putting header outside of switch we ensure that it's always rendered*/}
                <Header currentUser = {this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;
