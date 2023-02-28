import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import License from './pages/License';

function App() {
	const [change, setChange] = useState(true);
	const handleChange = () => setChange(!change);

	return (
		<>
			<Header change={change} handleChange={handleChange} />
			<Navbar change={change} />
			<Routes>
				<Route path="/license" element={<License />} />
			</Routes>

			<Footer change={change} />
		</>
	);
}

export default App;
