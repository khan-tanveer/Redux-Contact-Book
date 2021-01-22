/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, addcontact } from '../../store';

const AddContact = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const createContact = (e) => {
		e.preventDefault();
		dispatch(addcontact());
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
							value={name}
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

export default AddContact;
