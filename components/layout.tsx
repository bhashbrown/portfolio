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
			</Head>
			<main>{children}</main>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};
