import "./about.css";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div className="container about-container">
        <h1 className="about-h1">เกี่ยวกับ</h1>
        <div className="card about-detail">
          <p>
            เว็บไซต์นี้ได้ถูกพัฒนาขึ้นเพื่อการศึกษาในการใช้ Rest API
            ในการเรียกใช้บนเว็บไซต์ที่พัฒนาด้วย Framework React
            และใช้เครื่องมือต่างๆในการพัฒนา
            เพื่อให้สามารถนำไปต่อยอดและประยุกต์ใช้ในอนาคตได้
            การวางแบบเว็บไซต์หรือข้อมูลต่างๆนั้นได้มาจากเว็บไซต์ที่ใช้งานจริงเพื่อให้เว็บไซต์นี้ทันสมัยและเป็นไปตามเทรนด์ในยุคใหม่ของดิจิตอล
            การปรับเปลี่ยนเพื่อทำให้เว็บไซต์นี้ตามความทันสมัยสามารถดำเนินการเป็นไปตามเทคโนโลยีและเรื่องราวใหม่ๆ
            ในโลกออนไลน์เพื่อทำให้เว็บไซต์นี้เป็นที่น่าสนใจและนำไปใช้ในงานในอนาคตได้มากยิ่งขึ้น
            ผมก็กำลังพัฒนาตัวเองและฝึกสกิลในการทำเว็บไซต์ให้มีมากขึ้นเพื่อประสบความสำเร็จในอนาคต
            การพัฒนาตนเองเป็นสิ่งที่ดีและจำเป็นเพื่อเติบโตในสายอาชีพ
          </p>
        </div>
        <h1 className="about-h1">เครื่องมือ</h1>
        <div className="container">
          <div className="row about-row">
            <div className="item about-item col-lg-3 col-md-3 col-sm-6">
              <div className="card about-card">
                <img
                  className="img-fluid about-img"
                  src="/img/react.png"
                  alt=""
                />
              </div>
            </div>
            <div className="item about-item col-lg-3 col-md-6 col-sm-12">
              <div className="card about-card">
                <img
                  className="img-fluid about-img"
                  src="/img/vite.png"
                  alt=""
                />
              </div>
            </div>
            <div className="item about-item col-lg-3 col-md-6 col-sm-12">
              <div className="card about-card">
                <img className="img-fluid about-img" src="/img/js.png" alt="" />
              </div>
            </div>
            <div className="item about-item col-lg-3 col-md-6 col-sm-12">
              <div className="card about-card">
                <img className="img-fluid about-img" src="/img/ts.png" alt="" />
              </div>
            </div>
            <div className="item about-item col-lg-3 col-md-6 col-sm-12">
              <div className="card about-card">
                <img
                  className="img-fluid about-img"
                  src="/img/bootstrap.png"
                  alt=""
                />
              </div>
            </div>
            <div className="item about-item col-lg-3 col-md-6 col-sm-12">
              <div className="card about-card">
                <img
                  className="img-fluid about-img"
                  src="/img/swiper.png"
                  alt=""
                />
              </div>
            </div>
            <div className="item about-item col-lg-3 col-md-6 col-sm-12">
              <div className="card about-card">
                <img
                  className="img-fluid about-img"
                  src="/img/aos2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="item about-item col-lg-3 col-md-6 col-sm-12">
              <div className="card about-card">
                <img
                  className="img-fluid about-img"
                  src="/img/vercel.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
