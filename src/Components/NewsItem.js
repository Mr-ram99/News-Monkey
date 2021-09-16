import React, { Component } from 'react'

export class NewsItem extends Component {
 
    render() {
        const {title, desc, imageUrl, newsUrl} = this.props;
        return (
            <div className="card" style={{width: "20rem"}}>
                <img src={imageUrl} className="card-img-top" alt="news-img" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More &rarr;</a>
                </div>
            </div>

        )
    }
}

export default NewsItem
