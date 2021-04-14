import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Homepage } from '../pages/Homepage'
import { ListTripsPage } from '../pages/ListTripsPage'
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { LoginPage } from "../pages/LoginPage";
import { AdminHomepage } from "../pages/AdminHomepage";
import { CreateTripPage } from "../pages/CreateTripPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";

const privateRoute = () => {

}

const Routes = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/trips/list" component={ListTripsPage} />
                <Route exact path="/trips/application" component={ApplicationFormPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/admin/trips/list" component={ AdminHomepage } />
                <Route exact path="/admin/trips/create" component={ CreateTripPage } />
                <Route exact path="/admin/trips/:id" component={ TripDetailsPage } />
            </Switch>
        </BrowserRouter>
        </>
    )
}

export default Routes;