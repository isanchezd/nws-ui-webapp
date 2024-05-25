import { useState } from "react";

import { BIcon, EllipseIcon, HomeIcon } from "../icons";
import styles from "./StartView.module.css";

const INITIAL_LOADER_STATE = [false, false, false];

function StartView() {
	const [loader, setLoader] = useState<boolean[]>(INITIAL_LOADER_STATE);
	const [action, setAction] = useState<boolean>(false);

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
						{loader.map((item, index) => (
							<EllipseIcon key={index} />
						))}
					</div>
				</div>
			</footer>
		</section>
	);
}

export default StartView;
