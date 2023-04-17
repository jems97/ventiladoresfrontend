import { FC } from "react";
export interface IVentilador {
  _id: string;
  marca: string;
  modelo: string;
  rpm: string;
  precio: string;
  created?: string;
  updated?: string;
}

export interface IVentiladoresUXProps {
  ventiladores: any[];
  isLoading: boolean;
  error: string;
  onViewVentiladorClick: (id: string) => void;
  onAddClick: () => void;
}

export const VentiladoresUX: FC<IVentiladoresUXProps> = ({
  ventiladores,
  isLoading,
  error,
  onViewVentiladorClick,
  onAddClick,
}) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <h3><a onClick={onAddClick}>Nuevo</a></h3>
      {ventiladores && ventiladores.map((ventilador:IVentilador) => (
        <VentiladorUX
          key={ventilador._id}
          _id={ventilador._id}
          marca={ventilador.marca}
          modelo={ventilador.modelo}
          rpm={ventilador.rpm}
          precio={ventilador.precio}
          onViewVentiladorClick={function (id: string): void {
            onViewVentiladorClick(id);
          }}
        />
      ))}
    </>
  );
};
export interface IVentiladorUXProps {
  _id: string;
  marca: string;
  modelo: string;
  rpm: string;
  precio: string;
  onViewVentiladorClick: (id: string) => void;
}
export const VentiladorUX: FC<IVentiladorUXProps> = ({
  _id,
  marca,
  modelo,
  rpm,
  precio,
  onViewVentiladorClick,
}) => {
  return (
    <div
      data-id={_id}
      onClick={() => {
        onViewVentiladorClick(_id);
      }}
    >
      <a>{marca} {modelo} {rpm} {precio}</a>
    </div>
  );
};
