import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<>
				<style jsx>{`
					.main-title {
						text-align: center;
						// border: solid 2px red;
						margin: 0;
						padding: 0;
						font-size: 4rem;
					}

					#name-title {
						margin-top: 5rem;
					}

					#secondary-title {
						text-align: center;
						margin: 0;
						padding: 0;
						// border: solid 2px green;
					}
				`}</style>
				<Head>
					<title>B-Hash&apos;s Portfolio</title>
				</Head>
				<h1 id="name-title" className="main-title">
					B-Hash
				</h1>
				<p id="secondary-title">aka Brian Makio Hayashi</p>
				<h2 id="se-title" className="main-title">
					Software Engineer
				</h2>
			</>
		</Layout>
	);
}
