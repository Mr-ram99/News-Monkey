import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
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
            page: 1,
            totalArticles: 0
        }

    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading:false
        })
    }
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () =>{
           this.setState({
               page : this.state.page + 1 
           }) 
           const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalArticles: parsedData.totalResults
        })

    }

    render() {
        return (
            <div className="container my-3">
                <h2> {this.props.category[0].toUpperCase() + this.props.category.slice(1)} - Top Headlines</h2>
                {this.state.loading && <Loading />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={<Loading />}
                >
                    <div className="row container">
                        {
                        this.state.articles.map((element) => {
                                return <div key={element.url}>
                                    <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })
                        }
                    </div>
                </InfiniteScroll >
            </div>
        )
    }
}

export default News
