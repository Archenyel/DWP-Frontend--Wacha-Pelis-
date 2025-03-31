import ListsComponent from "../components/listsComponent";

//este componente es el que renderiza la vista de mis listas
//se encarga de mostrar las listas que ha creado el usuario
//el componente recibe el userId del localStorage y lo pasa como prop al componente ListsComponent
//el componente ListsComponent se encarga de hacer la peticion a la api y mostrar las listas
const MyLists = () => {
  const userId = localStorage.getItem("userId");

  return (
    <div style={{ maxWidth: 1200, margin: "auto", marginTop: 20, backgroundColor: "white", padding: 20, borderRadius: 10 }}>
      <p>Mis listas</p>
      <ListsComponent userId={userId} />
    </div>
  );
};

export default MyLists;
