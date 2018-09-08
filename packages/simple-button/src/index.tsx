import * as React from 'react';
import SimpleText from '@budarin/simple-text';

// @ts-ignore
import styles from '../styles.css';

interface IProps {
    text: string;
}

const css = process.env.__BROWSER__ ? styles.locals : styles;

class SimpleButton extends React.Component<IProps> {
    componentDidMount() {
        if (process.env.NODE_ENV !== 'test') {
            styles.use();
        }
    }

    componentWillUnmount() {
        if (process.env.NODE_ENV !== 'test') {
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
