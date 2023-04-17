import { FC } from "react";
export interface IProveedor {
  _id: string;
  nombre: string;
  identidad: string;
  ciudad: string;
  precio: string;
  created?: string;
  updated?: string;
}

export interface IProveedoresUXProps {
  proveedores: any[];
  isLoading: boolean;
  error: string;
  onViewProveedorClick: (id: string) => void;
  onAddClick: () => void;
}

export const ProveedoresUX: FC<IProveedoresUXProps> = ({
  proveedores,
  isLoading,
  error,
  onViewProveedorClick,
  onAddClick,
}) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <h3><a onClick={onAddClick}>Nuevo</a></h3>
      {proveedores && proveedores.map((proveedor:IProveedor) => (
        <ProveedorUX
          key={proveedor._id}
          _id={proveedor._id}
          nombre={proveedor.nombre}
          identidad={proveedor.identidad}
          ciudad={proveedor.ciudad}
          onViewProveedorClick={function (id: string): void {
            onViewProveedorClick(id);
          }}
        />
      ))}
    </>
  );
};
export interface IProveedorUXProps {
  _id: string;
  nombre: string;
  identidad: string;
  ciudad: string;
  onViewProveedorClick: (id: string) => void;
}
export const ProveedorUX: FC<IProveedorUXProps> = ({
  _id,
  nombre,
  identidad,
  ciudad,
  onViewProveedorClick,
}) => {
  return (
    <div
      data-id={_id}
      onClick={() => {
        onViewProveedorClick(_id);
      }}
    >
      <a>{nombre} {identidad} {ciudad}</a>
    </div>
  );
};
