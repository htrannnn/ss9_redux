import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import StudentList from "./components/StudentList";

function App() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route path="/homepage" element={<HomeComponent />}></Route>
				<Route path="/students" element={<StudentList />}></Route>
			</Routes>
			<FooterComponent />
		</>
	);
}

export default App;
