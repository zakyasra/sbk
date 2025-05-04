"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientWrapper({ children }) {
	useEffect(() => {
		AOS.init({
			duration: 900,
			offset: 300,
			once: true,
			easing: "ease-out-cubic",
		});

		// Paksa AOS mendeteksi ulang saat halaman baru selesai render
		const timeout = setTimeout(() => {
			AOS.refresh();
			window.scrollTo(0, 1); // paksa scroll kecil
			window.scrollTo(0, 0);
		}, 200); // beri jeda agar elemen sempat render

		return () => clearTimeout(timeout);
	}, []);
	return <>{children}</>;
}
