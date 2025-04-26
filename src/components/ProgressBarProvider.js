"use client";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
const Providers = ({ children }) => {
	return (
		<ProgressProvider
			height="4px"
			color="rgba(37, 101, 170)"
			options={{ showSpinner: true }}
			shallowRouting
		>
			{children}
		</ProgressProvider>
	);
};

export default Providers;
