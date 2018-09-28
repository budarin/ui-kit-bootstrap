import * as React from 'react';
import SimpleText from 'budarin-simple-text';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
    text?: string;
}

// tslint:disable-next-line
const styles = require('../styles.css');
/* istanbul ignore next */
const css = process.env.__BROWSER__ ? styles.locals : styles;

class SimpleButton extends React.Component<IProps> {
    /* istanbul ignore next */
    componentDidMount() {
        if (process.env.__BROWSER__) {
            styles.use();
        }
    }

    /* istanbul ignore next */
    componentWillUnmount() {
        if (process.env.__BROWSER__) {
            styles.unuse();
        }
    }

    render() {
        const { text = 'Simple button', onClick }: IProps = this.props;

        return (
            <button className={css.btn} onClick={onClick}>
                <SimpleText>{text}</SimpleText>
            </button>
        );
    }
}

export default SimpleButton;
