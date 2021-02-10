export const initialState = {
	user: {
		id: '601ae6070f6e501cbca15483'
	},
	rooms: []
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_ROOMS":
			return {
				...state,
				rooms: action.rooms,
			};
		default:
			return state;
	}
};

export default reducer;