import { FC } from "react";

import Page from "../../components/Page";
import { Field, FieldSelect } from "../../components/InputField";
import { PrimaryButton } from "../../components/Buttons";
interface IVentiladoresFormUXProps {
  marca: string;
  modelo: string;
  rpm: string;
  precio: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickHandler: () => void;
}
export const VentiladorFormUX: FC<IVentiladoresFormUXProps> = ({
  marca,
  modelo,
  rpm,
  precio,
  onChangeHandler,
  onClickHandler
}) => {
  return (
    <Page useAbsoluteCenter={true} pageTitle="Nuevo Ventilador">
      <div className="login-ux">
        <Field
          name="marca"
          id="marca"
          type="text"
          labelText="Marca"
          placeholder="Nombre de la marca"
          onChange={onChangeHandler}
          value={marca}
        />
        <Field
          name="modelo"
          id="modelo"
          type="text"
          labelText="Modelo"
          placeholder="Nombre del Modelo"
          onChange={onChangeHandler}
          value={modelo}
        />
        <Field
          name="rpm"
          id="rpm"
          type="text"
          labelText="Rpm"
          placeholder="Rpm"
          onChange={onChangeHandler}
          value={rpm}
        />
        <Field
          name="precio"
          id="precio"
          type="text"
          labelText="Precio"
          placeholder="Precio"
          onChange={onChangeHandler}
          value={precio}
        />

        <PrimaryButton
          onClick={onClickHandler}
        >Crear Ventilador
        </PrimaryButton>
      </div>
    </Page>
  );
};
