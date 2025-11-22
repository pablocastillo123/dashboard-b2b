# Dashboard B2B

Dashboard B2B es una aplicación web para visualizar y analizar ventas recientes, totales, clientes destacados y distribución de ventas, utilizando gráficos interactivos y tablas filtrables.

## Instrucciones para ejecutar el proyecto

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Ejecuta el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```
3. Abre tu navegador en [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal).

4. Para ejecutar los tests:
   ```bash
   npm run test
   ```

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Material UI (MUI)
- Redux Toolkit
- Nivo (gráficas)
- React Testing Library + Vitest (testing)
- ESLint + Prettier (formato y lint)

## Consideraciones importantes

- Los tests unitarios y de componentes se encuentran en la carpeta `tests`.
- El proyecto está configurado para trabajar con datos simulados (mock data), los cuales se encuentran organizados en la carpeta `mocks`. Esto permite desarrollar y probar funcionalidades sin depender de una API real.
- Para iniciar sesión puedes utilizar cualquier nombre de usuario y contraseña. (En un entorno real esto no sería posible). La contraseña debe cumplir dos validaciones: máximo 6 caracteres y al menos un carácter en mayúscula.
