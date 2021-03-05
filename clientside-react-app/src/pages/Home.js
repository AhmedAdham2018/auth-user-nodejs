import React from 'react';

const Home = ({ name }) => {
    return (<div>
        {name ? 'Welcome ' + name : 'You are not logged in'}
    </div> );
}
 
export default Home;