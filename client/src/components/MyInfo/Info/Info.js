import React, {Component} from 'react';

class Info extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                {this.props.phone}
            </div>
        )
    }
}

export default Info;