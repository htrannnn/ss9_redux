import React from "react";
import { Link } from "react-router-dom";

function StudentItem(props) {
	const { id, name, gender, phone, address, email } = props.student;

	return (
		<tr>
			<td className="text-center">{+props.i + 1}</td>
			<td className="text-center">{id}</td>
			<td className="text-center">{name}</td>
			<td className="text-center">{gender}</td>
			<td className="text-center">{phone}</td>
			<td className="text-center">{address}</td>
			<td className="text-center">{email}</td>
			<td className="text-center">
				<Link type="button" className="btn btn-success rounded-0 me-2">
					Detail
				</Link>
				<button type="button" className="btn btn-success rounded-0">
					Delete
				</button>
			</td>
		</tr>
	);
}

export default StudentItem;
