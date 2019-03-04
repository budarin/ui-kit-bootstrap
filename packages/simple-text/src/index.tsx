import React from 'react';

const SimpleText: React.SFC = props => {
    const { children } = props;
    const styles = { fontStyle: 'italic' };

    return <span style={styles}>{children}</span>;
};

export default SimpleText;
