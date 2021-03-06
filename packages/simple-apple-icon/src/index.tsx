import * as React from 'react';

const emptyString = '';
const emptyObject = {};
const styles = { fillRule: 'evenodd', fill: '#74a4c7' };

interface IconProps {
    className?: string;
    style?: CSSStyleDeclaration;
}

const SimpleAppleIcon: React.SFC<IconProps> = props => {
    const { className = emptyString, style = emptyObject } = props;

    return (
        <svg
            // @ts-ignore
            style={style}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 100 100"
            aria-labelledby="title"
        >
            <title id="title">Apple Icon</title>
            <g transform="translate(0,-952.36218)">
                <path
                    // @ts-ignore
                    style={styles}
                    d="M59.188,21.5c-2.614,0.18-5.654,1.864-7.438,4.031-1.62,1.965-2.958,4.852-2.438,7.688,2.852,0.087,5.789-1.615,7.5-3.813,1.598-2.051,2.816-4.944,2.376-7.906zm-17.688,11.406c-3.738,0-7.73,2.276-10.25,6.156-3.547,5.461-2.939,15.749,2.812,24.5,2.056,3.129,4.816,6.623,8.407,6.657,3.193,0.029,4.075-2.009,8.406-2.031,4.331-0.026,5.153,2.062,8.344,2.031,3.591-0.034,6.507-3.932,8.562-7.063,1.474-2.24,2.012-3.37,3.157-5.906-8.314-3.14-9.636-14.897-1.407-19.406-2.511-3.131-6.048-4.938-9.375-4.938-4.4,0-6.259,2.094-9.312,2.094-3.147,0-5.537-2.094-9.344-2.094z"
                    transform="translate(0,952.36218)"
                />
            </g>
        </svg>
    );
};

SimpleAppleIcon.displayName = 'AppleIcon';

export default SimpleAppleIcon;
