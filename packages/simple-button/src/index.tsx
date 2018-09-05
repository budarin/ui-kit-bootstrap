import * as React from 'react';
import SimpleText from '@budarin/simple-text';

interface IProps {
    text: string;
}

class SimpleButton extends React.Component<IProps> {
    render() {
        const { text = 'Simple button' }: IProps = this.props;

        return (
            <button>
                <SimpleText>{text}</SimpleText>
            </button>
        );
    }
}

export default SimpleButton;
