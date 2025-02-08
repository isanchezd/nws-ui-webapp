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
		if (action?.name) {
			const newLoader = [...loader];

			if (action.name === Buttons.A) {
				const firstIndexActive = loader.findIndex((item) => !item);
				if (firstIndexActive === -1) {
					newLoader[0] = true;

					return;
				}
				newLoader[firstIndexActive] = true;
			}
			if (action.name === Buttons.B) {
				const lastIndexActive = loader.lastIndexOf(true);
				if (lastIndexActive === -1) {
					newLoader[0] = false;

					return;
				}
				newLoader[lastIndexActive] = false;
			}
			setLoader(newLoader);
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
