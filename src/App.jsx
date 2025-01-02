import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import CreateShop from './page/user/createShop/createShop';
import SignUp from './page/user/signUp/SignUp';
import SignIn from './page/user/signIn/SignIn';
import Header from './components/Header';
import Filter from './page/user/filter/Filter';
import Home from './page/user/home/Home';
import Admin from './page/admin/Admin';
import 'antd/dist/antd.css';
import ShopDashBoardAll from './page/shop/dashboard/ShopDashBoardAll';
import Profile from './page/user/profile/ProfileManu/ProfileMenu';
import ProfileList from './page/user/profile/ProfileLeft/ProfileList';
import ProfileListHeader from './page/user/profile/ProfileLeft/ProfileListHeader';
import UserInfo from './page/user/profile/UserInfo_data/UserInfo';
import Shop from '.././src/page/admin/shopManagement/Shop'
import './App.css';
import UserInfoMenu from './page/user/profile/UserInfoMenu';
import Category from './page/admin/categoryManagement/Category';
import User from './page/admin/userManagement/User';
import AdminLogin from './page/admin/login/Login';
import OrderUser from './page/user/order/Order'
import ShopLogin from './page/shop/login/Login';
import Order from './page/user/order/maintotal/Main';
import ShopHome from './page/shop/shopHome/ShopHome';
import OderHistory from './page/user/order/Order';
import ShopProfile from './page/shop/shopProfile/ShopProfile';
import ShopMenu from './page/shop/productManagement/ShopMenu';
import ManagementProduct from './page/shop/productManagement/ManagementProduct ';
import Detail from "./page/user/detail/Detail";
import "antd/dist/antd.css";
import "./App.css";
import AddItem from "./page/shop/productManagement/priceItem/addItem_Phu/AddItem";
import EditItem from './page/shop/productManagement/editProduct/priceItem/addItem_Phu/EditItem';
import PrivateRouteShop from './page/shop/componentDataTableAdmin/PrivateRouter';
import TotalCart from './page/user/cart/TotalCart';
import ShopDashboard from './page/shop/dashboard/ShopDashboard';
import OrderContainer from './page/shop/orderManagement/orderContainer/OrderContainer';

function App() {
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    return (
        <BrowserRouter>
            <Routes>
                {/* SIGIN_SIGUP ROUTER */}
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-in-admin' element={<AdminLogin />} />
                <Route path='/sign-in-shop' element={<ShopLogin />} />

            {/* SHOP ROUTER */}
            <Route path='/adminShop' 
                element={<PrivateRouteShop sigin={'/sign-in-shop'}>
                             <ShopMenu/>
                        </PrivateRouteShop>}>   
                        <Route path='/adminShop/Product' element={<ManagementProduct/>}/>
                        <Route path='/adminShop/Dashboard' element={<ShopDashboard/>}/>
                        <Route path='/adminShop/Order' element={<OrderContainer/>}/>
                        <Route path='/adminShop/Profile' element={<ShopProfile />}/>
            </Route>
            <Route path='/addItem' 
                element={<PrivateRouteShop sigin={'/sign-in-shop'}>
                             <AddItem/>
                        </PrivateRouteShop>}>   
            </Route>
            <Route path='/editItem' 
                element={<PrivateRouteShop sigin={'/sign-in-shop'}>
                             <EditItem/>
                        </PrivateRouteShop>}>   
            </Route>
            {/* ROUTER ADMIN */}
                {/* SHOP ROUTER */}
                <Route path='/adminShop'
                    element={
                        <PrivateRouteShop sigin={'/sign-in-shop'}>
                            <ShopMenu />
                        </PrivateRouteShop>
                    }>
                    <Route path='/adminShop/Product' element={<ManagementProduct />} />
                    <Route path='/adminShop/Dashboard' element={<ShopDashBoardAll />} />
                    <Route path='/adminShop/Order' element={<OrderContainer />} />
                    <Route path='/adminShop/Profile' element={<ShopProfile />} />
                </Route>
                <Route path='/addItem'
                    element={<PrivateRouteShop sigin={'/sign-in-shop'}>
                        <AddItem />
                    </PrivateRouteShop>}>
                </Route>
                <Route path='/editItem'
                    element={<PrivateRouteShop sigin={'/sign-in-shop'}>
                        <EditItem />
                    </PrivateRouteShop>}>
                </Route>
                {/* ROUTER ADMIN */}

                <Route path='/admin'
                    element={<PrivateRouteShop sigin={'/sign-in-admin'}>
                        <Admin />
                    </PrivateRouteShop>}>
                    <Route path='/admin/category' element={<Category />} />
                    <Route path='/admin/dashboard' element={<ShopDashboard />} />
                    <Route path='/admin/shop' element={<Shop />}></Route>
                    <Route path='/admin/user' element={<User />}></Route>
                </Route>

                {/* USER ROUTER */}
                <Route path='/' element={<Header />}>
                    <Route path='/create-shop' element={<CreateShop />}></Route>
                    <Route path='/' element={<Home />} />
                    <Route path='/filter' element={<Filter />} />
                    <Route path='/user'
                        element={<PrivateRouteShop sigin={'/sign-in'}>
                            <UserInfoMenu />

                        </PrivateRouteShop>}>
                        <Route path='/user/profile' element={<div className='profile'> <UserInfo /> <ProfileList /> </div>} />
                        <Route path='/user/order' element={<div className='order'><OderHistory /></div>} />
                    </Route>
                    <Route path='/ShopHome' element={<ShopHome />} />
                    <Route path='/detail' element={<Detail />} />
                    <Route path='/cart'
                        element={<PrivateRouteShop sigin={'/sign-in'}>
                            <TotalCart />
                        </PrivateRouteShop>}>
                    </Route>
                </Route>
                <Route path='/order'
                    element={<PrivateRouteShop sigin={'/sign-in'}>
                        <div className='order'><Order /></div>
                    </PrivateRouteShop>}>
                </Route>
                <Route path='*' element={<SignIn />} /><Route />
                <Route />

            </Routes>
        </BrowserRouter>
    );
}
export default App;
