import React from "react"
import { connect } from 'react-redux'

import { addLog } from '../react/actions/calculatorActions'

class AppView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    render() {
        const {title, logs, addLog} = this.props;
        const {text} = this.state;

        return <div>
            <div class="title">{title}</div>
            <div>
                <label for="field1"></label>
                <input type="text" placeholder="Please input about what you dream... ?" onChange={(e) => this.setState({text: e.target.value})}/>
                <button onClick={() => addLog(text)}>Calculate!</button>
            </div>
            <br />
            <div>
                {logs.map(log => {
                    return <div>{log}</div>
                })}
            </div>
        </div>
    }
};
 
const mapStateToProps = (store) => {
    return store;
}

const mapDispatchToProps = dispatch => ({
    addLog: text => dispatch(addLog(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppView);