import { React, useRef } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../services/accountService";
import { login } from "../redux/accountAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginComponent() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const usernameRef = useRef();
	const passwordRef = useRef();

	const handleLogin = async () => {
		const loginInfo = {
			username: usernameRef.current.value,
			password: passwordRef.current.value,
		};
		const account = await checkLogin(loginInfo);

		dispatch(login(loginInfo)); //hàm login trả về 1 action
		toast.success("Đăng nhập thành công");
		navigate("/students");
	};

	return (
		<div className="container d-flex justify-content-center align-items-center mt-3 mb-3">
			<div className="card p-4 shadow" style={{ width: "400px" }}>
				<h3 className="text-center mb-4">Login</h3>
				<form>
					<div className="mb-3">
						<label className="form-label">Username:</label>
						<input type="text" name="username" className="form-control" placeholder="Enter your username" ref={usernameRef} />
					</div>
					<div className="mb-3">
						<label className="form-label">Password:</label>
						<input type="password" name="password" className="form-control" placeholder="Enter your password" ref={passwordRef} />
					</div>
					<div className="text-center">
						<button type="button" className="btn btn-success w-100 rounded-0" onClick={handleLogin}>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LoginComponent;
