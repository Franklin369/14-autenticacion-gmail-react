import { useEffect } from "react";
import styled from "styled-components";
import astronauta from "../assets/astronauta.png";
import logogoogle from "../assets/logoogle.png";
import {UserAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
export function Login() {
  const navigate = useNavigate();
  const {user,googleSignIn} = UserAuth();
  const iniciarSesion=async()=>{
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
if(user!=null){
  navigate("/")
}
  },[user])
  return (
    <Container>
      <section className="imgseccion">
        <h1>useContext REACT es cool</h1>
        <div className="fondocontent">
          <img src={astronauta} />
        </div>
        <h4>Hola soy el login</h4>
      </section>
      <section className="panelsesion">
        <h2>Iniciar sesión</h2>

        <button onClick={iniciarSesion}   className="btniniciar">
          <img src={logogoogle} />
          <span> Iniciar con Gmail</span>
        </button>
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
  background: radial-gradient(#fedd58, #ff4139);
  flex-direction: column-reverse;
  width: 100vw;

  .imgseccion {
    background-color: white;

    border-radius: 15px;
    padding: 20px;

    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 35px;
    margin-top: 20px;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.12);
    h1 {
      font-size: 35px;
      font-weight: 650;
    }
    h4 {
      color: #aaaaaa;
    }
    .fondocontent {
      display: flex;
      justify-content: center;
      img {
        width: 50%;
        -webkit-animation: flotar 3s ease-in-out infinite;
        animation: flotar 3s ease-in-out infinite;
      }
    }
  }

  .panelsesion {
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      color: white;
      text-align: center;
      font-weight: 600;
      font-size: 52px;
    }
    .btniniciar {
      display: flex;
      align-items: center;
      gap: 12px;
      border-style: none;

      img {
        width: 30px;
      }
      background-color: white;

      padding: 15px 30px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 22px;

      transition: all 0.25s ease;
      box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.12);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 20px 40px 0px rgb(0 0 0 / 10%);
        cursor: pointer;
      }
      span {
        opacity: 0.8;
      }
    }
    .social {
      gap: 20px;
      display: flex;
      justify-content: center;
      align-content: space-between;
      color: white;
      font-size: 30px;
      position: relative;
      bottom: 0;

      .icons:hover {
        transform: translateY(10px);
        transition: all 0.5s;
      }
    }
  }
  @media (min-width: 64em) {
    flex-direction: row;
    .imgseccion {
      margin-top: 0;
      width: 50%;
    }
    .panelsesion {
      width: 50%;
    }
  }
  @media (max-width: 48em) {
    .imgseccion {
      .fondocontent {
        img {
          /* width: 80%; */
        }
      }
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 20px);
    }
    100% {
      transform: translate(0, 0px);
    }
  }
`;
