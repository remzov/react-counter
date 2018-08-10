export default (state, action) => {
    switch (action.type) {
		case 'INCREMENT': {
			state.value++;
			return state
		}
		case 'DECREMENT': {
			state.value--;
			return state
		}
      	default:
        	return state
	}
}

  
