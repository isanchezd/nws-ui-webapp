import Icon from "./ellipse.svg?react";
import styles from "./EllipseIcon.module.css";

interface EllipseIconProps {
	status: boolean;
}

function EllipseIcon({ status }: EllipseIconProps) {
	const classes = status ? styles["icon--active"] : styles["icon--inactive"];

	return <Icon className={classes} />;
}

export default EllipseIcon;
