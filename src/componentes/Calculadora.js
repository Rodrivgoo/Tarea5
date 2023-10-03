import React, { useEffect, useState } from "react";
import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";//importacion biblioteca react-bootstrap
import { NavLink } from "react-router-dom";//importacion de navLink para rutas

const Calculadora = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState("-");
    const calculate = () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let calculatedResult;
    
        switch (operation) {
          case 'add':
            calculatedResult = number1 + number2;
            break;
          case 'subtract':
            calculatedResult = number1 - number2;
            break;
          case 'multiply':
            calculatedResult = number1 * number2;
            break;
          case 'divide':
            if (number2 !== 0) {
              calculatedResult = number1 / number2;
            } else {
              calculatedResult = 'Error: División por cero';
            }
            break;
          default:
            calculatedResult = 'Operación no válida';
            break;
        }
    
        setResult(calculatedResult);
      };
    return(
        <> 
    <div className="container mt-5">
      <h1 className="text-center">Calculadora</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="num1">Número 1:</label>
            <input
              type="number"
              className="form-control"
              id="num1"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="num2">Número 2:</label>
            <input
              type="number"
              className="form-control"
              id="num2"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="operation">Operación:</label>
            <select
              className="form-control"
              id="operation"
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="add">Sumar</option>
              <option value="subtract">Restar</option>
              <option value="multiply">Multiplicar</option>
              <option value="divide">Dividir</option>
            </select>
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={calculate}
          >
            Calcular
          </button>
          <div className="mt-3">
            <h5>Resultado:</h5>
            <p id="result">{result}</p>
          </div>
        </div>
      </div>
    </div>
</>

);
}

export default Calculadora