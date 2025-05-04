"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();
	const [countdown, setCountdown] = useState(5); // 5 detik

	useEffect(() => {
		if (countdown === 0) {
			router.push("/");
		}

		const timer = setInterval(() => {
			setCountdown((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [countdown, router]);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-6 text-center">
			<h1 className="text-6xl font-bold mb-4">404</h1>
			<p className="text-xl mb-4">Halaman yang kamu cari tidak ditemukan.</p>
			<p className="text-md mb-6 text-gray-600">
				Anda akan diarahkan ke beranda dalam{" "}
				<span className="font-semibold">{countdown}</span> detik...
			</p>
			<Link
				href="/"
				className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
			>
				<span className="font-bold"> Kembali Sekarang </span>
			</Link>
		</div>
	);
}
