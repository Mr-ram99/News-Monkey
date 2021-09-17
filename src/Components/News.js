import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        pageSize: 8, 
        category: 'general',
      }

      static propTypes = {
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }

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
        this.setState(
            {loading: true}
            );
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading :false
        })
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading:false

        })
    }
    handleNextClick = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading:true
            })
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading :false
            })
            
        
    }
    render() {
        return (
            <div className="container my-3">
                <h2> {this.props.category[0].toUpperCase()+this.props.category.slice(1)} - Top Headlines</h2>
                {this.state.loading && <Loading />}
                <div className="row">
                {
                     !this.state.loading &&  this.state.articles.map((element) => {
                        return <div key={element.url}>
                            <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage? element.urlToImage : "https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
                     })
                    
                }
                
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
