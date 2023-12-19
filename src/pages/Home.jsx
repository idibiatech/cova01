import Transition from "../Transition";

const Home = () => {
	return <div>Home</div>;
};

const WrappedHome = Transition(Home);
export default WrappedHome;
