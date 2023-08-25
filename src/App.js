import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";

export function Layout() {
  return (
    <nav className="container-fluid p-3 Bgo text-white text-center row">
      <img src={"bkg cooksuki.jpg"} alt="Logo" className="photo rounded-circle" />
      <NavLink
        to="/"
        className="link px-2 col-sm-2 mt-3 Editfo siligon"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าหลัก
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2 col-sm-1 mt-3 Editfo siligon"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

export function Footer() {
  return (
    <div class="container-fluid Bgo p-3 mt-5 text-center">
      <nav class="row">
        <div className="col-sm-2 mt-2">
          <h3 className="Editfo siligon01">@ 2023</h3>
        </div>
        <div className="col-sm-3 mt-2 siligon02">
          <h3 className="Editfo siligon02">ผู้จัดทำ : Titirat Khunsap.</h3>
        </div>
        <div class="col-sm-5 ">
          <></>
        </div>
        <div className="col-sm-2 mt-2 siligon02">
          <h3 className="Editfo">Back to top</h3>
        </div>
      </nav>
    </div>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div class="container mt-5">
        <div class="row">
          <div className="polygon col-sm-12 p-2 text-center">
            <h3>วิธีทำอาหารญี่ปุ่นยอดฮิต</h3>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={"tongkatsu.jpg"}
              alt="ข้าวหมูทอดคัตสึด้ง"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ข้าวหมูทอดคัตสึด้ง</h3>
            <p className="Lumideim p-2">
            ข้าวหมูทอด สไตล์ญี่ปุ่น ที่มีความแตกต่างจาก ข้าวหน้าหมูทงคัตสึ ตรงที่ 
            หมูทอดนั้น จะถูกนำไปตุ๋นรวมกับไข่ แล้วราดลงบนข้าวอีกทีหนึ่ง ทำให้เป็น
             เมนูอาหารญี่ปุ่น ที่ได้รสชาติของซุปไข่ กินแล้วไม่ฝืด ลื่นคอกำลังดี
            </p>
            <button type="button" class="button btn btn-secondary Alumineam">
              ดูวิธีทำ
            </button>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={"ramen.jpg"}
              alt="ราเมนหมูชาชู"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ราเมนหมูชาชู</h3>
            <p className="Lumideim p-2">
              ราเมน เมนูอาหารญี่ปุ่น แบบเส้น ที่คนไทยหลายคนชื่นชอบ
              ไม่แพ้การกินก๋วยเตี๋ยวแบบจีน เพราะให้รสชาติของน้ำซุปที่เข้มข้น
              แถมเส้นยังหนานุ่ม ยิ่งกินกับหมูชาชูสูตร ยิ่งอร่อย
              ซึ่งถ้าหากใครอยากทำทานเองที่บ้าน ไม่ต้องไปกินที่ร้าน ชามละ 200 –
              300 บาท แล้วละก็ ทำตามสูตรนี้ได้เลย รับรองว่า อร่อยไม่แพ้กัน
            </p>
            <button type="button" class="button btn btn-secondary Alumineam">
              ดูวิธีทำ
            </button>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={"takoyakii.jpg"}
              alt="ทาโกะยากิ"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ทาโกะยากิ</h3>
            <p className="Lumideim p-2">
            ทาโกะยากิ ไส้ปลาหมึก เป็น เมนูอาหารญี่ปุ่น ที่นิยมมาก ๆ ในโอซาก้า
             ซึ่งสูตรดั้งเดิมนั้น ปลาหมึกที่ใช้ ต้องเป็นปลาหมึกทาโกะ หรือ ปลาหมึกยักษ์ญี่ปุ่น 
              และ ใช้เฉพาะส่วนหนวด มาทำเป็นไส้ ซึ่งถ้าหากใครอยากทำตาม 
              ก็อาจต้องลงทุนกันสักหน่อย เพราะปลาหมึกชนิดนี้ ค่อนข้างมีราคาแพงไม่น้อยเลยทีเดียว
            </p>
            <button type="button" class="button btn btn-secondary Alumineam">
              ดูวิธีทำ
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/65114340400-midterm/">
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
