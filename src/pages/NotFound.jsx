
//este es el componente que se muestra cuando la ruta no existe

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <img
        src="https://img.freepik.com/vector-gratis/ilustracion-objeto-verano-playa_53876-8238.jpg?t=st=1741971790~exp=1741975390~hmac=acc6110987e969c8a3a0230d1c53b77d407462f8b977e40e6e7f93fabf11c59b&w=740"
        alt="404"
        style={{ width: "40%" }}
      />
      <p>Has navegado demasiado lejos</p>
    </div>
  );
};

export default NotFound;
