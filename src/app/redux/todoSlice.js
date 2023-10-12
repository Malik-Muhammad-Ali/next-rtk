const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
    todos:  []
}

const todoSlice = createSlice({
    name: 'TodoSlice',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const data = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(data);
            let todoData = JSON.stringify(current(state.todos));
            localStorage.setItem('todos', todoData);
        },
        removeTodo: (state, action)=>{
            const updatedData = state.todos.filter((data) => data.id !== action.payload);
            state.todos = updatedData;
            let todoData = JSON.stringify(state.todos);
            localStorage.setItem('todos', todoData);
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;