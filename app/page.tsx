import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Amazon Finds India - Smart Daily Products Under ₹999',
    description: 'Honest reviews of practical Amazon products that solve everyday problems. Cleaning tools, kitchen helpers, and home essentials.',
    openGraph: {
        title: 'Amazon Finds India - Smart Daily Products',
        description: 'Practical Amazon products for Indian homes',
        images: ['/og-home.png']
    }
}

export default function Home() {
    return (
        <main>
            <div className="container">
                <h1>Smart Amazon Products That Actually Help</h1>
                <p>
                    No fluff. No hype. Just honest picks of products I've researched for everyday Indian homes.
                    Everything here is under ₹999 and solves a real problem.
                </p>

                <div className="disclosure">
                    <strong>Quick note:</strong> I earn a small commission if you buy through my links.
                    It doesn't cost you extra, and it helps me keep this site running.
                    <Link href="/disclosure"> Read full disclosure</Link>
                </div>

                <h2>Featured Finds</h2>

                <div className="product-grid">
                    <div className="product-card">
                        <h3>Microfiber Cleaning Cloth Set (Pack of 6)</h3>
                        <p className="product-price">₹299</p>

                        <p><strong>The problem:</strong> Regular cloths leave streaks on glass and mirrors.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Lint-free cleaning for windows and screens</li>
                            <li>Reusable - just wash and use again</li>
                            <li>Works without chemicals</li>
                            <li>Lasts 6+ months with regular use</li>
                        </ul>

                        <p><strong>Best for:</strong> Kitchen counters, bathroom mirrors, laptop screens</p>

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
                        <h3>Silicone Dish Drying Mat</h3>
                        <p className="product-price">₹399</p>

                        <p><strong>The problem:</strong> Wet dishes on the counter create mess and water stains.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Raised ridges let water drain properly</li>
                            <li>Easy to clean - just rinse and wipe</li>
                            <li>Doesn't smell like cloth mats</li>
                            <li>Folds flat for storage</li>
                        </ul>

                        <p><strong>Best for:</strong> Small kitchens, rental homes, daily dish drying</p>

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
                        <h3>Drain Hair Catcher (Pack of 3)</h3>
                        <p className="product-price">₹199</p>

                        <p><strong>The problem:</strong> Hair clogs bathroom drains every few weeks.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Catches hair before it goes down the drain</li>
                            <li>Easy to remove and clean</li>
                            <li>Fits most Indian bathroom drains</li>
                            <li>Saves plumber visits</li>
                        </ul>

                        <p><strong>Best for:</strong> Bathrooms with long hair users, preventing clogs</p>

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

                <h2>Browse by Category</h2>
                <div style={{ marginTop: '24px' }}>
                    <p>
                        <Link href="/under-499" style={{ color: '#E88B00', fontWeight: 500 }}>
                            → All Products Under ₹499
                        </Link>
                    </p>
                    <p>
                        <Link href="/cleaning-tools" style={{ color: '#E88B00', fontWeight: 500 }}>
                            → Cleaning & Home Tools
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
