import ReactDOM from "react-dom";
import React from "react"

import { createStore } from "redux"; 
import { Provider } from 'react-redux'
import { rootReducer } from "./react/reducers/calculatorReducer";

import Calculator from "./react/calculator";

const store = createStore(rootReducer, {
    title: "Calculator which calc impossible things",
    logs: [
        "First note"
    ]
});  
 
if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <Calculator initialState={{
                title: "Simple calculator"
            }}
            />
        </Provider>
    , 
    document.getElementById("root"));
}