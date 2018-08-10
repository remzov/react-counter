export default (state, action) => {
    switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				value: state.value++
			}
		
		case 'DECREMENT': 
			return {
				...state,
				value: state.value--
			}
      	default:
        	return state
	}
}

  
