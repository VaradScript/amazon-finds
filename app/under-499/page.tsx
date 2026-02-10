import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Amazon Finds Under ₹499 - Budget Home Products India',
    description: 'Practical Amazon products under ₹499 that solve everyday problems. Cleaning tools, kitchen helpers, and home essentials for Indian homes.',
    openGraph: {
        title: 'Amazon Finds Under ₹499',
        description: 'Budget-friendly products that actually work',
        images: ['/og-under-499.png']
    }
}

export default function Under499() {
    return (
        <main>
            <div className="container">
                <h1>Amazon Finds Under ₹499</h1>
                <p>
                    Budget-friendly products that solve real problems. No junk, no gimmicks -
                    just practical items I'd actually recommend to a friend.
                </p>

                <div className="product-grid">
                    <div className="product-card">
                        <h3>Multipurpose Scrub Brush with Handle</h3>
                        <p className="product-price">₹249</p>

                        <p><strong>The problem:</strong> Scrubbing bathroom tiles hurts your hands and back.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Long handle - no bending required</li>
                            <li>Stiff bristles remove soap scum easily</li>
                            <li>Works on tiles, grout, and bathroom floors</li>
                            <li>Saves time compared to hand scrubbing</li>
                        </ul>

                        <p><strong>Best for:</strong> Weekly bathroom cleaning, tile grout, tough stains</p>

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
                        <h3>Stainless Steel Sink Strainer (2 Pack)</h3>
                        <p className="product-price">₹199</p>

                        <p><strong>The problem:</strong> Food bits clog your kitchen sink constantly.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Catches food waste before it clogs pipes</li>
                            <li>Stainless steel - won't rust or smell</li>
                            <li>Easy to empty and rinse</li>
                            <li>Fits standard Indian kitchen sinks</li>
                        </ul>

                        <p><strong>Best for:</strong> Daily cooking, preventing sink clogs, easy cleanup</p>

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
                        <h3>Magnetic Fridge Organizer Hooks (Set of 4)</h3>
                        <p className="product-price">₹299</p>

                        <p><strong>The problem:</strong> Kitchen towels and oven mitts have nowhere to hang.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Sticks to fridge - no drilling needed</li>
                            <li>Holds towels, mitts, small utensils</li>
                            <li>Keeps things within reach while cooking</li>
                            <li>Strong magnets - doesn't fall off</li>
                        </ul>

                        <p><strong>Best for:</strong> Small kitchens, rental homes, organizing towels</p>

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
                        <h3>Toilet Brush with Holder</h3>
                        <p className="product-price">₹349</p>

                        <p><strong>The problem:</strong> Cheap toilet brushes break or smell bad quickly.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Covered holder keeps it hygienic</li>
                            <li>Sturdy bristles clean effectively</li>
                            <li>Doesn't drip water on bathroom floor</li>
                            <li>Looks clean, not cheap</li>
                        </ul>

                        <p><strong>Best for:</strong> Daily bathroom cleaning, guest bathrooms</p>

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
                        <h3>Vegetable Chopper with Container</h3>
                        <p className="product-price">₹399</p>

                        <p><strong>The problem:</strong> Chopping vegetables takes too long every day.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Chops onions, tomatoes in seconds</li>
                            <li>Container catches everything - less mess</li>
                            <li>Sharp blades - works on hard veggies too</li>
                            <li>Easy to clean and store</li>
                        </ul>

                        <p><strong>Best for:</strong> Daily cooking, meal prep, saving time</p>

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
                        <h3>Adhesive Cable Clips (20 Pack)</h3>
                        <p className="product-price">₹149</p>

                        <p><strong>The problem:</strong> Charging cables fall behind desks and beds constantly.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Keeps cables in place on desk or wall</li>
                            <li>Strong adhesive - sticks well</li>
                            <li>Holds phone chargers, USB cables, earphones</li>
                            <li>20 pieces - organize entire room</li>
                        </ul>

                        <p><strong>Best for:</strong> Desk setup, bedside charging, cable management</p>

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
                        <h3>Reusable Silicone Food Storage Bags (3 Pack)</h3>
                        <p className="product-price">₹449</p>

                        <p><strong>The problem:</strong> Plastic bags waste money and harm the environment.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Reusable - wash and use hundreds of times</li>
                            <li>Airtight seal keeps food fresh longer</li>
                            <li>Microwave and freezer safe</li>
                            <li>Saves money on disposable bags</li>
                        </ul>

                        <p><strong>Best for:</strong> Storing leftovers, meal prep, reducing plastic waste</p>

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
                        <h3>Dustpan and Brush Set with Long Handle</h3>
                        <p className="product-price">₹299</p>

                        <p><strong>The problem:</strong> Bending down to sweep hurts your back.</p>

                        <p><strong>Why this works:</strong></p>
                        <ul className="product-features">
                            <li>Long handle - sweep standing upright</li>
                            <li>Clips together for easy storage</li>
                            <li>Rubber edge on dustpan catches everything</li>
                            <li>Works on tiles and marble floors</li>
                        </ul>

                        <p><strong>Best for:</strong> Daily sweeping, kitchen cleanup, elderly users</p>

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
                    <strong>Affiliate Disclosure:</strong> I earn a small commission when you buy through my Amazon links.
                    It doesn't cost you anything extra. <a href="/disclosure">Learn more</a>
                </div>
            </div>
        </main>
    )
}
