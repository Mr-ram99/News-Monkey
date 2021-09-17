import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        const { title, desc, imageUrl, newsUrl } = this.props;
        return (
            <div className="card mb-3" style={{ maxWidth: "60rem", backgroundColor:"#e8eaff" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imageUrl} className="img-fluid rounded-start" alt="news-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-warning text-light"><strong>Read More &rarr;</strong></a>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default NewsItem
