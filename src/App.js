/** @format */
import React from 'react';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import './styles/App.scss';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Navbar />
				<div className='container'>
					<div className='py-4'>
						<Contacts />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
