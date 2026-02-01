import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../types/user';

const initialState: User = {
  nombre: 'Pepe',
  apellido: 'Delgado',
  telefono: '401-555-1234',
  correo: 'pepe.delgado@example.com',
  direccion: 'calle Falsa 123, Ciudad, País',
  foto: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_: unknown, action: PayloadAction<User>) => {
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
