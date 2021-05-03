import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import { FeedPage } from '../pages/FeedPage'
import { LoginPage } from '../pages/LoginPage'
import { PostPage } from '../pages/PostPage'
import { SignInPage } from '../pages/SignInPage'
import { ErrorPage } from '../pages/ErrorPage'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalStateContext } from '../global/GlobalStateContext'
import { AuthContext } from '../context/AuthContext'


const CustomRoute = ({isPrivate, ...rest}) => {
    const { states: {isAuth} } = useContext(AuthContext);
    if(isPrivate && isAuth === false) {
        return <Redirect to="/login"/>
    } 
    return (
        <Route 
            {...rest}
        />
    )
}


export const Routes = () => {


    return (
            <Switch>
                <CustomRoute isPrivate exact path="/" component={ FeedPage } />
                <CustomRoute exact path="/login" component={ LoginPage } />
                <CustomRoute isPrivate exact path="/post/:id" component={ PostPage } />
                <CustomRoute exact path="/signin" component={ SignInPage } />
                <CustomRoute component={ ErrorPage } />
            </Switch>
    )
}

export default Routes;