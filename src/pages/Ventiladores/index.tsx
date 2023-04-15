import Page from "@/components/Page";
import { VentiladoresUX } from "./VentiladoresUX";
import { VentiladorFormUX } from "./VentiladorFormUX";
import { FC, useState } from "react";
import { useGetAllQuery, useAddNewMutation, useGetByIdQuery } from "@/store/services/empServices";
import { useNavigate, useParams } from "react-router-dom";

export const Ventiladores: FC = () => {
  const { data: ventiladores, isLoading, error } = useGetAllQuery([]);
  const navigate = useNavigate();
  return (
    <Page>
      <h1>Ventiladores</h1>
      <VentiladoresUX
        ventiladores={ventiladores}
        isLoading={isLoading}
        error={error?.toString() || ""}
        onViewVentiladorClick={(id: string): void => {
          navigate(`/ventiladores/${id}`);
        }}
        onAddClick={(): void => {
          navigate(`/ventiladores/new`);
        }}
      />
    </Page>
  );
};

export const VentiladorForm: FC = () => {
  const navigate = useNavigate();
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [rpm, setRpm] = useState("");
  const [precio, setPrecio] = useState("");
  const [newVentilador] = useAddNewMutation();
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
        case "marca":
        setMarca(value);
        break;
        case "modelo":
        setModelo(value);
        break;
        case "modelo":
        setModelo(value);
        break;
        case "rpm":
        setRpm(value);
        break;
        case "precio":
        setPrecio(value);
        break;
        default:
        break;
    }
  };
  const onClickHandler = async ()=>{
    const result = await newVentilador({marca,modelo,rpm,precio}).unwrap();
    console.log(result);
    navigate("/ventiladores");
  }
  return <VentiladorFormUX
    modelo={modelo}
    marca={marca}
    rpm={rpm}
    precio={precio}
    onChangeHandler={onChangeHandler}
    onClickHandler={onClickHandler}
  />;
};

export const VentiladorView: FC = () => {
  const { id = '' } = useParams();
  const {data: ventilador, isLoading, error} = useGetByIdQuery(id);
  return (
    <>
    {isLoading && <div>Loading...</div>}
    {error && <div>{error?.toString() || ''}</div>}
    {ventilador && <div>{JSON.stringify(ventilador)}</div>}
    </>
  );
};
