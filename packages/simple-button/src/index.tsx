import * as React from 'react';
import SimpleText from '@budarin/simple-text';

// tslint:disable-next-line
const styles = require('./styles.css');

interface IProps {
    text: string;
}

const css = window ? styles.locals : styles;

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
