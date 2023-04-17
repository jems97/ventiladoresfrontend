import { FC } from "react";
import Page from "../../components/Page";
import { Button, CircleButton, PrimaryButton } from "@/components/Buttons";
import { useNavigate } from "react-router-dom";
import './mhome.css'

export const Home: FC = () => {
  const navigate = useNavigate();
  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate((e.target as HTMLAnchorElement).getAttribute("href") || '');
  };

  return (
    <Page pageTitle="OnlyFans">
      <h1>Solo Ventiladores</h1>
      <p>¡Bienvenidos a Onlyfans! Descubre nuestra amplia selección de ventiladores de alta calidad para mantener cualquier
        ambiente caliente y cómodo. ¡Estamos aquí para ayudarte a encontrar el ventilador perfecto para tu satisfacción!</p>
      <div>
        <Button className="mhome"><a href="/ventiladores" onClick={onClickHandler}>Ventiladores</a></Button>
        <Button className="mhome"><a href="/proveedores" onClick={onClickHandler}>Proveedores</a></Button>
      </div>
    </Page>
  );
};
