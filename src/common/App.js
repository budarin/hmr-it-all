import React from 'react';
import Title from './Title';

if (__DEV__ && module.hot) {
    module.hot.accept('./Title');
}

const App = () => (
    <>
        <Title />
        <div>Hello from React!</div>
    </>
);

export default __DEV__ ? require('react-hot-loader/root').hot(App) : App;
