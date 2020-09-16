import React from 'react';
import Title from './Title';

const App = () => (
    <>
        <Title />
        <div>Hello from React!</div>
    </>
);

export default __DEV__ ? require('react-hot-loader/root').hot(App) : App;

if (__DEV__ && module.hot) {
    module.hot.accept('./Title');
}
