import React from 'react';
import './App.css'; // Make sure to adjust the path if needed

function Home() {
    return (
        <div className="home-container">
            <h1 className="header-title">Losturistas</h1>
            <div className="home-content">
                {/* How to section */}
                <div className="how-to center">
                    <h2>How to Use Losturistas</h2>
                    <p>Welcome to Losturistas! Follow these steps to get started:</p>
                    <ol className='center-list'>
                        <li>Explore the search bar to find tourist attractions.</li>
                        <li>Click on an attraction to view its details.</li>
                        <li>Get directions to your desired destination.</li>
                    </ol>
                </div>

                {/* Image section */}
                <div className="image-container">
                    <img src="https://www.usnews.com/object/image/00000169-5e07-df95-a57d-7ec72d990000/3-sydney-opera-house-submitted-masaru-kitano-snak-productions-tourism-australia-4.jpg?update-time=1706734219374&size=responsive970" alt="" />
                    <img src="https://www.usnews.com/object/image/00000169-5e06-df95-a57d-7ec6a6c10000/4-eiffel-tower-getty.jpg?update-time=1706734251733&size=responsive970" alt="" />
                    <img src="https://www.usnews.com/object/image/00000169-5e06-df95-a57d-7ec6d6990000/14-san-francisco-getty.jpg?update-time=1706734804617&size=responsive970" alt="" />
                    <img src="https://www.usnews.com/object/image/00000169-5e06-df95-a57d-7ec6b8380000/machu-picchu-stock.jpg?update-time=1706802704566&size=responsive970" alt=""/>
                    <img src="https://www.usnews.com/object/image/00000169-5e06-df95-a57d-7ec6beae0000/8-great-wall-getty.jpg?update-time=1706734540301&size=responsive970" alt=""/>
                    <img src="https://www.usnews.com/object/image/00000169-5e06-df95-a57d-7ec6e6300000/17-pyramids-getty.jpg?update-time=1706735383628&size=responsive970" alt=""/>
                    <img src="https://www.usnews.com/object/image/00000169-5e07-df95-a57d-7ec71bab0000/29-ha-long-bay-getty.jpg?update-time=1706801999293&size=responsive970" alt="" />
                    <img src="https://www.usnews.com/object/image/00000185-cfcb-deea-a3a5-efdf6a970000/mount-fuji-stock.jpg?update-time=1706802285866&size=responsive970" alt="" />
                    <img src="https://www.usnews.com/object/image/00000169-5e07-df95-a57d-7ec715370000/27-statue-of-liberty-getty.jpg?update-time=1706801927274&size=responsive970" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Home;
