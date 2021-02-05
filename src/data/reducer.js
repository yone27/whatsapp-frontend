export const initialState = {
	user: {
		id: '601d7d92ca90643128bfa8aa'
	},
	rooms: []
};

const reducer = (state, action) => {
	console.log(action);
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