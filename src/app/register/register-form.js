"use client";

import { useState } from 'react';
import { register } from './data';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const [deviceID, setDeviceID] = useState("");
    const [isDeviceIDValid, setIsDeviceIDValid] = useState("");
    const [deviceIDErrorMessage, setDeviceIDErrorMessage] = useState("");

    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

    const [rePassword, setRePassword] = useState("");
    const [isRePasswordValid, setIsRePasswordValid] = useState("");
    const [rePasswordErrorMessage, setRePasswordErrorMessage] = useState("");

    const [isLoading, setIsLoading] = useState(false);
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

    const validateRePassword = () => {
        const isValid = rePassword === password;
        setIsRePasswordValid(isValid);
        setRePasswordErrorMessage(
            isValid ? "" : "Password must match");
        return isValid;
    }

    const handleRegister = () => {
        const deviceIDValid = validateDeviceID();
        const passwordValid = validatePassword();
        const rePasswordValid = validateRePassword();
        console.log(deviceIDValid, passwordValid, rePasswordValid);

        const isRegisterValid = deviceIDValid && passwordValid && rePasswordValid;

        if (isRegisterValid) {
            setIsLoading(true);
            console.log(deviceID, password);
            register(deviceID, password).then((data) => {
                console.log("register success", data);
                router.push("/");
            }).catch((error) => {
                setErrorMessage(error.message);
                setIsFailed(true);
            }).finally(() => {
                setIsLoading(false);
            });
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center align-center gap-16">
            <a href="/" className="text-sky-500 items-left w-96 underline">Back to Home</a>
            <h1 className="text-4xl font-bold text-center">
                Create New Account
            </h1>
            <div className="flex flex-col items-left gap-4 w-80">
                <input type="text" placeholder="Device ID" className="p-2 border-2 border-sky-600 rounded-lg"
                    value={deviceID} onChange={(e) => setDeviceID(e.target.value)} />
                <p className="text-red-500">{deviceIDErrorMessage}</p>
                <input type="password" placeholder="Password" className="p-2 border-2 border-sky-600 rounded-lg"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="text-red-500">{passwordErrorMessage}</p>
                <input type="password" placeholder="Re-enter Your Password" className="p-2 border-2 border-sky-600 rounded-lg"
                    value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
                <p className="text-red-500">{rePasswordErrorMessage}</p>
            </div>
            <button className="bg-sky-500 py-2 w-48 rounded-lg text-white font-bold"
                onClick={handleRegister}>
                Register
            </button>
            <div className="flex flex-col items-center gap-2">
                <p>Already have an account?</p>
                <a href="/login" className="text-sky-500 font-bold underline">Try logging in instead</a>
            </div>
        </main>
    );
}