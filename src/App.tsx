import * as React from "react";
import { Switch, Route } from "react-router-dom";
import "typeface-nunito";

export default class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/datatable" component={Example} />
            </Switch>
        );
    }
}

