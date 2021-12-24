import React, { useEffect, useState } from 'react'
import BmiResult from '../bmiResult/BmiResult';
import Button from '../Button'
import "./BmiHesapla.css"


const BmiHesapla = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, SetBmi] = useState(null);
    const [status, setStatus] = useState(null);


    const calculateBmi = () => {
        const newBmi = Number((weight / (height / 100) ** 2).toFixed(2))
        SetBmi(newBmi);
        setHeight("")
        setWeight("")
        let bmiStatus = bmiResult(newBmi)
        setStatus(bmiStatus)
        localStorage.setItem("result", newBmi);
        localStorage.setItem("status", newBmi ? bmiStatus : "");
    }
    useEffect(() => {
        calculateBmi()
    }, [])


    const bmiResult = (bmi) => {
        if (bmi < 18.5) return "Zayıf";
        else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
        else if (bmi >= 25 && bmi < 29.9) return "Kilolu";
        else if (bmi >= 30 && bmi < 39.9) return "Şişman";
        else return "Aşırı Şişman";
    }

    return (
        <>
            <div className="hesapla">
                <div className="whHesapla">
                    <div className="weightValue">
                        <input className="weight yourValue"
                            type="number"
                            placeholder="Weight in kg..."
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        ></input>
                    </div>
                    <div className="weightValue">
                        <input className="height yourValue"
                            type="number"
                            placeholder="Height in cm..."
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        ></input>
                    </div>
                    <Button onClick={calculateBmi}>Hesapla</Button>
                </div>
                <div className="resultStatus">



                    <div className="result">{bmi ? bmi : ""}</div>
                    <div className="status">{bmi ? status : ""}</div>



                </div>


            </div>
            <div>
                {bmi ? <BmiResult status={status} /> : null}
            </div>
        </>
    )
}

export default BmiHesapla
