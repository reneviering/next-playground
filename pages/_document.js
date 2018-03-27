import Document, { Head, Main, NextScript } from 'next/document'
import Link from 'next/link';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
					<link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body className="custom_class">

					<nav>
						<ul>
							<li><Link href="/" prefetch>Home</Link></li>
							<li><Link href="/about" prefetch>About</Link></li>
						</ul>
					</nav>

          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
