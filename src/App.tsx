import React from "react";
import {hot} from "react-hot-loader/root";

function AppComponent() {
    return (
        <div>
            <p>
                content
            </p>
        </div>
    );
}

export const App = hot(AppComponent);
