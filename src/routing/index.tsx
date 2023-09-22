import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import TopMyPage from '../pages/top-my-page/TopMyPage';
import MyRecord from '../pages/my-record/MyRecord';
import Column from '../pages/column/Column';
import InLoginLayout from '../layouts/in-login-layout/InLoginLayout';
import { PublicGuard } from '../guards/PublicGuard';
import { PrivateGuard } from '../guards/PrivateGuard';
import NonLoginLayout from '../layouts/NonLoginLayout';
function Router() {

    return <BrowserRouter>
        <Routes>

            <Route element={<InLoginLayout />} path='/column' >
                <Route path="" element={<Column />} />
            </Route>

            <Route path='/' element={<PublicGuard children={<NonLoginLayout />} />}>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Login />} />
            </Route>

            <Route path="/" element={<PrivateGuard children={<InLoginLayout />} />}>
                <Route path="/" element={<TopMyPage />} />
                <Route path="/top-my-page" element={<TopMyPage />} />
                <Route path="/my-record" element={<MyRecord />} />
            </Route>
        </Routes>
    </BrowserRouter>
}
export default Router;