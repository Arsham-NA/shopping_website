"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {

	//age user login nakarde bood be safhe login mire
	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("user_token"))
		!token ? redirect("login") : undefined;
	}, []);

	return (
		<h2 className="vw-100 vh-100 d-flex justify-content-center align-items-center">Dashboard</h2>
	)
}

export default Dashboard;