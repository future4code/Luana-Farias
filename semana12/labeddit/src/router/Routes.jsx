import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { FeedPage } from '../pages/FeedPage'
import { LoginPage } from '../pages/LoginPage'
import { PostPage } from '../pages/PostPage'
import { SignInPage } from '../pages/SignInPage'
import { ErrorPage } from '../pages/ErrorPage'

export const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ FeedPage } />
                <Route exact path="/login" component={ LoginPage } />
                <Route exact path="/post/:id" component={ PostPage } />
                <Route exact path="/signin" component={ SignInPage } />
                <Route component={ ErrorPage } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;