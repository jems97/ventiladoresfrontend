//import { setShowMenu, selectShowMenu } from "@store/Slices/appSlice";
//import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSec } from "@/store/slices/secSlice";
import { RootState } from "@/store/store";

import {FC} from 'react';
import {BiLogIn, BiLogOut, BiUserPlus, BiHomeCircle,BiCategory,BiBuilding,BiCalendarCheck } from 'react-icons/bi';
import "./Menu.css";

interface MenuProps {
  setShowMenu: (showMenu: boolean) => void;
  selectShowMenu: boolean;
  showMenu: boolean;
}

const Menu:FC<MenuProps> = ({setShowMenu, selectShowMenu, showMenu}) => {
  console.log(localStorage.getItem('token'));
  const token = localStorage.getItem('token');
  const user = token; //useSelector(selectAuth);
  //const showMenu = useSelector(selectShowMenu);
  //const dispatch = useDispatch();
  const classNames = showMenu ? "menu" : "menu hidden";
  const navigate = useNavigate();
  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    //dispatch(setShowMenu(!showMenu));
    setShowMenu(!showMenu);
    navigate((e.target as HTMLAnchorElement).getAttribute("href")||'');
  };
  if (!user) {
    return (
      <nav className={classNames}>
        <ul>
          <li>
            <a href="/login" onClick={(e)=>{}}>
              <BiLogIn />&nbsp;Iniciar Sesión
            </a>
          </li>
          <li>
            <a href="/signup" onClick={onClickHandler}>
              <BiUserPlus/>&nbsp;Crear Cuenta
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={classNames}>
        <ul>
          <li>
            <a href="/" onClick={onClickHandler}>
              <BiHomeCircle/>&nbsp;Home
            </a>
          </li>
          <li>
            <a href="/ventiladores" onClick={onClickHandler}>
              <BiCategory/>&nbsp;Ventilador
            </a>
          </li>
          <li>
            <a href="/proveedores" onClick={onClickHandler}>
              <BiCategory/>&nbsp;Proveedores
            </a>
          </li>
           <li>
            <a href="/version" onClick={onClickHandler}>
              <BiCalendarCheck/>&nbsp;Version
            </a>
          </li>
           <li>
            <a href="/about" onClick={onClickHandler}>
              <BiBuilding/>&nbsp;Acerca de nosotros
            </a>
          </li>
          <li>
            <a href="/logout" onClick={onClickHandler}>
              <BiLogOut/>&nbsp;Cerrar Sesion
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Menu;
