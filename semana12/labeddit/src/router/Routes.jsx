import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import { FeedPage } from '../pages/FeedPage'
import { LoginPage } from '../pages/LoginPage'
import { PostPage } from '../pages/PostPage'
import { SignInPage } from '../pages/SignInPage'
import { ErrorPage } from '../pages/ErrorPage'
import { token } from '../utils/token'

export const Routes = () => {

    const PrivateRoute = ({ component: Component, ...rest}) => (
        <Route 
        {...rest} 
            render={props =>
                token ? (
             <><Component {...props}/></>
             ) : (
             <><Redirect to={{pathname: '/login', state: { from: props.location }}} /></>
             )
            }
         />
    )

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={ FeedPage } />
                <Route exact path="/login" component={ LoginPage } />
                <PrivateRoute exact path="/post/:id" component={ PostPage } />
                <Route exact path="/signin" component={ SignInPage } />
                <Route component={ ErrorPage } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;