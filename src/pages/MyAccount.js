import Account from "@containers/Account";
import useAuth from "@hooks/useAuth";

const MyAccount = () => {
	const auth = useAuth();
	auth.signIn();
	return (
		<>
			<Account />
		</>
	);
};

export default MyAccount;
