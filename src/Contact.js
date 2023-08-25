import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./App";

function Contact() {
  return (
    <>
        <Layout/>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="feed cat" emoji="😺" color="orange" />
      <Skill skill="raeder" emoji="🕶" color="skyblue" />
      <Skill skill="dancer" emoji=" 💃🏻" color="yellow" />
      <Skill skill="english" emoji="👩🏼‍🦱" color="lime" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นางสาวธิติรัตน์ ขึ้นทรัพย์</h1>
      <p>
        นักศึกษาคณะวิทยาศาสตร์ สาขาการสื่อสารและเทคโนโลยี เป็นคนนอนเยอะ
        ชอบฟังเพลงมากๆ สามารถฟังเพลงได้ตลอดเวลา
        ถ้าวันไหนไม่ได้ฟังเพลงจะรู้สึกว่าวันนั้นขาดอะไรไป ชอบของอร่อยๆ
        ชอบอ่านฟิคใน ao3 cat people ในอนาคตอยากป็นคนว่างงานที่ร่ำรวย
      </p>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="MyProfile.jpg" alt="My Avatar"></img>;
}

export default Contact;
