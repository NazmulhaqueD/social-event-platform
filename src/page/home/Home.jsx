import React from 'react';
import Banner from '../../components/homeComponent/Banner';
import Feature from '../../components/homeComponent/Feature';
import Gallery from '../../components/homeComponent/Gallery';
import Subscribe from '../../components/homeComponent/Subscribe';
import FAQ from '../../components/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Gallery></Gallery>
            <FAQ></FAQ>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;