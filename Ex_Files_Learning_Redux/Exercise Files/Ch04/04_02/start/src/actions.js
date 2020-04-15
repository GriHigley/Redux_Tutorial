import C from './constants'
import { suggestions } from './store/reducers'

export function addDay(resort, date, powder=false, backcountry=false) {

	return {
		type: C.ADD_DAY,
		payload: {resort,date,powder,backcountry}
	}

}

export const removeDay = function(date) {

	return {
		type: C.REMOVE_DAY,
		payload: date
	}

}

export const setGoal = (goal) => 
	({
		type: C.SET_GOAL,
		payload: goal
	})



export const addError = (error) => ({
	type: C.ADD_ERROR,
	payload: error
})

export const clearError = (message) => ({
	type: C.CLEAR_ERROR,
	payload: message
})
export const changeSuggestions = (newSuggestions) =>
	({
		type: C.CHANGE_SUGGESTIONS,
		payload: newSuggestions
	})

export const clearSuggestions = () => ({
	type: C.CLEAR_SUGGESTIONS
})