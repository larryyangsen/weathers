import * as React from 'react';

export default class extends React.Component {
    state = {
        hasError: false,
        errorMsg: ''
    };
    componentDidCatch(error: Error) {
        this.setState({
            hasError: true,
            errorMsg: error.toString()
        });
    }
    render() {
        const { errorMsg, hasError } = this.state;
        if (hasError) return <div className="error-message">{errorMsg}</div>;
        return this.props.children;
    }
}
