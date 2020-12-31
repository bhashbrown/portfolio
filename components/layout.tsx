import Head from 'next/head';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './layout.module.scss';
import NavBtn from './NavBtn';

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/bhash_logo_outline.ico" />
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
						src="/bhash-logo-outline.svg"
						className={styles.headerImage}
						alt="B-Hash Logo"
					/>
				</a>
			</Link>
			<nav className={styles.horizontalList}>
				<NavBtn inputText="BHash" uri="/house" />
				<NavBtn inputText="Home" uri="/" />
				<NavBtn inputText="About" uri="/" />
				<NavBtn inputText="Open Source Projects" uri="/" />
				<NavBtn inputText="GitHub" uri="https://github.com/bhayashi" />
			</nav>
			{/* </header> */}
			<main className={styles.container}>{children}</main>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};
