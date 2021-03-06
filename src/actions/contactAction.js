/** @format */

import {
	CREATE_CONTACT,
	GET_CONTACT,
	UPDATE_CONTACT,
	DELETE_CONTACT,
	SELECT_CONTACT,
	CLEAR_CONTACT,
	DELETE_SELECTED_CONTACT,
} from '../constants/types';

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

//update a contact
export const updateContact = (contact) => {
	return {
		type: UPDATE_CONTACT,
		payload: contact,
	};
};

//delete a contact
export const deleteContact = (id) => ({
	type: DELETE_CONTACT,
	payload: id,
});

//select all contact
export const selectAllContact = (id) => ({
	type: SELECT_CONTACT,
	payload: id,
});

//clear selected contacts
export const clearAllContact = () => ({
	type: CLEAR_CONTACT,
});

//delete selected contacts
export const deleteAllContact = () => ({
	type: DELETE_SELECTED_CONTACT,
});
