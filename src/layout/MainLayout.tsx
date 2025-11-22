import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  CssBaseline,
  Button,
  ListItemButton,
  IconButton,
  Tooltip,
  Avatar,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppSelector } from '../redux/hooks';

const drawerWidth = 220;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Perfil', icon: <AccountCircleIcon />, path: '/profile' },
];

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useAppSelector((state) => state.user);

  const handleLogout = () => {
    navigate('/login', { replace: true });
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box flex={1} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box flex={0.5} gap={2} justifyContent="flex-end" display="flex" alignItems="center">
            <Tooltip
              title={<span style={{ fontSize: 16, fontWeight: 500 }}>Tasa del dia: 234.00</span>}
              arrow
              placement="left"
            >
              <IconButton color="inherit" sx={{ ml: 1 }}>
                <AttachMoneyIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={'temporary'}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <Toolbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2, mt: 2 }}>
          <Avatar sx={{ width: 64, height: 64, mb: 1 }} src={user?.foto || undefined}>
            {user?.nombre?.[0] || ''}
          </Avatar>
          <Typography variant="subtitle1" fontWeight={500} textAlign="center" mb={2}>
            {user?.nombre} {user?.apellido}
          </Typography>
          <Divider sx={{ width: '80%', mb: 2 }} />
        </Box>
        <Box sx={{ overflow: 'auto', flex: 1 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            mb: 5,
            px: 2,
          }}
        >
          <Button
            sx={{ width: '100%' }}
            color="primary"
            variant="outlined"
            size="small"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          overflowX: 'hidden',
          backgroundColor: '#f0f0f0',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'margin-left 0.3s',
          flexGrow: 1,
          height: '100vh',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
