import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

    constructor() {
        super();
        this.state = {
            // apikey : "ced035a95bc948339fe954824bfbb443",
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ced035a95bc948339fe954824bfbb443";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles
        })
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-2 " key={element.url}>
                                    <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg"} newsUrl={element.url}/>
                                </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
