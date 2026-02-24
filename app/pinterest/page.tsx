
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pinterest Favorites - Daily Updates',
    description: 'Daily updated Amazon finds seen on Pinterest. Subscribe for more!',
}

export default function PinterestSection() {
    return (
        <main>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1>Pinterest Top Picks</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>
                        Daily updates on the viral gadgets you love.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <a
                            href="https://www.youtube.com/channel/UCx4sqx3ZARYpLDBjr4G5dhw"
                            target="_blank"
                            rel="noopener"
                            className="youtube-btn"
                            style={{ backgroundColor: '#cc0000', display: 'inline-block' }}
                        >
                            Subscribe on YouTube
                        </a>
                        <a
                            href="https://in.pinterest.com/thetechnodesiin/"
                            target="_blank"
                            rel="noopener"
                            className="youtube-btn"
                            style={{ backgroundColor: '#E60023', display: 'inline-block' }}
                        >
                            Follow on Pinterest
                        </a>
                    </div>
                </div>

                <div className="product-grid">
                    {/* Pin 1: Lint Remover */}
                    <div className="product-card">
                        <h3>Electric Lint Remover for Clothes</h3>
                        <p className="product-price">Under ₹500 (₹499)</p>

                        <p><strong>The problem:</strong> Sweaters and blankets look old and "fuzz-covered" after few washes.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Safely shaves off lint and bubbles</li>
                            <li>Powerful motor for fast results</li>
                            <li>Works on wool, cotton, and upholstery</li>
                            <li>Makes old clothes look brand new</li>
                        </ul>

                        <p><strong>Best for:</strong> Winter wear, blankets, cotton t-shirts</p>

                        <div style={{ marginTop: '16px' }}>
                            <a
                                href="https://youtube.com/shorts/pAUfKtopKPU"
                                target="_blank"
                                rel="noopener"
                                className="youtube-btn"
                            >
                                ▶ WATCH VIDEO & GET LINKS
                            </a>
                        </div>
                    </div>

                    {/* Pin 2: Wipro Smart Plug */}
                    <div className="product-card">
                        <h3>Wipro 16A Wi-Fi Smart Plug</h3>
                        <p className="product-price">Under ₹1000</p>

                        <p><strong>The problem:</strong> Walking to switch off the geyser or AC, or worrying if you left them on.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Control from anywhere via Phone</li>
                            <li>Works with Alexa & Google Assistant</li>
                            <li>Energy monitoring to save bills</li>
                            <li>Suitable for Heavy Appliances (16A)</li>
                        </ul>

                        <p><strong>Best for:</strong> Geysers, Microwave Ovens, Air Conditioners</p>

                        <div style={{ marginTop: '16px' }}>
                            <a
                                href="https://youtube.com/shorts/f2ZrQjq9e8U?feature=share"
                                target="_blank"
                                rel="noopener"
                                className="youtube-btn"
                            >
                                ▶ WATCH VIDEO & GET LINKS
                            </a>
                        </div>
                    </div>

                    {/* Pin 3: SKYCELL Lazy Neck Phone Holder */}
                    <div className="product-card">
                        <h3>SKYCELL Lazy Neck Phone Holder</h3>
                        <p className="product-price">Under ₹500</p>

                        <p><strong>The problem:</strong> Holding your phone for long movies or video calls is tiring and causes neck pain.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Hands-free use - hangs comfortably around your neck</li>
                            <li>Flexible and 360° rotating - get the perfect angle</li>
                            <li>Multi-purpose - works as a neck stand or a tabletop holder</li>
                            <li>Universal fit - works with almost all smartphones</li>
                        </ul>

                        <p><strong>Best for:</strong> Watching movies in bed, long video calls, and reading recipes</p>

                        <div style={{ marginTop: '16px' }}>
                            <a
                                href="https://youtube.com/shorts/t51kCoaWfAo?feature=share"
                                target="_blank"
                                rel="noopener"
                                className="youtube-btn"
                            >
                                ▶ WATCH VIDEO & GET LINKS
                            </a>
                        </div>
                    </div>

                    {/* Pin 4: Shoe Washing Machine Bag */}
                    <div className="product-card">
                        <h3>Shoe Washing Machine Bag</h3>
                        <p className="product-price">Under ₹500 (₹360)</p>

                        <p><strong>The problem:</strong> Shoes banging loudly in the washing machine, getting damaged, or losing their shape.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Protects shoes from wear, tear, and scratches</li>
                            <li>Durable plush material with a secure zipper</li>
                            <li>Prevents loud noise during wash and dry cycles</li>
                            <li>Multi-purpose - great for sneakers, delicates & toys</li>
                        </ul>

                        <p><strong>Best for:</strong> Cleaning sneakers and sports shoes safely at home</p>

                        <div style={{ marginTop: '16px' }}>
                            <a
                                href="https://youtube.com/shorts/Tm73jrUU8TE?feature=share"
                                target="_blank"
                                rel="noopener"
                                className="youtube-btn"
                            >
                                ▶ WATCH VIDEO & GET LINKS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
