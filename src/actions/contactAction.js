/** @format */

import { CREATE_CONTACT, GET_CONTACT } from '../constants/types';

export const addContact = (contact) => {
	return {
		type: CREATE_CONTACT,
		payload: contact,
	};
};

//in edit contact folder on click get an existing data

export const getContact = (id) => {
	return {
		type: GET_CONTACT,
		payload: id,
	};
};
