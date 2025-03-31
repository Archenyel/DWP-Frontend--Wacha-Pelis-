import ListsComponent from "../components/listsComponent";

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
