import Link from 'next/link';
import PropTypes from 'prop-types';
import { mainText, highlightedBtn } from '../styles/colors';
// import styles from './layout.module.scss';

export default function NavBtn({ inputText, uri }) {
	return (
		<>
			<style jsx>{`
				button {
					color: ${mainText};
					border: none;
					background: none;
					text-decoration: none;
					display: inline;
					margin: 0.5rem;
					padding: 0.5rem;
					border-radius: 3px;
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
						Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
					line-height: 1.6;
					font-size: 18px;
					outline: none;
				}

				button:hover {
					background-color: ${highlightedBtn};
					transition: 0.2s;
				}
			`}</style>
			<Link href={uri} passHref>
				<a>
					<button className="btn" type="button">
						{inputText}
					</button>
				</a>
			</Link>
		</>
	);
}

NavBtn.propTypes = {
	inputText: PropTypes.string.isRequired,
	uri: PropTypes.string.isRequired,
};
