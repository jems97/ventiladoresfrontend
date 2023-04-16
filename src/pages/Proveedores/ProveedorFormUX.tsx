import { FC } from "react";

import Page from "../../components/Page";
import { Field, FieldSelect } from "../../components/InputField";
import { PrimaryButton } from "../../components/Buttons";
interface IProveedoresFormUXProps {
  nombre: string;
  identidad: string;
  ciudad: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickHandler: () => void;
}
export const ProveedorFormUX: FC<IProveedoresFormUXProps> = ({
  nombre,
  identidad,
  ciudad,
  onChangeHandler,
  onClickHandler
}) => {
  return (
    <Page useAbsoluteCenter={true} pageTitle="Nuevo Proveedores">
      <div className="login-ux">
        <Field
          name="nombre"
          id="nombre"
          type="text"
          labelText="Nombre"
          placeholder="Escriba el nombre"
          onChange={onChangeHandler}
          value={nombre}
        />
        <Field
          name="identidad"
          id="identidad"
          type="text"
          labelText="Identidad"
          placeholder="Identidad del proveedor"
          onChange={onChangeHandler}
          value={identidad}
        />
        <Field
          name="ciudad"
          id="ciudad"
          type="text"
          labelText="Ciudad"
          placeholder="Ciudad"
          onChange={onChangeHandler}
          value={ciudad}
        />

        <PrimaryButton
          onClick={onClickHandler}
        >Crear Proveedor
        </PrimaryButton>
      </div>
    </Page>
  );
};
