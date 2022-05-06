import axios from "../../axios/api";
import React, { useState } from "react";
import "./modal.scss";

function Modal({
	open,
	setOpen,
	persons,
	setPersons,
	data,
	setData,
	editing,
	setEditing,
}) {
	const addUser = async (e) => {
		e.preventDefault();
		if (editing) {
			try {
				const response = await axios.put(`/user/${data.id}`, {
					name: data.name,
					email: data.email,
					phone: data.phone,
				});
				setPersons(
					persons.map((pers) => {
						if (pers.id === response.data.id) {
							(pers.name = response.data.name),
								(pers.email = response.data.email),
								(pers.phone = response.data.phone);
						}

						return pers;
					})
				);
				setEditing(false);
				setOpen(false);
				setData({});
			} catch (error) {
				console.log(error);
			}
		} else {
			try {
				const response = await axios.post("/user", {
					name: data.name,
					email: data.email,
					phone: data.phone,
				});
				setPersons([...persons, response.data]);
			} catch (error) {
				console.log(error);
			}
			setData({ name: '', email: '', phone: '', id: null })
			setOpen(false);
			setEditing(false)
		}
	};

	const handleClose = (e) => {
		e.preventDefault();
		setData({ name: '', email: '', phone: '', id: null })
		setOpen(false);
	};

	return (
		<div>
			{open ? (
				<form className="modal">
					<p>Name</p>
					<input
						type="text"
						defaultValue={data.name}
						onChange={(e) => setData({ ...data, name: e.target.value })}
					></input>
					<p>Email</p>
					<input
						type="text"
						defaultValue={data.email}
						onChange={(e) => setData({ ...data, email: e.target.value })}
					></input>
					<p>Phone</p>
					<input
						type="text"
						defaultValue={data.phone}
						onChange={(e) => setData({ ...data, phone: e.target.value })}
					></input>

					<button onClick={(e) => addUser(e)}>Add/Save</button>
					<button onClick={(e) => handleClose(e)}>Close</button>
				</form>
			) : (
				<></>
			)}
		</div>
	);
}

export default Modal;
