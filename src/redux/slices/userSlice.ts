import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../types/user';

const initialState: User = {
  nombre: '',
  apellido: '',
  telefono: '',
  correo: '',
  direccion: '',
  foto: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return { ...action.payload };
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => initialState,
  },
});

export const { setUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
