import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    metadataBase: new URL('https://amazon-finds-india.vercel.app'),
    title: 'Amazon Finds India - Smart Daily Products Under ₹999',
    description: 'Honest reviews of practical Amazon products for Indian homes. Cleaning tools, kitchen helpers, and daily essentials that actually work.',
    openGraph: {
        title: 'Amazon Finds India - Smart Daily Products',
        description: 'Practical Amazon products for Indian homes under ₹999',
        type: 'website',
        images: ['/og-image.png']
    },
    other: {
        "p:domain_verify": "21a57ba385ce4c75f409f12ab25becdc"
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <div className="container">
                        <nav>
                            <Link href="/" className="logo">Amazon Finds India</Link>
                            <div className="nav-links">
                                <Link href="/disclosure">Disclosure</Link>
                            </div>
                        </nav>
                    </div>
                </header>

                {children}

                <footer>
                    <div className="container">
                        <p>
                            <Link href="/disclosure">Affiliate Disclosure</Link> •
                            Amazon Finds India © 2026
                        </p>
                        <p style={{ marginTop: '8px', fontSize: '12px' }}>
                            As an Amazon Associate, I earn from qualifying purchases.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    )
}
