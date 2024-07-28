import { useContext } from "react";

import { ControllerActionContext } from "../providers/controller-action/controller-action-provider";
import { ControllerContextType } from "../providers/controller-action/controller-context-type";

export const useControllerActions = (): ControllerContextType => {
	const context = useContext(ControllerActionContext);

	return context;
};
