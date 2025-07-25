import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../styles/pages-css/home.css'

const Home = () => {
    return (
        <div className='home'>
            <Header />
                <div className="home-main">
                    <div className="home-block">
                        <h3>New Arrival</h3>
                        <h1>Discover Our New Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <button className='home-btn'>BUY NOW</button>
                    </div>
                </div>
                <div className="home-images">
                    <div className="home-text">
                        <h1>Browse The Range</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="home-img">
                        <div className="image">
                            <img src="../../public/images/home/dining.png" alt="" />
                            <h3>Dining</h3>
                        </div>
                        <div className="image">
                            <img src="../../public/images/home/living.png" alt="" />
                            <h3>Living</h3>
                        </div>
                        <div className="image">
                            <img src="../../public/images/home/badroom.png" alt="" />
                            <h3>Bedroom</h3>
                        </div>
                    </div>
                </div>
                <div className='products'>
                    <h1>Our Products</h1>
                    <div className="products_cards">
                        <ProductCard />
                    </div>
                    <a href="" className='show_btn'>Show More</a>
                </div>
                <div className="scroll_page">
                    <div className="scrolls">
                        <div className="scroll_info">
                            <h1>50+ Beautiful rooms inspiration</h1>
                            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                            <a href="" className='scroll-btn'>Explore More</a>
                        </div>
                        <div className="scroll_img">
                            <img src="../../public/images/home/pictor1.png" alt="" />
                            <img src="../../public/images/home/pictor2.png" alt="" />
                            <img src="../../public/images/home/pictor3.png" alt="" />
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Home;