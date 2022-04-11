import { ChangeEvent, useState } from "react";

const useOnChange = (defaultValue?: string | null) => {
	const [text, setText] = useState<string>(defaultValue || "");

	const handleText = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	return { text, setText, handleText };
};

export default useOnChange;
