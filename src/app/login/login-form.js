"use client";
import { useState } from 'react';
import { login } from './data';
import { useRouter } from 'next/navigation';

export default function LoginForm(isRegister = false) {
	const [deviceID, setDeviceID] = useState("");
	const [isDeviceIDValid, setIsDeviceIDValid] = useState("");
	const [deviceIDErrorMessage, setDeviceIDErrorMessage] = useState("");

	const [password, setPassword] = useState("");
	const [isPasswordValid, setIsPasswordValid] = useState("");
	const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

	const [isLoading, setIsLoading] = useState(false);
	const [isRegistering, setIsRegistering] = useState(isRegister);
	const [errorMessage, setErrorMessage] = useState("Error!");
	const [isFailed, setIsFailed] = useState(false);

	const router = useRouter();

	const validateDeviceID = () => {
		const isValid = deviceID.length >= 1;
		setIsDeviceIDValid(isValid);
		setDeviceIDErrorMessage(
			isValid ? "" : "Device ID must be at least 1 characters long");
		return isValid;
	}

	const validatePassword = () => {
		const isValid = password.length >= 1;
		setIsPasswordValid(isValid);
		setPasswordErrorMessage(
			isValid ? "" : "Password must be at least 1 characters long");
		return isValid;
	}

	const handleLogin = (e) => {
		e.preventDefault()
        const deviceIDValid = validateDeviceID();
		const passwordValid = validatePassword();
		console.log(deviceIDValid, passwordValid);

		const isLoginValid = deviceIDValid && passwordValid;

		if (isLoginValid) {
			setIsLoading(true);
			console.log(deviceID, password);
			login(deviceID, password).then((data) => {
				console.log("login success", data);
				const token = data.token;
				localStorage.setItem("token", token);
				router.push("/");
			}).catch((error) => {
				setIsFailed(true);
				setErrorMessage(error.message);
			}).finally(() => {
				setIsLoading(false);
			});
		}
	};

	const handleRegister = async () => {
		const deviceIDValid = validateDeviceID();
		const passwordValid = validatePassword();

		const isRegisterValid = deviceIDValid && passwordValid;

		// if (!isRegisterValid) {
		//   return;
		// }

		setIsLoading(true);
		try {
			register(deviceID, password);
			router.push("/");
		} catch (error) {
			setIsFailed(true);
			setErrorMessage(error.message);
		} finally {
			setIsLoading(false);
		}

		const handleSetLogin = () => {
			setIsDeviceIDValid(true);
			setIsPasswordValid(true);

			setIsRegistering(false);
		}

		const handleSetRegister = () => {
			setIsDeviceIDValid(true);
			setIsPasswordValid(true);

			setIsRegistering(true);
		}

	};

	return (
		<>
			<h1 className="text-4xl font-bold text-center">
				Welcome back!
			</h1>
			<div className="flex flex-col items-center gap-4 w-80">
                <form id="login" className="flex flex-col items-center" onSubmit={handleLogin}>
				<input onChange={(e) => setDeviceID(e.target.value)}
					type="text" placeholder="Device ID" className="p-2 border-2 border-sky-600 rounded-lg" />
				<input onChange={(e) => setPassword(e.target.value)}
					type="password" placeholder="Password" className="p-2 border-2 border-sky-600 rounded-lg" />
                </form>
			</div>
			<button className="bg-sky-500 py-2 w-48 rounded-lg text-white font-bold" form="login">
				Login
			</button>
			<div className="flex flex-col items-center gap-2">
				<p>Don't have a device?</p>
				<a href="register" className="text-sky-500 font-bold underline">Register</a>
			</div>
		</>
	)
}