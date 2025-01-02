import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { getAPI } from "../../../config/api";
// Redirect

function PrivateRouteShop({ children,sigin }) {
    let user = useSelector((state)=> state.user);
    console.log(8, user)
    let role = user.role;
    let shop = user.shop;
   
        // const cookies =document.cookie
        // const data = {}
        // cookies.split(';').map(item=>{
        //     data[item.split('=')[0].trim()]=item.split('=')[1]
    
        // })
        // console.log({data},sigin)
    let login = false

    if(sigin == '/sign-in'){
        if(role){
            console.log('đã đăng nhập user')
            login = true
        }else{
            console.log('chưa đăng nhập user')
            login = false
        }
    }else if(sigin == '/sign-in-shop'){
        if(role && shop){
            login = true
        }else{
            login = false
        }
    }else if(sigin == '/sign-in-admin'){    
        if(role === 'admin'){
            console.log('oke đã đăng nhập admin')
            login = true
        }else{
            console.log(40, 'chưa đang nhập admin')
            login = false
        }
    }
    console.log(login)
    return login ? children : <Navigate to={`${sigin}`} />;
    
}
export default PrivateRouteShop;