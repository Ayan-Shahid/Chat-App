import moment from "moment";

const useMinute = (value?: number | null) => {
	const time = moment(value).startOf("minute").fromNow();

	return { time };
};

export default useMinute;
