# @budarin/simple-styles

Simple styles file

Installation:

```bash
npm i --save-dev @budarin/simple-styles
```

Usage: with style-loader

```js
import styles from '@budarin/simple-styles';
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
