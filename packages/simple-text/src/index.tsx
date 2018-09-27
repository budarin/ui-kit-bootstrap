import * as React from 'react';

interface ISimpleTextProps {
    children?: any;
}

const SimpleText: React.SFC<ISimpleTextProps> = props => {
    const { children } = props;
    const styles = { fontStyle: 'italic' };

    return <span style={styles}>{children}</span>;
};

export default SimpleText;
