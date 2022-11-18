const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      case 'REMOVE_TODO': 
          return [
            state.length =0,
            // removeTodoList(),
            {
              id: action.id
            }
          ]
      default:
        return state
    }
  }
  
  export default todos

  // function removeTodoList() {
  //   let elem = document.getElementById('ulId');
  //   elem.parentNode.removeChild(elem);
  //   elem.parentNode.appendChild(elem);
  // }