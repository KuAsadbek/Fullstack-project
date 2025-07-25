import '../styles/components-css/product_card.css'

const ProductCard = () => {
    return ( 
            <div className="product_card">
                <div className='product_block'>
                    <img className='product_img' src="../../public/images/home/pr1.png" alt="" />
                    
                    <div className='product_ts'>
                        <h1>Syltherine</h1>
                        <h3>Stylish cafe chair</h3>
                        <div className="product-text">
                            <h2>Rp 2.500.000</h2> <span>Rp 3.500.000</span>
                        </div>
                    </div>

                    {/* Overlay appears on hover */}
                    <div className="product_overlay">
                        <button className='pr_btn'>Add to Cart</button>
                        <div className="link-d">
                            <span>Share</span>
                            <span>Compare</span>
                            <span>Like</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ProductCard;
