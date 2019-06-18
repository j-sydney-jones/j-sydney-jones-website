import React, { Component } from 'react'
import reviews from '../data/reviews.json';
export default class HomeReviewItem extends Component {
    render() {
        const Data = reviews;
            var index = this.props.index;
        
        return(

                
            <div>
            
                    <div key={Data[index].title + Data[index].attr + Data[index].desc}>
                        <h4>{Data[index].title}</h4>
                        <h6>{Data[index].date}</h6>
                        <p className="attr-sm">{`— `}<a href={Data[index].href} target="_blank" rel="noopener noreferrer">{Data[index].src}</a></p>
                        <p>{`${Data[index].prev}...`}</p>
                        
                        <p className="p-sm" />
                    </div>
                
        </div>
        )
    }
}
