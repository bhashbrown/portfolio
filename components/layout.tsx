import Head from 'next/head';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/bhash_logo.ico" />
				<meta
					name="description"
					content="B-Hash's software engineering portfolio"
				/>
				<meta name="og:image" content="/bhash-logo.svg" />
				<meta name="og:title" content="B-Hash's Portfolio" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			{/* <header className={styles.header}> */}
			<Link href="/">
				<a>
					<img
						src="/bhash-logo.svg"
						className={styles.headerImage}
						alt="B-Hash Logo"
					/>
				</a>
			</Link>
			{/* <nav className={styles.table}> */}
			<ul className={styles.horizontalList}>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Open Source Projects</a>
					</Link>
				</li>
				<li>
					<a href="https://github.com/bhayashi">GitHub</a>
				</li>
			</ul>
			{/* </nav> */}
			{/* </header> */}
			<main className={styles.container}>{children}</main>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};
