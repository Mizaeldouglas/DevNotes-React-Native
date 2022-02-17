

const initialState ={
	list:[
		{title:"Primeira Nota", body:"Testanto 1,3,2..."}
	]
}


export default ( state = initialState,action ) => {

	switch (action.type) {
		case 'ADD_NOTE':
			
			break;
	}

	return state
}