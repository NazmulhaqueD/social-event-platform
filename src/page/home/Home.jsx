import React from 'react';
import Banner from '../../components/homeComponent/Banner';
import Feature from '../../components/homeComponent/Feature';
import Gallery from '../../components/homeComponent/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;