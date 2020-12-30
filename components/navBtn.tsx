import Link from 'next/link';
import styles from './layout.module.scss';

export default function navBtn() {
	return (
		<Link href="/">
			<a>
				<img
					src="/bhash-logo-outline.svg"
					className={styles.headerImage}
					alt="B-Hash Logo"
				/>
			</a>
		</Link>
	);
}
