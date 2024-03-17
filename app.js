const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <img src="https://img5.pic.in.th/file/secure-sv1/80703AC7-7F15-4EA4-BA5A-9007C89B0D01.jpeg" />
    <p>id: 65130695 And 65130127</p>
    <a href="/myresearch">MyResearch</a>
  `);
});

app.get("/myresearch", (req, res) => {
  res.send(`
  <p>name: Kittinun Roonsungneon AND Chongphob Srihu</p>
    <p>การทดสอบความสามารถในการจัดการ DOM เป็นขั้นตอนสำคัญในการพัฒนาแอปพลิเคชันเว็บ เนื่องจากการจัดการ DOM มีผลต่อประสิทธิภาพและประสิทธิภาพของแอปพลิเคชัน และมีผลต่อประสิทธิภาพการทำงานของ Frontend Frameworks ด้วยการทดสอบความสามารถในการจัดการ DOM ช่วยให้ผู้พัฒนาสามารถตรวจสอบความถูกต้องและประสิทธิภาพของโค้ดที่ใช้ในการจัดการ DOM 
    ได้อย่างมีประสิทธิภาพปัญหาที่เกี่ยวข้องที่สำคัญคือความแตกต่างในการจัดการ DOM ระหว่าง Frontend Frameworks ที่สามารถมีผลต่อประสิทธิภาพของแอปพลิเคชันและประสิทธิภาพในการทำงานของ Frontend Frameworks ด้วย
    </p>
  `)
})

app.get("/error", (req, res) => {
  process.exit(1);
});

app.listen(8080);
