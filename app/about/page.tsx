import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About - Amazon Finds India',
    description: 'Learn about Amazon Finds India and why I started this site to help people find practical products.',
}

export default function About() {
    return (
        <main>
            <div className="container">
                <h1>About This Site</h1>

                <p>
                    Hi, I'm someone who got tired of buying products that looked great online
                    but turned out to be useless in real life.
                </p>

                <p>
                    This site is my way of sharing products that actually solve everyday problems.
                    No fancy marketing. No fake reviews. Just honest picks.
                </p>

                <h2>What You'll Find Here</h2>
                <ul>
                    <li>Budget-friendly products (mostly under ₹999)</li>
                    <li>Items I've researched thoroughly</li>
                    <li>Honest problem-solution descriptions</li>
                    <li>No aggressive selling or fake urgency</li>
                </ul>

                <h2>Why Amazon Links?</h2>
                <p>
                    I use Amazon affiliate links. When you buy through my links, I earn a small commission
                    at no extra cost to you. This helps me keep the site running.
                </p>

                <p>
                    I only recommend products I genuinely believe are useful. If something is bad,
                    I won't list it just to make money.
                </p>

                <h2>My Goal</h2>
                <p>
                    Simple: Help you find practical products without wasting hours researching.
                    If this site saves you time and money, I've done my job.
                </p>

                <p style={{ marginTop: '32px' }}>
                    <strong>Questions or suggestions?</strong> I'm still building this site.
                    If you have feedback, I'd love to hear it.
                </p>

                <div className="disclosure" style={{ marginTop: '32px' }}>
                    <strong>Full transparency:</strong> This is a side project to earn some income
                    while helping people find good products. <a href="/disclosure">Read my full disclosure</a>
                </div>
            </div>
        </main>
    )
}
