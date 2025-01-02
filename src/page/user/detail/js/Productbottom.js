import React from "react";

function Productbottom() {
  return (
    <div className="product-bottom">
      <h2>Thông tin chi tiết</h2>
      <div className="content has-table">
        <table>
          <tbody>
            <tr>
              <td>Chất liệu</td>
              <td>thun</td>
            </tr>
            <tr>
              <td>Xuất xứ</td>
              <td>Việt Nam</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>AOTHUNM001</td>
            </tr>
            <tr>
              <td>Kích thước</td>
              <td>
                <p>Size M(Từ 40-56 Kg)</p>
                <p>Size L(Từ 57-67 Kg)</p>
                <p>Size XL(Từ 68-76kg)</p>
                <p>Size XXL(Từ 77-87kg)</p>
              </td>
            </tr>
            <tr>
              <td>Xuất xứ thương hiệu</td>
              <td>Việt Nam</td>
            </tr>
            <tr>
              <td>Thương hiệu</td>
              <td>OEM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Productbottom;
