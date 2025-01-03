import { useEffect, useState } from "react";

import { Buttons } from "../../constants/gamepad";
import useControllerActions from "../../hooks/useControllerActions";
import { EllipseIcon } from "../../icons";
import styles from "./loader.module.css";

const INITIAL_LOADER_STATE = [false, false, false];

export default function Loader() {
	const [loader, setLoader] = useState<boolean[]>(INITIAL_LOADER_STATE);
	const { action } = useControllerActions();

	useEffect(() => {
		if (action) {
			if (action.name === Buttons.A) {
				const lastIndexActive = loader.lastIndexOf(true);
				const newLoader = [...loader];
				newLoader[lastIndexActive] = false;
				setLoader(newLoader);
			} else {
				const lastIndexActive = loader.lastIndexOf(true);
				const newLoader = [...loader];
				newLoader[lastIndexActive] = true;
				setLoader(newLoader);
			}
		}
	}, [action]);

	return (
		<div className={`${styles.loader}`}>
			{loader.map((status, index) => (
				<EllipseIcon key={index} status={status} />
			))}
		</div>
	);
}
