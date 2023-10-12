const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    apiUsers: [],
    users: JSON.parse(localStorage.getItem('users')) || []
}

export const fetchApiUsers = createAsyncThunk('fetchApiUsers', async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
});

const userSlice = createSlice({
    name: 'AddUserSlice',
    initialState,
    reducers: {
        addUser: (state, action)=>{
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
            let storedData = JSON.stringify(current(state.users))
            localStorage.setItem('users', storedData);
        },
        removeAllUsers: (state, action)=>{
            state.users = [];
            localStorage.removeItem('users');
        },
        removeUser: (state, action)=>{
            const id = action.payload;
            const newUsers = state.users.filter((user)=> user.id !== id );
            state.users = newUsers;
            let storedData = JSON.stringify(newUsers);
            localStorage.setItem('users', storedData);
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchApiUsers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.apiUsers = action.payload;
        })
    }
});

export const { addUser, removeAllUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;