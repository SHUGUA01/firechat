//Imports CSS
import './App.css';

//Import React Router
import { Route, Routes } from 'react-router';

//Import Layouts
import RootLayout from './layouts/root.layout';
import PublicLayout from './layouts/public.layout';
import AdminLayout from './layouts/admin.layout';
import AuthLayout from './layouts/auth.layout';

//Imports Pages
import HomePage from './pages/public/home.page';
import NotFoundPage from './pages/public/not-found.page';
import DashboardPage from './pages/admin/dashboard.page';
import ProfilePage from './pages/admin/profile.page';
import ChatPage from './pages/admin/chat.page';
import LoginPage from './pages/auth/login.page';
import RegisterPage from './pages/auth/register.page';

function App() {
  
  return (
      //Configurar Rutas
      <Routes>
        {/* Root Layout */}
        <Route element={<RootLayout></RootLayout>}>
           {/* Public Layout */}
           <Route element={<PublicLayout></PublicLayout>}>
             {/* Public Pages */}
             <Route element={<HomePage></HomePage>} index></Route>
             <Route element={<NotFoundPage></NotFoundPage>} path="*"></Route>
           </Route>
           {/* Admin/Protegidas Layout */}
           <Route element={<AdminLayout></AdminLayout>} path="admin">
             {/* Admin Pages */}
             <Route element={<DashboardPage></DashboardPage>} index></Route>
             <Route element={<ProfilePage></ProfilePage>} path="profile"></Route>
             <Route element={<ChatPage></ChatPage>} path="chat"></Route>
           </Route>
           {/* Auth Layout */}
           <Route element={<AuthLayout></AuthLayout>} path="auth">
             {/* Auth Pages */}
             <Route element={<LoginPage></LoginPage>} path="login"></Route>
             <Route element={<RegisterPage></RegisterPage>} path="register"></Route>
           </Route>
        </Route>   
      </Routes>
  )
}

export default App
