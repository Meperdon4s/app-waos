import React, { useState, useEffect } from "react";

export function Reporte() {
  const [reportes, setReportes] = useState([]);
  const [reporteAEliminar, setReporteAEliminar] = useState("");
  const [showConfirmacion, setShowConfirmacion] = useState(false);
  const [reporteSeleccionado, setReporteSeleccionado] = useState({});
  const [decision, setDecision] = useState("");
  const [motivoSancion, setMotivoSancion] = useState("");

  useEffect(() => {
    const reportesFromDatabase = obtenerReportesDeBaseDeDatos();
    setReportes(reportesFromDatabase);
  }, []);

  const obtenerReportesDeBaseDeDatos = () => {
    return [
      {
        nombre: "Reporte 1",
        contenido: "Contenido del reporte 1",
        categoria: "Categoria 1",
        usuario: "Usuario A",
        editando: false,
        atendido: false,
      },
      {
        nombre: "Reporte 2",
        contenido: "Contenido del reporte 2",
        categoria: "Categoria 2",
        usuario: "Usuario B",
        editando: false,
        atendido: false,
      },
      {
        nombre: "Reporte 3",
        contenido: "Contenido del reporte 3",
        categoria: "Categoria 3",
        usuario: "Usuario C",
        editando: false,
        atendido: false,
      },
    ];
  };

  const handleEliminarReporte = (reporte) => {
    setReporteAEliminar(reporte);
    setShowConfirmacion(true);
  };

  const confirmarEliminar = () => {
    setReportes(reportes.filter((r) => r.nombre !== reporteAEliminar));
    setShowConfirmacion(false);
  };

  const handleEditarReporte = (nombre) => {
    setReportes(
      reportes.map((r) => {
        if (r.nombre === nombre) {
          return { ...r, editando: !r.editando };
        }
        return r;
      })
    );
  };

  const handleGuardarReporte = (nombre, contenido) => {
    setReportes(
      reportes.map((r) => {
        if (r.nombre === nombre) {
          return { ...r, contenido, editando: false };
        }
        return r;
      })
    );
  };

  const handleExaminarReporte = (reporte) => {
    setReporteSeleccionado(reporte);
  };

  const handleCloseDetalleReporte = () => {
    setReporteSeleccionado({});
    setMotivoSancion(""); // Limpiar el campo del motivo de la sanción al cerrar la ventana de detalles
  };

  const handleAceptarReporte = () => {
    const motivo = determinarMotivoSancion(reporteSeleccionado);
    setDecision("aceptado");
    setReportes(
      reportes.map((r) =>
        r.nombre === reporteSeleccionado.nombre
          ? { ...r, atendido: true, motivoSancion: motivo }
          : r
      )
    );
    handleCloseDetalleReporte();
  };

  const handleDenegarReporte = () => {
    const motivo = determinarMotivoSancion(reporteSeleccionado);
    setDecision("denegado");
    setReportes(
      reportes.map((r) =>
        r.nombre === reporteSeleccionado.nombre
          ? { ...r, atendido: false, motivoSancion: motivo }
          : r
      )
    );
    handleCloseDetalleReporte();
  };

  // Función para determinar el motivo de la sanción
  const determinarMotivoSancion = (reporte) => {
    // Aquí puedes implementar la lógica para determinar el motivo de la sanción
    // Basándote en la información del reporte, como la categoría, el contenido, etc.
    // Por ahora, simplemente devolvemos un motivo genérico
    return "Motivo genérico de sanción";
  };

  return (
    <div
      className="container-fluid py-4"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="row">
        <div className="col-lg-6">
          {/* Contenedor para los reportes */}
          <div className="row">
            {reportes.map((reporte, index) => (
              <div key={index} className="col-12">
                <div
                  className={`accordion-item mb-3 rounded border ${
                    reporte.atendido ? "bg-success" : "bg-danger"
                  }`}
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className={`accordion-header d-flex justify-content-between align-items-center bg-light p-3 rounded`}
                  >
                    <div>
                      <h2 className="accordion-title m-0">{reporte.nombre}</h2>
                      <p className="m-0">Categoría: {reporte.categoria}</p>
                      <p className="m-0">Usuario: {reporte.usuario}</p>
                    </div>
                    <div>
                      {!reporte.editando && (
                        <>
                          <button
                            type="button"
                            className="btn btn-primary me-2"
                            onClick={() => handleEditarReporte(reporte.nombre)}
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary me-2"
                            onClick={() => handleExaminarReporte(reporte)}
                          >
                            Examinar
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() =>
                              handleEliminarReporte(reporte.nombre)
                            }
                          >
                            Eliminar
                          </button>
                        </>
                      )}
                      {reporte.editando && (
                        <button
                          type="button"
                          className="btn btn-success me-2"
                          onClick={() =>
                            handleGuardarReporte(
                              reporte.nombre,
                              reporte.contenido
                            )
                          }
                        >
                          Guardar
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="accordion-body">
                    {reporte.editando ? (
                      <textarea
                        className="form-control"
                        value={reporte.contenido}
                        onChange={(e) =>
                          setReportes(
                            reportes.map((r) =>
                              r.nombre === reporte.nombre
                                ? { ...r, contenido: e.target.value }
                                : r
                            )
                          )
                        }
                      ></textarea>
                    ) : (
                      <p>{reporte.contenido}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          {/* Contenedor para los detalles del reporte */}
          <div className="position-relative" style={{ marginTop: "20px" }}>
            <div className="bg-primary text-white p-3 rounded">
              <h4 className="text-center">Detalles del Reporte</h4>
            </div>
            <div
              className="p-3"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                position: "absolute",
                top: "calc(100% + 20px)",
                left: "0",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              {/* Contenido de los detalles del reporte */}
              <p>Usuario: {reporteSeleccionado.usuario}</p>
              {/* Se añade la fecha al campo Hora */}
              <p>Fecha y Hora: {new Date().toLocaleString()}</p>
              <p>Motivo de la sanción: {motivoSancion}</p>
              <p>Estado del Reporte: {decision}</p>
              <div className="mt-3">
                {/* Espacio para mostrar si el reporte ha sido atendido o no */}
                <p>Atendido: {reporteSeleccionado.atendido ? "Sí" : "No"}</p>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <button
                  className="btn btn-success me-2"
                  onClick={handleAceptarReporte}
                >
                  Aceptar
                </button>
                <button
                  className="btn btn-danger me-2"
                  onClick={handleDenegarReporte}
                >
                  Denegar
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleCloseDetalleReporte}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmación de eliminación */}
      {showConfirmacion && (
        <div
          className="modal fade show"
          id="confirmacionModal"
          tabIndex="-1"
          aria-labelledby="confirmacionModalLabel"
          aria-hidden="true"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="confirmacionModalLabel">
                  Confirmar eliminación
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowConfirmacion(false)}
                ></button>
              </div>
              <div className="modal-body">
                ¿Estás seguro de que deseas eliminar el reporte? "
                {reporteAEliminar}"?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowConfirmacion(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmarEliminar}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

