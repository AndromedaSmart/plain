import React from "react";

import styles from "./styles.module.scss";

export const Text = <C extends React.ElementType>({
													  as,
													  children,
													  className,
												  }: {
	as?: C;
	children: React.ReactNode;
	className?: string;
}) => {
	const Component = as || "p";

	return (
		<Component className={`${styles.text} ${className ? className : ''}`}>
			{children}
		</Component>
	);
};