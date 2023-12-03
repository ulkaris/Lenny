import "./error-page.scss";
import errorImg from "../../assets/imgs/404.png";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <>
      <main>
        <img src={errorImg} />
        <div className="error-text">Oops, This Page Could Not Be Found.</div>
        <div className="error-content">
          The page might have been removed, had its name changed, or is
          temporarily unavailable.
        </div>
        <button onClick={() => nav(-1)}>
          <i
            className={`{"fa-solid fa-chevron-left"} ${"error-left-arrow"}`}></i>{" "}
          Return back
        </button>
      </main>
    </>
  );
};
