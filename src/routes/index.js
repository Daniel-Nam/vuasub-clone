import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Profile from "../pages/Profile";

const paths = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/login",
		component: Login,
	},
	{
		path: "/sign-up",
		component: SignUp,
	},
	{
		path: "/profile",
		component: Profile,
	},
];

export default paths;
