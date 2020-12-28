import Head from 'next/head';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './layout.module.css';

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
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
			<header className={styles.header}>
				<Link href="/">
					<a>
						<img
							src="/bhash-logo.svg"
							className={styles.headerImage}
							alt="B-Hash Logo"
						/>
					</a>
				</Link>
			</header>
			<main>{children}</main>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};
