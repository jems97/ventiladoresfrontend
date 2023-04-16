import { FC} from "react";
import Page from "../../components/Page";
import { Button, CircleButton, PrimaryButton } from "@/components/Buttons";
import { useNavigate } from "react-router-dom";
import './mhome.css'

export const Home: FC = () => {
  const navigate = useNavigate();
  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    navigate((e.target as HTMLAnchorElement).getAttribute("href")||'');
  };

  return (
    <Page pageTitle="OnlyFans">
      <h1>Solo Ventiladores</h1>
      <div>
      <Button className="mhome"><a href="/ventiladores" onClick={onClickHandler}>Ventiladores</a></Button>
      <Button className="mhome"><a href="/proveedores" onClick={onClickHandler}>Proveedores</a></Button>
      </div>
      
    </Page>
  );
};
