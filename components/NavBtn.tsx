import Link from 'next/link';
// import styles from './layout.module.scss';

export default function NavBtn() {
	return (
		<>
			<style jsx>{`
				button:hover {
					background-color: $highlighted-text;
					transition: 0.2s;
				}
			`}</style>
			<Link href="/">
				<button type="button">
					<a>Home</a>
				</button>
			</Link>
		</>
	);
}
