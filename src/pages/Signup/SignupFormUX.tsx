import { FC } from "react";
import Page from "../../components/Page";
import { Field, FieldSelect } from "../../components/InputField";
import { PrimaryButton } from "../../components/Buttons";
import ErrorField from "@/components/ErrorField";

interface INuevoUsuario {
  email: string;
  password: string;
  passwordError?: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickHandler: () => void;
}
export const SignUpFormUX: FC<INuevoUsuario> = ({
  email,
  password,
  passwordError,
  onChangeHandler,
  onClickHandler
}) => {
  return (
    <Page useAbsoluteCenter={true} pageTitle="Signup">
      <div className="signup-ux">
        <h1>Nueva Cuenta</h1>
      <Field
          name="email"
          id="email"
          type="email"
          labelText="Correo Electrónico"
          placeholder="Ingrese el correo a registrar"
          onChange={onChangeHandler}
          value={email}
        />
        <Field
          name="password"
          id="password"
          type="password"
          labelText="Contraseña"
          placeholder="Contraseña"
          onChange={onChangeHandler}
          value={password}
        />
        {passwordError && <ErrorField>{passwordError}</ErrorField>}
        <PrimaryButton
          onClick={onClickHandler}
        >Crear Cuenta
        </PrimaryButton>
      </div>
    </Page>
  );
};
