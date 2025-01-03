import { useContext } from "react";

import { ControllerActionContext } from "../providers/controller-action/controller-action-provider";
import { ControllerContextType } from "../providers/controller-action/controller-context-type";

function useControllerAction(): ControllerContextType {
	return useContext(ControllerActionContext);
}

export default useControllerAction;
