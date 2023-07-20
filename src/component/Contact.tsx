import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Footer from "./Footer";
import "./contact.css";
// import AOS from "aos";

function Contact() {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  const Handleclick = (e) => {
    e.preventDefault();
    Swal.fire("ส่งข้อมูลแล้ว", "You clicked the button!", "success");
  };
  return (
    <div>
      <div className="container contact-container">
        <div className="col-md-12 text-center contact-header">
          <div data-aos="fade-up" data-aos-duration="2500">
            <h1>Contact me</h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-5">
            <div data-aos="fade-right" data-aos-duration="2500">
              <div className="card contact-card">
                <div className="contact-at">
                  <FontAwesomeIcon
                    className="contact-icon"
                    icon={faLocationDot}
                  />
                  <h5>Address:</h5>
                  <p className="ph">
                    J.d mansion ,เจ็ดยอด-อยู่เย็น ซอย 8,ตำบลช้างเผือก
                    อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ 50300
                  </p>
                </div>
                <div className="contact-form">
                  <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                  <h5>Email:</h5>
                  <p>newza_8888@hotmail.com</p>
                </div>
                <div className="">
                  <FontAwesomeIcon className="contact-icon" icon={faPhone} />
                  <h5>Tel:</h5>
                  <p>061-2911750</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387086.34769587225!2d98.96301759999999!3d18.810672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a5ed9ff5443%3A0x8cff38870293602a!2z4Lit4Li44LiZ4Lii4Liy4Lij4Liq4LiH4LmJ4Liy4LiB4Lij4LmM4Lij4Liy4Liq4LiH4LiE4Li44LiZ4LmMIOC5gOC4lOC5iOC4reC4h-C4q-C4uOC4iuC5gOC4hOC4lOC4quC4peC5iOC4quC4seC4lOC4qOC4oeC4jeC4oeC4i-C5jOC4peC5gOC4p-C4suC4hOC4geC4quC4ouC4quC4suC4hOC4quC4ouC4h-C4peC4jeC4reC4sQ!5e0!3m2!1sth!2sth!4v1566916615919!5m2!1sth!2sth"
                  width="100%"
                  height="350"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-7 ">
            <div data-aos="fade-left" data-aos-duration="2500">
              <form className="card contact-card">
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
                        Email
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
                        เบอร์โทรศัพท์
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    หัวข้อ
                  </label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label "
                  >
                    รายละเอียด
                  </label>
                  <textarea className="form-control contact-textarea"></textarea>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
