import AddressDetails from '../components/AddressDetails';
import DemographicDetails from '../components/DemographicDetails';

function License() {
	return (
		<section className="w-full lg:w-[1000px] mx-auto">
			<DemographicDetails />
			<AddressDetails />
		</section>
	);
}

export default License;
