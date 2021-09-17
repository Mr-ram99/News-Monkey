import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'


export class News extends Component {

    constructor() {
        super();
        this.state = {
            apikey: "ced035a95bc948339fe954824bfbb443",
            articles: [],
            loading: true,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading :false,
            totalArticles: parsedData.totalResults
        })
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            loading:false,
            articles: parsedData.articles

        })
    }
    handleNextClick = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading:true
            })
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                loading :false,
                articles: parsedData.articles
            })
            
        
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Loading />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url}>
                            <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage? element.urlToImage : "https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg"} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" className="btn btn-info" onClick={this.handlePreviousClick} disabled={this.state.page <= 1}>&larr; Previous</button>
                    <button type="button" className="btn btn-info" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
