import React from 'react';

class SimpleText extends React.Component {
    render(props) {
        const { children } = props;

        return <span>{children}</span>;
    }
}

export default SimpleText;
