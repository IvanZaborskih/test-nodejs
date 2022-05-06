import axios from '../../axios/api';
import React, { useState } from 'react';
import './modal.scss';

function Modal({ open, setOpen, persons, setPersons, data, setData }) {

	const addUser = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post('/user', {
				name: data.name,
				email: data.email,
				phone: data.phone
			});
			setPersons([...persons, response.data]);

			console.log(data.id);
			console.log(response.data.id);
			if (response.data.id !== data.id) {
				setPersons(persons.filter(pers => pers.id !== user.id));
			}

		} catch (error) {
			console.log(error);
		}

		setData({});
		setOpen(!open);
	}

	const handleClose = (e) => {
		e.preventDefault();
		setData({});
		setOpen(false);
	}

	return (
		<div>{
			open ? <form className='modal'>
				<p>Name</p>
				<input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}></input>
				<p>Email</p>
				<input type="text" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}></input>
				<p>Phone</p>
				<input type="text" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })}></input>

				<button onClick={(e) => addUser(e)}>Add/Save</button>
				<button onClick={(e) => handleClose(e)}>Close</button>
			</form> : <></>
		}</div>
	)
}


export default Modal;
