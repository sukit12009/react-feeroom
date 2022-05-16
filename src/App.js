import React from 'react';
import './App.css';

function App() {
  // ราคาต่อหน่วย(บาท) ไฟ กับน้ำ
  const unitTranferBath = [
    7,
    16,
  ];
  // ค่าขยะ
  const bin = 20;
  // ค่าห้อง
  const fee = [
    1100,
    1100,
    1100,
    1200,
    1200,
    1100,
    1200,
    1200,
  ]
  // หน่วยไฟเดือนที่แล้ว
  const unitFireOld = [
    839,
    882,
    4596,
    335,
    531,
    4061,
    1976,
    2096,
  ];
  // หน่วยน้ำเดือนที่แล้ว
  const unitWaterOld = [
    54,
    890,
    211,
  ];
  // หน่วยไฟเดือนนี้
  const unitFireNew = [
    871,
    882,
    4651,
    404,
    630,
    4147,
    1985,
    2099,
  ];
  // หน่วยน้ำเดือนนี้
  const unitWaterNew = [
    55,
    890,
    213,
  ];

  const arrayDta = [];
  for (let i = 0; i < 8; i++) {
    if (i < 3) {
      arrayDta.push({
        "name": `ห้องที่ ${i + 1}`,
        "fee": fee[i],
        "bin": bin,
        "fireOld": unitFireOld[i],
        "fireNew": unitFireNew[i],
        "waterOld": unitWaterOld[i],
        "waterNew": unitWaterNew[i],
        "sum": fee[i] + bin + ((unitFireNew[i] - unitFireOld[i]) * unitTranferBath[0]) + ((unitWaterNew[i] - unitWaterOld[i]) * unitTranferBath[1])
      });
    } else {
      arrayDta.push({
        "name": `ห้องที่ ${i + 1}`,
        "fee": fee[i],
        "bin": bin,
        "fireOld": unitFireOld[i],
        "fireNew": unitFireNew[i],
        "sum": fee[i] + bin + ((unitFireNew[i] - unitFireOld[i]) * unitTranferBath[0])
      });
    }
  }

  let sumAll = 0;
  arrayDta.forEach((room) => {
    sumAll += room.sum;
  });
  return (
    <div>
      <div style={{ "margin": "40px 0 0 100px" }}>
        {arrayDta.map((room, index) => (
          <div key={index}>
            {(index < 3) ? (
              <div>{room.name} ค่าห้อง {room.fee} บาท ค่าขยะ {room.bin} บาท
          ค่าไฟ {room.fireOld}-{room.fireNew}={room.fireNew - room.fireOld}({(room.fireNew - room.fireOld) * unitTranferBath[0]} บ.)
           ค่าน้ำ {room.waterOld}-{room.waterNew}={room.waterNew - room.waterOld}({(room.waterNew - room.waterOld) * unitTranferBath[1]} บ.)
                <br /> </div>)
              : (
                <div> {room.name} ค่าห้อง {room.fee} บาท ค่าขยะ {room.bin} บาท
          ค่าไฟ {room.fireOld}-{room.fireNew}={room.fireNew - room.fireOld}({(room.fireNew - room.fireOld) * unitTranferBath[0]} บ.) </div>)}
          รวม {room.sum} บาท
            <br /><br />
          </div>
        ))}
      </div>
      <div style={{ "margin": "0 0 0 100px", "fontWeight": "bold" }}>
        <u>
          ค่าห้องทั้งหมดเท่ากับ {sumAll-1120}
        </u>
      </div>
    </div>
  );
}

export default App;