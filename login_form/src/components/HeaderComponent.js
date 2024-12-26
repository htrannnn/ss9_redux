import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/accountAction";
import { toast } from "react-toastify";

function HeaderComponent() {
	const account = useSelector((state) => state.user.account);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		navigate("/homepage");
		toast.success("Đăng xuất thành công");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				Navbar
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/homepage">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/students">
								Student List
							</Link>
						</li>
						<li className="nav-item">
							{!account && (
								<Link type="button" className="nav-link btn btn-outline-success rounded-0" to="/login_students_management">
									Login
								</Link>
							)}
						</li>
						<li className="nav-item">
							<div className="mt-2 ms-2 me-2 fw-bold">{account && account.username}</div>
						</li>
						<li className="nav-item">
							{account && (
								<Link type="button" className="nav-link btn btn-outline-success rounded-0" to="/login_students_management" onClick={handleLogout}>
									Logout
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default HeaderComponent;
