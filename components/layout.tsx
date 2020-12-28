import Head from 'next/head';
import PropTypes from 'prop-types';
import styles from './layout.module.css';
// import Link from 'next/link';

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/bhash_logo.ico" />
				<meta
					name="description"
					content="B-Hash's software engineering portfolio"
				/>
				<meta name="og:image" content="/bhash-logo.png" />
				<meta name="og:title" content="B-Hash's Portfolio" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<main>{children}</main>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};
