import * as React from 'react';

class SimpleText extends React.Component {
    render() {
        const { children } = this.props;
        const styles = { fontStyle: 'italic' };

        return <span style={styles}>{children}</span>;
    }
}

export default SimpleText;
