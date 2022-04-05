import { Dispatch, SetStateAction, useState } from "react";

interface IUseBoolean {
	setValue?: Dispatch<SetStateAction<boolean>>;
	setFalse?: () => void;
	setTrue?: () => void;
	toggle?: () => void;
	value?: boolean;
}

const useBoolean = (): IUseBoolean => {
	const [value, setValue] = useState<boolean>(false);

	const setFalse = () => setValue(false);
	const setTrue = () => setValue(true);
	const toggle = () => setValue(!value);

	return { setValue, setTrue, setFalse, toggle, value };
};

export default useBoolean;
