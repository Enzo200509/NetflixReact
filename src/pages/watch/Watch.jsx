import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { Link } from "react-router-dom";
export default function Watch() {
  return (
    <div className="watch">
      <Link to={"/home"}>
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <video className="video" autoPlay progress controls src="https://youtu.be/uhIJPcRk0W4/embed"/>
    </div>
  );
}
