import React, { useEffect, useState } from 'react'
import style from '../shoplist/ShopList.module.css'
import { patchAPI } from '../../../../config/api'
async function BlockShop(id, newdata, listdata, setCount, count) {
    console.log(id)
    try {
        const res = await patchAPI('/shop/admin-change-shop-status/' + id, { 'status': 'closed' })
        setCount(count + 1)
    } catch (err) {
        console.log(err);
    }
}
async function UnblockShop(id, newdata, listdata, setCount, count) {
    console.log(id)
    try {
        const res = await patchAPI('/shop/admin-change-shop-status/' + id, { 'status': 'accepted' })
        setCount(count + 1)
    } catch (err) {
        console.log(err);
    }
}
async function RefuseShop(id, newdata, listdata, setCount, count) {
    console.log(id)
    try {
        const res = await patchAPI('/shop/admin-change-shop-status/' + id, { 'status': 'rejected' })
        setCount(count + 1)

    } catch (err) {
        console.log(err);
    }
}
async function AccepctShop(id, newdata, listdata, setCount, count) {
    console.log(id)
    try {
        await patchAPI('/shop/admin-change-shop-status/' + id, { "status": "accepted" })
        setCount(count + 1)
    } catch (err) {
        console.log(err);
    }
}
function Pending(props) {
    return (
        <div>
            <button className={style.Option_Pending} onClick={() => { props.AccepctShop(props.id, props.newdata, props.setnewListdata, props.setCount, props.count) }} >Accept</button>
            <button className={style.Option_Pending} onClick={() => { props.RefuseShop(props.id, props.newdata, props.setnewListdata, props.setCount, props.count) }} >Refuse</button>
        </div>
    )
}
function Stop(props) {
    return (
        <div>
            <button className={style.Option_Active} onClick={() => { AccepctShop(props.id, props.newdata, props.setnewListdata, props.setCount, props.count) }}>Open</button>
            <button className={style.Option_Active} onClick={() => { BlockShop(props.id, props.newdata, props.setnewListdata, props.setCount, props.count) }}>Closed</button>
        </div>
    )
}
function Active(props) {
    return (
        <div>
            <button className={style.Option_Active}>Send Message</button>
            <button className={style.Option_Active} onClick={() => { RefuseShop(props.id, props.newdata, props.setnewListdata, props.setCount, props.count) }}>Stop</button>
        </div>
    )
}
function Block(props) {
    return (
        <div>
            <button className={style.Option_Block} onClick={() => { UnblockShop(props.id, props.newdata, props.setnewListdata, props.setCount, props.count) }}>UnBlock</button>
        </div>

    )
}
function ShopList(props) {
    const [dataPagination, setdataPagination] = useState([])

    useEffect(() => {
        const newdata = [];
        for (let i = 0; i < props.newListdata.length; i++) {
            if (props.newListdata[i].status === 'pending') {
                newdata.push(props.newListdata[i]);
            }
        }
        for (let i = 0; i < props.newListdata.length; i++) {
            if (props.newListdata[i].status === 'accepted') {
                newdata.push(props.newListdata[i]);
            }
        }
        for (let i = 0; i < props.newListdata.length; i++) {
            if (props.newListdata[i].status === 'rejected') {
                newdata.push(props.newListdata[i]);
            }
        }
        for (let i = 0; i < props.newListdata.length; i++) {
            if (props.newListdata[i].status === 'closed') {
                newdata.push(props.newListdata[i]);
            }
        }
        if (props.Shopstatus.length === 0) {
            setdataPagination(newdata.slice(props.start, props.start + 5))
        } else {
            setdataPagination(newdata.filter((value) => value.status === props.Shopstatus).slice(props.start, props.start + 5))
        }
    }, [props.newListdata, props.start])

    return (
        <div className={style.Shoplist}>
            {dataPagination.map((value, index) => {
                return <div className={style.ShowShopdata}>
                    <div className={style.ListShopProfile}>
                        <div className={style.Shop_ProfileLeft}>
                            <img src={value.avatar} alt="" />
                            <h4>
                                {value.name}
                            </h4>
                        </div>
                        <div className={style.ShopID}>
                            <h4 className={style.ShopIDtext}>
                                <span style={{ fontWeight: '400', color: 'black' }}>Trạng Thái : </span>
                                {value.status}
                            </h4>

                        </div>
                    </div>
                    <div className={style.SetShopOptions}>
                        <div className={style.Time_ShopStart}>
                            <span>Applied on :</span>{value.timestart}
                        </div>
                        <div className={style.Options}>
                            {value.status === 'pending' ? <Pending AccepctShop={AccepctShop} id={value.Shopid} newdata={props.newListdata} setnewListdata={props.setnewListdata} RefuseShop={RefuseShop} count={props.count} setCount={props.setCount} /> : null}
                            {value.status === 'accepted' ? <Active id={value.Shopid} newdata={props.newListdata} setnewListdata={props.setnewListdata} setCount={props.setCount} count={props.count} /> : null}
                            {value.status === 'rejected' ? <Stop id={value.Shopid} newdata={props.newListdata} setnewListdata={props.setnewListdata} setCount={props.setCount} count={props.count} /> : null}
                            {value.status === 'closed' ? <Block UnblockShop={UnblockShop} id={value.Shopid} newdata={props.newListdata} setnewListdata={props.setnewListdata} setCount={props.setCount} count={props.count} /> : null}
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ShopList