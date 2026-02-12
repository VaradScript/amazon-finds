import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Amazon Finds India - Viral Products',
    description: 'Honest reviews of viral Amazon products. Watch the tests and see for yourself.',
    openGraph: {
        title: 'Amazon Finds India - Viral Products',
        description: 'Viral Amazon products tested',
        images: ['/og-home.png']
    }
}

export default function Home() {
    return (
        <main>
            <div className="container">
                <h1>Amazon Finds India</h1>
                <p>
                    Viral products tested. Here are the links.
                </p>

                <div className="disclosure">
                    <strong>Note:</strong> I earn a small commission if you buy through my links.
                    <Link href="/disclosure"> Read full disclosure</Link>
                </div>

                <div className="product-grid">
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

                    <div className="product-card">

                        <h3>Nano Magic Eraser (Pack of 10)</h3>
                        <p className="product-price">Under ₹200 (₹199)</p>

                        <p><strong>The problem:</strong> Scuffs on walls and white shoes that don't come off with soap.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Cleans with just water - no chemicals</li>
                            <li>Removes tough stains from any surface</li>
                            <li>Great for shoes, walls, and kitchens</li>
                            <li>Cuts through grease and grime instantly</li>
                        </ul>

                        <p><strong>Best for:</strong> White sneakers, wall scuffs, oily stovetops</p>

                        <div style={{ marginTop: '16px' }}>
                            <a
                                href="https://youtube.com/shorts/HqT5pi_B-eo"
                                target="_blank"
                                rel="noopener"
                                className="youtube-btn"
                            >
                                ▶ WATCH VIDEO & GET LINKS
                            </a>
                        </div>
                    </div>

                    <div className="product-card">

                        <h3>Microwave Maggi Bowl with Lid</h3>
                        <p className="product-price">Under ₹300 (₹299)</p>

                        <p><strong>The problem:</strong> Cooking Maggi on a stove takes time and creates extra pans to wash.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Cooks perfect Maggi in just 2 minutes</li>
                            <li>Heat-resistant food grade material</li>
                            <li>Zero mess - cook and eat in the same bowl</li>
                            <li>Great for office, dorms, or quick snacks</li>
                        </ul>

                        <p><strong>Best for:</strong> Students, office lunch, late-night cravings</p>

                        <div style={{ marginTop: '16px' }}>
                            <a
                                href="https://youtube.com/shorts/ZOi0UJpLA0s"
                                target="_blank"
                                rel="noopener"
                                className="youtube-btn"
                            >
                                ▶ WATCH VIDEO & GET LINKS
                            </a>
                        </div>
                    </div>

                    <div className="product-card">

                        <h3>Pocket Refreshing Face Wipes (Pack of 3)</h3>
                        <p className="product-price">Under ₹150 (₹149)</p>

                        <p><strong>The problem:</strong> Feeling oily and dusty while traveling or outdoors.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Removes dirt and oil in seconds</li>
                            <li>Cleans light makeup effortlessly</li>
                            <li>Refreshing scent - feels like a quick wash</li>
                            <li>Small enough to fit in any pocket</li>
                        </ul>

                        <p><strong>Best for:</strong> Commuting, travel, post-gym refreshing</p>

                        <div style={{ marginTop: '16px' }}>
                            <a
                                href="https://youtube.com/shorts/usXeut_x2GE"
                                target="_blank"
                                rel="noopener"
                                className="youtube-btn"
                            >
                                ▶ WATCH VIDEO & GET LINKS
                            </a>
                        </div>
                    </div>

                    <div className="product-card">

                        <h3>Giant Elephant Support Plush Toy</h3>
                        <p className="product-price">Under ₹900 (₹899)</p>

                        <p><strong>The problem:</strong> Standard toys are too small for comfortable baby support.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Ultra-soft, premium cotton filling</li>
                            <li>Provides gentle support for babies</li>
                            <li>Large size – perfect for "hugging" or naps</li>
                            <li>High quality, safe and non-toxic</li>
                        </ul>

                        <p><strong>Best for:</strong> Baby gifts, nursery decor, nap time</p>

                        <div style={{ marginTop: '16px' }}>
                            <a
                                href="https://youtube.com/shorts/6Oh1uKNEFrY"
                                target="_blank"
                                rel="noopener"
                                className="youtube-btn"
                            >
                                ▶ WATCH VIDEO & GET LINKS
                            </a>
                        </div>
                    </div>

                    <div className="product-card">

                        <h3>Soft Mouse Toys for Cats (Pack of 5)</h3>
                        <p className="product-price">Under ₹200 (₹199)</p>

                        <p><strong>The problem:</strong> Indoor pets getting bored and restless.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Soft texture – easy for pets to carry</li>
                            <li>Encourages natural chasing instincts</li>
                            <li>High-quality materials – durable play</li>
                            <li>Keep your pet active and happy</li>
                        </ul>

                        <p><strong>Best for:</strong> Cats, indoor pets, active play</p>

                        <div style={{ marginTop: '16px' }}>
                            <a
                                href="https://youtube.com/shorts/AXCmnMsnzEI"
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
