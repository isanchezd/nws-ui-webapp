import { BIcon, HomeIcon } from "../icons";
import Loader from "./components/loader";
import styles from "./start-view.module.css";

function StartView() {
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
					<Loader />
				</div>
			</footer>
		</section>
	);
}

export default StartView;
