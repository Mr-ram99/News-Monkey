import React, {useState,useEffect} from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalArticles, setTotalArticles] = useState(0);

    const updateNews= async() => {
        document.title = `News Monkey | ${props.category[0].toUpperCase()+props.category.slice(1)}`;
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(20);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalArticles(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    }, []);
    
    const fetchMoreData = async () =>{
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalArticles(parsedData.totalResults);
    }

        return (
            <div className="container my-3">
                <h2> {props.category[0].toUpperCase() + props.category.slice(1)} - Top Headlines</h2>
                {loading && <Loading />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalArticles}
                    loader={<Loading />}
                >
                    <div className="row container">
                        {
                        articles.map((element) => {
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

News.defaultProps = {
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
