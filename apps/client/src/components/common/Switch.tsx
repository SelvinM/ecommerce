import React from "react";
import { Switch } from "@headlessui/react";
type Props = {
	value: boolean;
	onChange: (val: boolean) => void;
	label: string | JSX.Element;
};

const CustomSwitch = ({ value, onChange, label }: Props) => {
	return (
		<Switch.Group as="div" className="flex items-center space-x-3">
			<Switch
				checked={value}
				onChange={onChange}
				className={`${
					value
						? "bg-primary-500 dark:bg-secondary-200 border-transparent"
						: " bg-gray-200 dark:bg-gray-800 dark:border-gray-600"
				} border relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:ring-1 dark:focus:ring-secondary-200 dark:ring-offset-gray-800 ring-offset-2 dark:ring-opacity-30 focus:ring-primary-500 focus:outline-none`}
			>
				<span
					className={`${
						value
							? "translate-x-6 bg-gray-300 dark:bg-primary-500"
							: "translate-x-1 bg-primary-500 dark:bg-gray-500"
					} inline-block w-4 h-4 transform rounded-full transition-transform`}
				/>
			</Switch>
			<Switch.Label className="cursor-pointer flex-1 ">{label}</Switch.Label>
		</Switch.Group>
	);
};

export default CustomSwitch;
