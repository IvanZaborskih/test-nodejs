import React, { useEffect, useState } from 'react';
import './table.scss';
import axios from '../../axios/api';

const Table = () => {
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		const getPersons = async () => {
			try {
				const response = await axios.get('/user');
				setPersons(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		getPersons();
	}, []);

	return (
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
							<td> <a>E</a> <a>D</a> </td>
						</tr>
					))}
				</tbody>

			</table> : <div>Loading...</div>
		}</div>
	)
}

export default Table;
