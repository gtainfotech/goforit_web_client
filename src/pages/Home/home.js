import React, { Component } from 'react';
import Header from '../Header';

import './home.css';


class HomePage extends Component {
    render() {
        return (

            <div className="homepage">
                <Header />
                <div className="container">
                    <div className='siteSummary'>
                        <p>The new way to monetize any talent or possessions you've got. And to navigate your way through life. Go ad free online;
                            get paid to view ads, or get paid even to advertise depending on how valueable you find your ad to be to the viewer. We
                            also provide mechant accounts with VERY low fee for those who choose not to transfer to another financial instituion.
                    </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default HomePage;