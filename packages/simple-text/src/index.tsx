import * as React from 'react';

class SimpleText extends React.Component {
    render() {
        const { children } = this.props;

        return <span>{children}</span>;
    }
}

export default SimpleText;
