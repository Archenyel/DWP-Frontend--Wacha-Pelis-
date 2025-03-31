import ListsComponent from "../components/listsComponent";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Lists = () => {
  const bigbuttonStyle = {
    border: "none",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: 16,
    margin: 4,
    cursor: "pointer",
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "auto",
        marginTop: 20,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Link to="/newlist">
        <button style={bigbuttonStyle}>
          <EditOutlined style={{ width: "40px" }} />
          Crear lista
        </button>
      </Link>
      <Link to="/mylists">
        <button style={bigbuttonStyle}>Mis listas</button>
      </Link>
      <ListsComponent userId={0} />
    </div>
  );
};

export default Lists;
