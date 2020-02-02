import React from 'react';
import ReactDOM from 'react-dom';
// import Menu from 'components/Menu';
import LandingCard from '../components/LandingCard';
import UploadIcon from '../assets/images/upload-icon.png'
import ReviewIcon from '../assets/images/review-icon.png'
import TransportationIcon from '../assets/images/transportation-icon.png'
import PointsIcon from '../assets/images/points-icon.png'

ReactDOM.render(
    <div style={{ display: "inline-block" }}>
        <div style={{ float: "left", padding: "0 20px 0 0" }}><a style={{textDecoration: "none", color: "black"}} href="/uploader.html"><LandingCard cardName="Upload Video" imgsrc={UploadIcon}/></a></div>
        <div style={{ float: "left", padding: "0 20px 0 0" }}><a style={{textDecoration: "none", color: "black"}} href="/reviewer.html"><LandingCard cardName="Review Videos" imgsrc={ReviewIcon}/></a></div>
        <div style={{ float: "left", padding: "0 20px 0 0" }}><a style={{textDecoration: "none", color: "black"}} href="/transpocredit.html"><LandingCard cardName="Upload Maps Data" imgsrc={TransportationIcon}/></a></div>
    </div>, document.getElementById('menu'));

ReactDOM.render(<a style={{textDecoration: "none", color: "black"}} href="/points.html"><LandingCard cardName="View Points" imgsrc={PointsIcon}/></a>, document.getElementById('points'));
