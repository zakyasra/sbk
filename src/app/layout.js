/* eslint-disable @next/next/no-page-custom-font */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/ProgressBarProvider";
import AosWrapper from "@/components/AosWrapper";
import ButtonToTop from "@/components/ButtonToTop";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "PT. Sumber Berkat Komputindo",
	description:
		"PT. Sumber Berkat Komputindo (SBK) is an end-to-end ICT solution provider established in the early 2000s. We specialize in network integration, data communication, and wiring systems for both public and private corporations.",
	keywords: [
		"PT. Sumber Berkat Komputindo",
		"SBK",
		"ICT solution provider",
		"network integration",
		"data communication",
		"wiring systems",
		"IT infrastructure",
	],
	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon.png",
		apple: "/favicon.png",
	},
	openGraph: {
		title: "PT. Sumber Berkat Komputindo",
		description:
			"End-to-end ICT solutions for network integration, data communication, and more — trusted by public and private sectors since the early 2000s.",
		url: "https://sbk.co.id",
		siteName: "PT. Sumber Berkat Komputindo",
		images: [
			{
				url: "https://sbk.co.id/favicon.png",
				width: 1200,
				height: 630,
				alt: "PT. Sumber Berkat Komputindo Logo",
			},
		],
		locale: "en_ID",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "PT. Sumber Berkat Komputindo",
		description:
			"End-to-end ICT solutions for network integration, data communication, and more — trusted by public and private sectors.",
		images: ["https://sbk.co.id/favicon.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-darkreader-scheme="white"
			data-darkreader-mode="dynamic"
		>
			<head>
				{/* Google Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
				<title>Sumber berkat Komputindo</title>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased `}
			>
				<ButtonToTop />
				<Navbar />
				<div className="overflow-hidden ">
					<Providers>
						<AosWrapper>{children}</AosWrapper>
					</Providers>
				</div>
				<Footer />
			</body>
		</html>
	);
}
