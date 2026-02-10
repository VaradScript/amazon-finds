import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Affiliate Disclosure - Amazon Finds India',
    description: 'Full disclosure about how Amazon Finds India earns through affiliate links.',
}

export default function Disclosure() {
    return (
        <main>
            <div className="container">
                <h1>Affiliate Disclosure</h1>

                <p>
                    <strong>Last updated:</strong> February 2026
                </p>

                <h2>How This Site Makes Money</h2>
                <p>
                    Amazon Finds India participates in the Amazon Associates Program.
                    This means when you click on a product link and make a purchase on Amazon,
                    I earn a small commission.
                </p>

                <p>
                    <strong>Important:</strong> This commission does NOT increase your price.
                    You pay the same amount whether you use my link or go directly to Amazon.
                </p>

                <h2>What This Means for You</h2>
                <ul>
                    <li>All product links on this site are Amazon affiliate links</li>
                    <li>I earn a percentage (typically 1-3%) of qualifying purchases</li>
                    <li>Your purchase price remains the same</li>
                    <li>Amazon handles all transactions, shipping, and customer service</li>
                </ul>

                <h2>My Promise to You</h2>
                <p>
                    I only recommend products I genuinely believe are useful and solve real problems.
                    I will never recommend something just because it has a higher commission rate.
                </p>

                <p>
                    If a product is bad or doesn't work as advertised, I won't list it on this site -
                    regardless of potential earnings.
                </p>

                <h2>Product Prices</h2>
                <p>
                    Prices shown on this site are approximate and may change on Amazon.
                    Always check the current price on Amazon before purchasing.
                </p>

                <h2>Product Availability</h2>
                <p>
                    I try to keep product links updated, but items may go out of stock or be discontinued.
                    If a link doesn't work, the product may no longer be available.
                </p>

                <h2>No Guarantees</h2>
                <p>
                    While I research products carefully, I cannot guarantee they will work perfectly for everyone.
                    Product experiences may vary based on individual use and expectations.
                </p>

                <h2>Your Privacy</h2>
                <p>
                    This site does not collect personal information. When you click an affiliate link,
                    Amazon may use cookies to track the referral, but I do not have access to your personal data.
                </p>

                <h2>Questions?</h2>
                <p>
                    If you have questions about this disclosure or how affiliate links work,
                    feel free to reach out.
                </p>

                <div className="disclosure" style={{ marginTop: '40px' }}>
                    <strong>Legal Requirement:</strong> As an Amazon Associate, I am required to disclose
                    that I earn from qualifying purchases. This disclosure fulfills that requirement.
                </div>
            </div>
        </main>
    )
}
