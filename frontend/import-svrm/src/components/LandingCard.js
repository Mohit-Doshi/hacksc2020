import React, { Component } from 'react';
import style from './LandingCard.css';

export default class LandingCard extends Component {
  render() {
    return (
    //  <div className={style.dddd}>  
    //   <ul className={style.Menu}>
    //     <li><a href="/index.html">Home</a></li>
    //     <li><a href="/uploader.html">Uploader</a></li>
    //     <li><a href="/reviewer.html">Reviewer</a></li>
    //     <li><a href="/transpocredit.html">Transportation Credit</a></li>
    //     <li><a href="/points.html">Points</a></li>
    //   </ul>
    //     <ol className={style.fMenu}>
    //         <li><a href="/index.html">Home</a></li>
    //         <li><a href="/uploader.html">Uploader</a></li>
    //         <li><a href="/reviewer.html">Reviewer</a></li>
    //         <li><a href="/transpocredit.html">Transportation Credit</a></li>
    //         <li><a href="/points.html">Points</a></li>
    //     </ol>
    // </div> 
        <div className={style.sCard}>
            <img src={this.props.imgsrc} alt={this.props.cardName} />
                <div className={style.sContainer}>
                    <p>{this.props.cardName}</p>
                </div>
        </div>
    );
  }
}