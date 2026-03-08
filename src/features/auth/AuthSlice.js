import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../app/axios';

const initialState = {
    user: {},
    isAdmin: false,
    loading: true
}

export const fetchProfile = createAsyncThunk(
    'auth/fetchProfile',
    async () => {
        const token = localStorage.getItem('token');

        if (!token) return null;

        const { data } = await api.get('/users/profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data.data;
    }
)

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAdmin = action.payload.role === 'admin';
        },
        logout: (state, action) => {
            state.user = {};
            state.isAdmin = false;
        }

    },

    extraReducers: (builder) => {
        builder.addCase(fetchProfile.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProfile.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.user = action.payload;
                state.isAdmin = action.payload?.role === 'admin';
            }
        })
        builder.addCase(fetchProfile.rejected, (state) => {
            state.loading = false;
        });
    }
})

export const { setUser, logout } = AuthSlice.actions;
export default AuthSlice.reducer;