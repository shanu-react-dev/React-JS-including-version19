import firstPage from "../Assets/sixth.mp4";
import { IoMdArrowDropright } from "react-icons/io";

const FirstPage = () => {
  let obj = {
    media: firstPage,
    date: "April 24, 2026",
    title: "Test like you fly",
    desc: "The next generation of starship is here",
    btnText: "Watch Now",
  };
  return (
    <div className="firstContent">
      <video src={obj.media} autoPlay muted loop></video>
      <div className="content">
        <p>{obj.date}</p>
        <h1>{obj.title}</h1>
        <p>{obj.desc}</p>
        <button>
          {obj.btnText} <IoMdArrowDropright />
        </button>
      </div>
    </div>
  );
};
export default FirstPage;
