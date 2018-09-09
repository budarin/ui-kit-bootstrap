import * as React from 'react';
import SimpleText from '@budarin/simple-text';

// @ts-ignore
import styles from '../styles.css';

interface IProps {
    text?: string;
}

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
        const { text = 'Simple button' }: IProps = this.props;

        return (
            <button className={css.btn}>
                <SimpleText>{text}</SimpleText>
            </button>
        );
    }
}

export default SimpleButton;
