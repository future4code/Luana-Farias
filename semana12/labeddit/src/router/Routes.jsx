import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { FeedPage } from '../pages/FeedPage'
import { LoginPage } from '../pages/LoginPage'
import { PostPage } from '../pages/PostPage'
import { SignInPage } from '../pages/SignInPage'
import { ErrorPage } from '../pages/ErrorPage'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


const CustomRoute = ({isPrivate, ...rest}) => {
    const location = useLocation();
    const { states: {isAuth} } = useContext(AuthContext);

    if(isPrivate && isAuth === false) {
        return <Redirect to="/login"/>
    };

    if(isAuth && location.pathname === "/login") {
        return <Redirect to="/" />
    };

    if(isAuth && location.pathname === "/signin") {
        return <Redirect to="/"/>
    };

    return (
        <Route 
            {...rest}
        />
    );
};


export const Routes = () => {


    return (
            <Switch>
                <CustomRoute isPrivate exact path="/" component={ FeedPage } />
                <CustomRoute exact path="/login" component={ LoginPage } />
                <CustomRoute isPrivate exact path="/post/:id" component={ PostPage } />
                <CustomRoute exact path="/signin" component={ SignInPage } />
                <CustomRoute component={ ErrorPage } />
            </Switch>
    );
};

export default Routes;