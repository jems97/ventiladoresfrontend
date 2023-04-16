import { FC} from "react";
import Page from "../../components/Page";
import { Button } from "@/components/Buttons";

export const Home: FC = () => {
  function onClickHandler(event: MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Page pageTitle="OnlyFans">
      <h1>Solo Ventiladores</h1>
      <Button><a href="/ventiladores" onClick={onClickHandler}>Ventiladores</a></Button>
      <br></br>
      <br></br>
      <Button><a href="/proveedores" onClick={onClickHandler}>Proveedores</a></Button>
    </Page>
  );
};
