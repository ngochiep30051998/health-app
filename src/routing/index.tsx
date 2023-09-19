import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import InLoginLayout from '../components/layouts/InLoginLayout';
import TopMyPage from '../pages/top-my-page/TopMyPage';
import MyRecord from '../pages/my-record/MyRecord';
import Column from '../pages/column/Column';
function Router() {

    return <BrowserRouter>
        <Routes>
            <Route path="/dang-nhap" element={<Login />} />

            <Route path="/" element={<InLoginLayout />}>
                <Route path="/" element={<Column />} />
                <Route path="/top-my-page" element={<TopMyPage />} />
                <Route path="/my-record" element={<MyRecord />} />
                <Route path="/column" element={<Column />} />
            </Route>
        </Routes>
    </BrowserRouter>
}
export default Router;