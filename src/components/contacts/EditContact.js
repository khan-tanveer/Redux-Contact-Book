/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactAction';
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';
import { useParams } from 'react-router-dom';

const EditContact = () => {
	let { id } = useParams();
	let history = useHistory();
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const createContact = (e) => {
		e.preventDefault();
		console.log(name, phone, email);
		const new_contact = {
			id: shortid.generate(),
			name: name,
			phone: phone,
			email: email,
		};
		dispatch(addContact(new_contact));
		history.push('/');
	};

	return (
		<div className='card border-0 shadow'>
			<div className='card-header'>Add a Contact</div>
			<div className='card-border p-4'>
				<form onSubmit={(e) => createContact(e)}>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter Your Name'
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter Your Phone'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter Your Email Address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button className='btn btn-primary' type='submit'>
						Create Contact
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditContact;
