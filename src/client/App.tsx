import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Modal from './components/Modal';

/* Hook React Variation */
/*const App = (props: AppProps) => {
	const [greeting, setGreeting] = useState<string>('');

	useEffect(() => {
		async function getGreeting() {
			try {
				const res = await fetch('/api/hello');
				const greeting = await res.json();
				setGreeting(greeting);
			} catch (error) {
				console.log(error);
			}
		}
		getGreeting();
	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-center text-primary">Variantyx {greeting}!</h1>
		</main>
	);
};

interface AppProps {}
*/

/* Class React Variation */
class App extends React.Component<IAppProps, IAppState> {
	openModal: (event: React.MouseEvent<HTMLInputElement>) => void;
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			articles: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/articles');
			let articles = await r.json();
			this.setState({ articles });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-center text-primary">Variantyx Project</h1>
				<ul className="list-group">
					{this.state.articles.map(article => {
						return <li className="list-group-item">{article.type} <Button variant="primary" onClick={this.openModal}>
							{article.id}
						</Button></li>
					})}
				</ul>
				<div>
					<Modal />
				</div>
			</main>
		);
	}
}

export interface IAppProps { }

export interface IAppState {
	articles: Array<{ type: string, id: string }>;
}

export default App;
