function Footer({ change }) {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer p-5 bg-blue-600 text-white text-center">
			<p>
				{!change
					? `Copright © ${footerYear}, Nepal Government, Transportation Deparment`
					: `प्रतिलिपि अधिकार © ${footerYear}, नेपाल सरकार, यातायात व्यवस्था
				विभाग`}
			</p>
		</footer>
	);
}

export default Footer;
