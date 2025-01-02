import "./Footer.css";
import FooterDetal from "./FooterDetal";
import FooterLink from "./FooterLink";
import FooterReDetal from "./FooterReDetal";

import Icon from "./Icon";
import {
  listIcon,
  listIcon2,
  listicon3,
  listIcon4,
  listIconConect,
} from "./icon1";

import TotaFooter from "./subFooter";
function Footer() {
  return (
    <div className="Wrapper_footer">
      <div className="Footer">
        <TotaFooter title={"Hỗ trợ khách hàng"}>
          <FooterDetal
            href="#"
            title1="Hotline: "
            title2={<span>1900-6035</span>}
            title3="(1000 đ/phút, 8-21h kể cả T7, CN)"
          />
          <FooterLink href="#" title="Các câu hỏi thường gặp" />
          <FooterLink href="#" title="Gửi yêu cầu hỗ trợ" />
          <FooterLink href="#" title="Hướng dẫn đặt hàng" />
          <FooterLink href="#" title="Phương thức vận chuyển" />
          <FooterLink href="#" title="Chính sách đổi trả" />
          <FooterLink href="#" title="Hướng dẫn trả góp" />
          <FooterLink href="#" title="Chính sách hàng nhập khẩu" />
          <FooterDetal
            href="#"
            title1="Hỗ trợ khách hàng: "
            title2="hotro@tiki.vn"
          />
          <FooterDetal
            href="#"
            title1="Báo lỗi bảo mật: "
            title2="security@tiki.vn"
          />
        </TotaFooter>
        <TotaFooter title={"Về Tiki"}>
          <FooterLink href="#" title="Giới thiệu Tiki" />
          <FooterLink href="#" title="Tuyển dụng" />
          <FooterLink href="#" title="Chính sách bảo mật thanh toán" />
          <FooterLink href="#" title="Chính sách bảo mật thông tin cá nhân" />
          <FooterLink href="#" title="Chính sách giải quyết khiếu nại" />
          <FooterLink href="#" title="Điều khoản sử dụng" />
          <FooterLink href="#" title="Giới thiệu Tiki Xu" />
          <FooterLink href="#" title="Tiếp thị liên kết cùng Tiki" />
          <FooterLink href="#" title="Bán hàng doanh nghiệp" />
          <FooterLink href="#" title="Điều kiện vận chuyển" />
        </TotaFooter>
        <TotaFooter title={"Hợp tác và liên kết"}>
          <FooterLink href="#" title="Quy chế hoạt động Sàn GDTMĐT" />
          <FooterLink href="#" title="Bán hàng cùng Tiki" />
          <FooterReDetal title="Chứng nhận bởi">
            {listicon3.map(function (icon) {
              return <Icon Icon={icon} />;
            })}
          </FooterReDetal>
        </TotaFooter>
        <TotaFooter title={"Phương thức thanh toán"}>
          <div className="Footer-listIcon">
            {listIcon.map(function (icon) {
              return <Icon Icon={icon} />;
            })}
          </div>
          {/* <div dangerouslySetInnerHTML={{ __html: listIcon[8] }} /> */}
          <FooterReDetal title="Dịch vụ giao hàng">
            {listIcon2.map(function (icon) {
              return <Icon Icon={icon} />;
            })}
          </FooterReDetal>
        </TotaFooter>
        <TotaFooter title={"Kết nối với chúng tôi"}>
          <div>
            {listIconConect.map(function (icon) {
              return <Icon Icon={icon} />;
            })}
          </div>
          <FooterReDetal title="Tải ứng dụng trên điện thoại">
            <div className="Footer-FooterReDetal-icon">
              <Icon Icon={listIcon4[0]} />
              <div className="list-icon">
                <Icon Icon={listIcon4[1]} />
                <Icon Icon={listIcon4[2]} />
              </div>
            </div>
          </FooterReDetal>
        </TotaFooter>
      </div>
    </div>
  );
}
export default Footer;
