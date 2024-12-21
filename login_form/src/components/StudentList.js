import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStudent } from "../services/studentsService";
import StudentItem from "./StudentItem";

function StudentList() {
	const [studentList, setStudentList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setStudentList(await getAllStudent());
		};
		fetchData();
	}, []);

	return (
		<div className="container my-3">
			<form className="d-flex align-items-center justify-content-between my-3">
				<Link className="btn btn-success rounded-0 w-25" id="add-link" to="/students_list/add_students">
					Add New Students
				</Link>

				<div className="d-flex align-items-center">
					<input type="text" className="form-control rounded-0 " id="inputName" placeholder="Enter name" />
					<button type="button" className="btn btn-success rounded-0">
						Search
					</button>
				</div>
			</form>

			<table className="table table-striped table-success">
				<thead>
					<tr>
						<th className="text-center">STT</th>
						<th className="text-center">ID</th>
						<th className="text-center">Name</th>
						<th className="text-center">Gender</th>
						<th className="text-center">Phone</th>
						<th className="text-center">Address</th>
						<th className="text-center">Email</th>
						<th className="text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					{studentList.map((student, i) => (
						<StudentItem key={student.id} i={i} student={student} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default StudentList;
