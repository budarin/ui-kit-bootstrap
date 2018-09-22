# simple-styles

Simple styles file

Installation:

```bash
npm i --save-dev simple-styles
```

Usage: with style-loader

```js
import styles from 'simple-styles';
...
const css = __BROWSER__ ? styles.locals : styles;

...
// componentDidMount
styles.use();
...
// componentWillUnmount
styles.unuse();
...
<div className={css.divName}>
```
