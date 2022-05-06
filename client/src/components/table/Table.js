import React, { useEffect, useState } from 'react';
import './table.scss';
import axios from '../../axios/api';

const Table = ({ persons, setPersons, open, setOpen, data, setData }) => {
	const deletePerson = async (user) => {
		try {
			const response = await axios.delete(`/user/${user.id}`);
			setPersons(persons.filter(pers => pers.id !== user.id));
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const editPerson = async (user) => {
		setData({
			...data,
			name: user.name,
			email: user.email,
			phone: user.phone,
			id: user.id
		});
		setOpen(true);
	};

	// const editPerson = async (user) => {
	// 	try {
	// 		const response = await axios.put(`/user/${user.id}`);
	// 		setData({
	// 			...data,
	// 			name: user.name,
	// 			email: user.email,
	// 			phone: user.phone
	// 		});
	// 		setPersons(persons.filter(pers => pers.id !== user.id));
	// 		setOpen(true);
	// 		console.log(response);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const handleOpen = () => {
		setOpen(true);
	}

	return (
		<div>
			<div>{
				persons.length > 0 ? <table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{persons.map(item => (
							<tr key={item.id}>
								<td> {item.name} </td>
								<td> {item.email} </td>
								<td> {item.phone} </td>
								<td> <button onClick={() => editPerson(item)}>Edit</button> <button onClick={() => deletePerson(item)}>Del</button> </td>
							</tr>
						))}
					</tbody>
				</table> : <table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>...</td>
							<td>...</td>
							<td>...</td>
							<td>...</td>
						</tr>
					</tbody>
				</table>
			}</div>

			<div>
				<button onClick={() => handleOpen()}>Add record</button>
			</div>

		</div>
	)
}

export default Table;
