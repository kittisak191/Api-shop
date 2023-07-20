import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";
import "swiper/swiper-bundle.min.css";
import "./form.css";
import Footer from "./Footer";

function Form() {
  const Handleclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Swal.fire("ส่งข้อมูลแล้ว", "You clicked the button!", "success");
  };
  return (
    <div>
      <div className="container form-container">
        <h1 className="text-center from-h1">รายละเอียดการชำระเงิน</h1>
        <form action="" method="post">
          <div className="row">
            <div className="col-md-6 ">
              <div data-aos="fade-left" data-aos-duration="2500">
                <form className="card form-contact">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          ชื่อ
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          นามสกุล
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          เบอร์โทรศัพท์
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label "
                    >
                      ที่อยู่
                    </label>
                    <textarea className="form-control contact-textarea"></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      สลิปการโอนเงิน
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <img
                      className="img-fluid form-img"
                      src="/ship/qr.jpg"
                      alt=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark contact-submit"
                    onClick={Handleclick}
                  >
                    ส่งข้อมูล
                  </button>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card form-contactdetail">
                <h2>ช่องทางการติดต่อหรือต้องการสอบถามเลขพัสดุ</h2>
                <div className="d-flex flex-row">
                  <FontAwesomeIcon className="font-icon" icon={faEnvelope} />
                  <p>อีเมลส์: newza_8888@hotmail.com</p>
                </div>
                <div className="d-flex flex-row">
                  <FontAwesomeIcon className="font-icon" icon={faPhone} />
                  <p>เบอร์โทรศัพท์: 0612911750</p>
                </div>
                <div className="d-flex flex-row">
                  <FontAwesomeIcon className="font-icon" icon={faFacebook} />
                  <p>Facebook: กิตติศักดิ์ แก้ววิกา</p>
                </div>
                <div className="d-flex flex-row">
                  <FontAwesomeIcon className="font-icon" icon={faInstagram} />
                  <p>IG: newkittisakn</p>
                </div>
                <div className="d-flex flex-row">
                  <FontAwesomeIcon className="font-icon" icon={faLine} />
                  <p>line: @newza587</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Form;
