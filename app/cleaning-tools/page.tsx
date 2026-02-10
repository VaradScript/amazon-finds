import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cleaning & Home Tools - Amazon Finds India',
    description: 'Practical cleaning tools and home helpers from Amazon. Make cleaning faster and easier with these budget-friendly products.',
    openGraph: {
        title: 'Cleaning & Home Tools - Amazon Finds',
        description: 'Make cleaning easier with these practical tools',
        images: ['/og-cleaning.png']
    }
}

export default function CleaningTools() {
    return (
        <main>
            <div className="container">
                <h1>Cleaning & Home Tools</h1>
                <p>
                    Tools that make cleaning less of a chore. These aren't fancy gadgets -
                    they're practical helpers that actually save time and effort.
                </p>

                <div className="product-grid">
                    <div className="product-card">
                        <h3>Microfiber Mop with Reusable Pads (2 Pads)</h3>
                        <p className="product-price">₹699</p>

                        <p><strong>The problem:</strong> Traditional mops are heavy, smell bad, and don't dry floors well.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Microfiber pads clean better than cotton</li>
                            <li>Lightweight - easy to use daily</li>
                            <li>Pads are washable and reusable</li>
                            <li>Dries floors faster - no wet footprints</li>
                        </ul>

                        <p><strong>Best for:</strong> Daily floor cleaning, tile and marble floors</p>

                        <a
                            href="https://amzn.to/YOUR-AFFILIATE-LINK"
                            className="amazon-btn"
                            target="_blank"
                            rel="nofollow sponsored noopener"
                        >
                            Check price on Amazon
                        </a>
                    </div>

                    <div className="product-card">
                        <h3>Window Squeegee with Spray Bottle</h3>
                        <p className="product-price">₹499</p>

                        <p><strong>The problem:</strong> Cleaning windows leaves streaks and takes forever.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Spray and squeegee in one tool</li>
                            <li>No streaks - professional finish</li>
                            <li>Works on mirrors, glass doors, shower screens</li>
                            <li>Saves time compared to cloth wiping</li>
                        </ul>

                        <p><strong>Best for:</strong> Windows, bathroom mirrors, glass surfaces</p>

                        <a
                            href="https://amzn.to/YOUR-AFFILIATE-LINK"
                            className="amazon-btn"
                            target="_blank"
                            rel="nofollow sponsored noopener"
                        >
                            Check price on Amazon
                        </a>
                    </div>

                    <div className="product-card">
                        <h3>Grout Cleaning Brush (3-Piece Set)</h3>
                        <p className="product-price">₹299</p>

                        <p><strong>The problem:</strong> Bathroom grout turns black and regular brushes can't reach it.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Narrow brush reaches between tiles</li>
                            <li>Stiff bristles remove stubborn grime</li>
                            <li>3 sizes for different areas</li>
                            <li>Makes grout look new again</li>
                        </ul>

                        <p><strong>Best for:</strong> Bathroom tiles, kitchen backsplash, floor grout</p>

                        <a
                            href="https://amzn.to/YOUR-AFFILIATE-LINK"
                            className="amazon-btn"
                            target="_blank"
                            rel="nofollow sponsored noopener"
                        >
                            Check price on Amazon
                        </a>
                    </div>

                    <div className="product-card">
                        <h3>Extendable Duster for High Places</h3>
                        <p className="product-price">₹399</p>

                        <p><strong>The problem:</strong> Dust on ceiling fans and high shelves is hard to reach.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Extends up to 6 feet - no ladder needed</li>
                            <li>Bendable head reaches awkward angles</li>
                            <li>Washable microfiber sleeve</li>
                            <li>Lightweight and easy to store</li>
                        </ul>

                        <p><strong>Best for:</strong> Ceiling fans, AC vents, top of cupboards</p>

                        <a
                            href="https://amzn.to/YOUR-AFFILIATE-LINK"
                            className="amazon-btn"
                            target="_blank"
                            rel="nofollow sponsored noopener"
                        >
                            Check price on Amazon
                        </a>
                    </div>

                    <div className="product-card">
                        <h3>Silicone Toilet Brush (Wall-Mounted)</h3>
                        <p className="product-price">₹449</p>

                        <p><strong>The problem:</strong> Regular toilet brushes harbor bacteria and smell bad.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Silicone bristles don't trap dirt</li>
                            <li>Dries quickly - no smell</li>
                            <li>Wall-mounted saves floor space</li>
                            <li>Easy to clean - just rinse</li>
                        </ul>

                        <p><strong>Best for:</strong> Hygienic bathroom cleaning, small bathrooms</p>

                        <a
                            href="https://amzn.to/YOUR-AFFILIATE-LINK"
                            className="amazon-btn"
                            target="_blank"
                            rel="nofollow sponsored noopener"
                        >
                            Check price on Amazon
                        </a>
                    </div>

                    <div className="product-card">
                        <h3>Dustbin with Lid and Pedal (10L)</h3>
                        <p className="product-price">₹599</p>

                        <p><strong>The problem:</strong> Open dustbins smell and attract flies.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Pedal operation - no touching with hands</li>
                            <li>Tight lid keeps smells contained</li>
                            <li>10L size - perfect for bathroom or bedroom</li>
                            <li>Easy to clean plastic body</li>
                        </ul>

                        <p><strong>Best for:</strong> Bathroom, bedroom, small spaces</p>

                        <a
                            href="https://amzn.to/YOUR-AFFILIATE-LINK"
                            className="amazon-btn"
                            target="_blank"
                            rel="nofollow sponsored noopener"
                        >
                            Check price on Amazon
                        </a>
                    </div>
                </div>

                <div className="disclosure" style={{ marginTop: '40px' }}>
                    <strong>Note:</strong> Prices may vary. I earn a small commission when you buy through my links.
                    <a href="/disclosure"> Read full disclosure</a>
                </div>
            </div>
        </main>
    )
}
