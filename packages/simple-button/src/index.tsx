import * as React from 'react';
import SimpleText from 'budarin-simple-text';

// tslint:disable-next-line
let styles = require('../styles.css');
let css: any;

interface IProps {
    text: string;
}

if (process.env.NODE_ENV === 'test') {
    css = {
        ...styles.default,
    };
    styles = {
        ...styles,
        use: () => {},
        unuse: () => {},
        locals: { ...styles.default },
    };
}

if (process.env.NODE_ENV !== 'test') {
    css = process.env.__BROWSER__ ? styles.locals : styles;
}

class SimpleButton extends React.Component<IProps> {
    componentDidMount() {
        styles.use();
    }

    componentWillUnmount() {
        styles.unuse();
    }

    render() {
        const { text = 'Simple button' }: IProps = this.props;

        return (
            <button className={css.btn}>
                <SimpleText>{text}</SimpleText>
            </button>
        );
    }
}

export default SimpleButton;
