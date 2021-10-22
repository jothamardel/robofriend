import React from 'react';

class ErrorBounday extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err) {
        console.log('Caught Error==========>', err)
        if (err) {
            this.setState({ hasError: true })
        }
    }


    render() {
        return (
            <div>
                { this.state.hasError ? <h1>Please contact admin</h1> : this.props.children }
            </div>
        )
    }
}


export default ErrorBounday;