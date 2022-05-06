import React, { useEffect, useState } from "react";
import Table from './table/Table';
import axios from '../axios/api';
import Modal from "./modals/modal";

function App() {
	const [persons, setPersons] = useState([]);
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({});

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
		<div>
			<Table
				persons={persons}
				setPersons={setPersons}
				open={open}
				setOpen={setOpen}
				data={data}
				setData={setData}
			></Table>
			<Modal
				persons={persons}
				setPersons={setPersons}
				open={open}
				setOpen={setOpen}
				data={data}
				setData={setData}
			></Modal>
		</div>
	)
}

export default App;