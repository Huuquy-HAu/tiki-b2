import React from 'react'

function Test() {
  return (
    <div>
  <div className="container_">
                <div className="section-address">
                    <div className="address__border-top"></div>
                    <div className="address-top">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span className="address-title">Địa chỉ nhận hàng</span>
                    </div>
                    <div className="address-inner">
                        <div className="address-user">
                            {/* <div>{userInfo.name}</div> */}
                        <div>{userPage.username}</div>
                            <div>{userPage.phone}</div>
                        </div>

                        <div>{userPage.address}</div>

                        <span className="address-default">Mặc định</span>

                        {/* Change infomation */}
                        <div>
                            <Button variant="outlined" onClick={handleClickOpen} style ={{display:'none'}}>
                           
                            </Button>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
                                    <Button onClick={handleClose} style={{ color: 'red' }}>
                                        ĐÓNG
                                    </Button>
                                </DialogActions>

                                <DialogContent>
                                    <TextField
                                        classes={{ color: 'red' }}
                                        margin="dense"
                                        id="name"
                                        label="Name"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        defaultValue={userPage.username}
                                        onChange={(e) => handleEditInfo(e, 'name')}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="phone"
                                        label="Phone"
                                        type="phone"
                                        fullWidth
                                        variant="outlined"
                                        defaultValue={userPage.phone}
                                        onChange={(e) => handleEditInfo(e, 'phone')}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="address"
                                        label="Address"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        defaultValue={userPage.address}
                                        onChange={(e) => handleEditInfo(e, 'address')}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCancel} style={{ color: 'gray' }}>
                                        HỦY BỎ
                                    </Button>
                                    <Button onClick={handleSubmit}>ĐỒNG Ý</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default Test