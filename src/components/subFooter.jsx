import React from "react";

function TotaFooter(props) {
  return (
    <div className="Footer-subFooter">
      <h4>{props.title}</h4>
      {props.children}
    </div>
  );
}

export default TotaFooter;
// export const footertiki = [

//   "Các câu hỏi thường gặp",
//   "Gửi yêu cầu hỗ trợ",
//   "Hướng dẫn đặt hàng",
//   "Phương thức vận chuyển",
//   "Chính sách đổi trả",
//   "Hướng dẫn trả góp",
//   "Chính sách hàng nhập khẩu",
//   "Hỗ trợ khách hàng: hotro@tiki.vn",

//   "Báo lỗi bảo mật: security@tiki.vn'",
// ];
