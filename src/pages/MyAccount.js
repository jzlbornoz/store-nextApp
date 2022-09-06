import Account from "@containers/Account";
import useAuth from "@hooks/useAuth";
import Head from "next/head";

const MyAccount = () => {
	const auth = useAuth();
	auth.signIn();
	return (
		<>
		<Head>
			<title>YourStore | MyAccount</title>
		</Head>
			<Account />
		</>
	);
};

export default MyAccount;
