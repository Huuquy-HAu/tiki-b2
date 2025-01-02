import React, { useEffect, useState } from 'react'
import { patchAPI } from '../../../../config/api'
import style from '../userlist/UserList.module.css'
async function BlockUser(id, setCount, count) {
    console.log(id)
    try {
        const res = await patchAPI('/user/update-user-info/' + id, { 'active': false })
        setCount(count + 1)
    } catch (err) {
        console.log(err);
    }
}
async function UnblockUser(id, setCount, count) {
    console.log(id)
    try {
        const res = await patchAPI('/user/update-user-info/' + id, { 'active': true })
        setCount(count + 1)
    } catch (err) {
        console.log(err);
    }
}
function Active(props) {
    return (
        <div>
            <button className={style.Option_Active}>Send Message</button>
            <button className={style.Option_Active} onClick={() => { BlockUser(props.id, props.setCount, props.count) }}>Block</button>
        </div>
    )
}

function Block(props) {
    return (
        <div>
            <button className={style.Option_Block} onClick={() => { UnblockUser(props.id, props.setCount, props.count) }}>UnBlock</button>
        </div>

    )
}
function UserList(props) {
    const [data, setData] = useState([])
    const [dataPagination, setdataPagination] = useState([])
    useEffect(() => {
        const newdata = [];
        for (let i = 0; i < props.newListdata.length; i++) {
            if (props.newListdata[i].status == 'true') {
                newdata.push(props.newListdata[i]);
            }
        }
        for (let i = 0; i < props.newListdata.length; i++) {
            if (props.newListdata[i].status === 'false') {
                newdata.push(props.newListdata[i]);
            }
        }
        if (props.Userstatus.length === 0) {
            setdataPagination(newdata.slice(props.start, props.start + 5))
        } else {
            setdataPagination(newdata.filter((value) => value.status === props.Userstatus).slice(props.start, props.start + 5))
        }
    }, [props.newListdata, props.start])
    return (
        <div className={style.Userlist}>
            {dataPagination.map((value, index) => {
                return <div className={style.ShowUserdata}>
                    <div className={style.ListUserProfile}>
                        <div className={style.User_ProfileLeft}>
                            <img src={value.avatar} alt="" />
                            <h4>
                                {value.name}
                            </h4>
                        </div>
                        <div className={style.UserID}>
                            <h4 className={style.UserIDtext}>
                                <span style={{ fontWeight: '400', color: 'black', fontSize: '15px' }}>Trạng Thái : </span>
                                {value.status === 'true' ? 'active' : 'block'}
                            </h4>

                        </div>
                    </div>
                    <div className={style.SetUserOptions}>
                        <div className={style.Time_UserStart}>
                            <span>Date Join :</span>{value.timestart}
                        </div>
                        <div className={style.Options}>
                            {value.status == 'true' ? <Active id={value.Userid} newdata={props.newListdata} setnewListdata={props.setnewListdata} count={props.count} setCount={props.setCount} /> : null}
                            {value.status == "false" ? <Block UnblockUser={UnblockUser} id={value.Userid} newdata={props.newListdata} setnewListdata={props.setnewListdata} count={props.count} setCount={props.setCount} /> : null}
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default UserList