const { createStore } = Redux; 

const initState = {
  todos: [],
  post: []
  
}

function myreducer(state = initState , action){ 
  if (action.type = 'ADD_TODO'){
    return {
      todos: [...state.todos, action.todo]
    }
  }
}

const store = createStore(myreducer);

const todoAction = {type: 'ADD_TODO' , todo: 'buy milk'}

store.dispatch(todoAction)