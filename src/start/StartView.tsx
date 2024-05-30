import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { BIcon, EllipseIcon, HomeIcon } from "../icons";
import styles from "./StartView.module.css";

const INITIAL_LOADER_STATE = [false, false, false];

function StartView() {
	const [loader, setLoader] = useState<boolean[]>(INITIAL_LOADER_STATE);
	const [action, setAction] = useState<boolean>(false);

	useEffect(() => {
		handleLoader(loader, setLoader, action);
	}, [action]);

	return (
		<section className={`${styles.section}`}>
			<div className={`${styles.home}`}>
				<HomeIcon />
			</div>
			<footer className={`${styles.footer}`}>
				<div className={`${styles.back}`}>
					<div>
						<BIcon />
					</div>
					<span className="paragraph">Back</span>
				</div>
				<div className={`${styles.action}`}>
					<h1 className={`${styles.action__title} heading1`}>Press the same button three times</h1>
					<div className={`${styles.loader}`}>
						{loader.map((status, index) => (
							<EllipseIcon key={index} status={status} />
						))}
					</div>
				</div>
			</footer>
		</section>
	);
}

function handleLoader(
	loader: boolean[],
	setLoader: Dispatch<SetStateAction<boolean[]>>,
	action: boolean,
) {
	if (action) {
		const lastIndexActive = loader.lastIndexOf(true);
		const newLoader = [...loader];
		newLoader[lastIndexActive] = false;
		setLoader(newLoader);
	} else {
		const lastIndexActive = loader.lastIndexOf(true);
		const newLoader = [...loader];
		newLoader[lastIndexActive] = false;
		setLoader(newLoader);
	}
}

export default StartView;
