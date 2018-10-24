import React from 'react';
import Navigation from './Navigation';
import SkipLink from './SkipLink';
function Banner(){
    return (
        <div className="BannerWrapper">
            <h1 tabIndex="0">UGLY STORE </h1>
            <SkipLink />
            <Navigation />
        </div>
    );

    
}

export default Banner;