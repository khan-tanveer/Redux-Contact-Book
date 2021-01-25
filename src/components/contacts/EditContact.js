/** @format */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactAction';
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';
import { useParams } from 'react-router-dom';

const EditContact = () => {
	let { id } = useParams();
	let history = useHistory();
	const dispatch = useDispatch();
	const contact = useSelector((state) => state.contact.contact);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		if (contact !== null) {
			setName(contact.name);
			setPhone(contact.phone);
			setEmail(contact.email);
		}
		dispatch(getContact(id));
	}, [contact]);

	const onUpdateContact = (e) => {
		e.preventDefault();

		const Update_contact = Object.assign(contact, {
			name: name,
			phone: phone,
			email: email,
		});

		dispatch(updateContact(Update_contact));
		history.push('/');

		console.log(Update_contact);
	};

	return (
		<div className='card border-0 shadow'>
			<div className='card-header'>Edit a Contact</div>
			<div className='card-border p-4'>
				<form onSubmit={(e) => onUpdateContact(e)}>
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
					<button className='btn btn-warning' type='submit'>
						Update Contact
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditContact;
