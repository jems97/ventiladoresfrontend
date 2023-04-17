import Page from "@/components/Page";
import { ProveedoresUX } from "./ProveedoresUX";
import { ProveedorFormUX } from "./ProveedorFormUX";
import { FC, useState } from "react";
import { useGetAllQuery, useAddNewMutation, useGetByIdQuery, useDeleteMutation, useUpdateMutation } from "@/store/services/provServices";
import { useNavigate, useParams } from "react-router-dom";
import Field from "@/components/InputField/Field";
import { PrimaryButton } from "@/components/Buttons";

export const Proveedores: FC = () => {
  const { data: proveedores, isLoading, error } = useGetAllQuery([]);
  const navigate = useNavigate();
  return (
    <Page pageTitle="Proveedor">
      <h1>Proveedores</h1>
      <ProveedoresUX
        proveedores={proveedores}
        isLoading={isLoading}
        error={error?.toString() || ""}
        onViewProveedorClick={(id: string): void => {
          navigate(`/proveedores/${id}`);
        }}
        onAddClick={(): void => {
          navigate(`/proveedores/new`);
        }}
      />
    </Page>
  );
};

export const ProveedorForm: FC = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [identidad, setIdentidad] = useState("");
  const [ciudad, setciudad] = useState("");
  const [newProveedor] = useAddNewMutation();
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
        case "nombre":
        setNombre(value);
        break;
        case "identidad":
        setIdentidad(value);
        break;
        case "ciudad":
        setciudad(value);
        break;
        default:
        break;
    }
  };
  const onClickHandler = async ()=>{
    const result = await newProveedor({nombre,identidad,ciudad}).unwrap();
    console.log(result);
    navigate("/proveedores");
  }
  return <ProveedorFormUX
    nombre={nombre}
    identidad={identidad}
    ciudad={ciudad}
    onChangeHandler={onChangeHandler}
    onClickHandler={onClickHandler}
  />;
};

export const ProveedorView: FC = () => {
  const { id = '' } = useParams();
  const {data: proveedor, isLoading, error} = useGetByIdQuery(id);
  let viewid = "ID: " + id;
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [identidad, setIdentidad] = useState("");
  const [ciudad, setciudad] = useState("");
  const [updCiudad] = useUpdateMutation();
  const [delCiudad] = useDeleteMutation();


  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
        case "nombre":
        setNombre(value);
        break;
        case "identidad":
        setIdentidad(value);
        break;
        case "ciudad":
        setciudad(value);
        break;
        default:
        break;
    }
  };

  const onClickHandler = async () => {
    const result = await updCiudad({id, nombre, identidad, ciudad }).unwrap();
    console.log(result);
    navigate("/proveedores");
  }
  const onClickDelHandler = async () => {
    const result = await delCiudad(id);
    console.log(result);
    navigate("/proveedores");
  }

  return (
    <Page pageTitle={viewid}>
    {isLoading && <div>Loading...</div>}
    {error && <div>{error?.toString() || ''}</div>}
    {proveedor && 
    <div>
      <Field
          name="nombre"
          id="nombre"
          type="text"
          labelText="Nombre"
          placeholder={proveedor.nombre}
          onChange={onChangeHandler}
          value={nombre}
        />
        <Field
          name="identidad"
          id="identidad"
          type="text"
          labelText="Identidad"
          placeholder={proveedor.identidad}
          onChange={onChangeHandler}
          value={identidad}
        />
        <Field
          name="ciudad"
          id="ciudad"
          type="text"
          labelText="Ciudad"
          placeholder={proveedor.ciudad}
          onChange={onChangeHandler}
          value={ciudad}
        />
        <PrimaryButton
          onClick={onClickHandler}
        >Actualizar
        </PrimaryButton>
        <PrimaryButton
          onClick={onClickDelHandler}
        >Eliminar
        </PrimaryButton>
      </div>}
    </Page>
  );
};
