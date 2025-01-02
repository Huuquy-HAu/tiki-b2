import React from 'react';
import ProfileMenu from './ProfileManu/ProfileMenu';
import {Outlet} from 'react-router-dom'
import ProfileListHeader from './ProfileLeft/ProfileListHeader';

function UserInfoMenu() {
    return (
        <div>
            <div className= 'userInformation'>
                <ProfileMenu />
                <div>
                    <ProfileListHeader/>
                    <Outlet/>
                    
                </div>
            </div>
        </div>
    )
}

export default UserInfoMenu