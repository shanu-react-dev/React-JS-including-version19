import { IoMdArrowDropright } from "react-icons/io";

function PageIterator({ data }) {
  console.log(data);
  return (
    <>
      {data.map((ele, index) => {
        console.log(ele);
        return (
          <div className="restContent" key={index}>
            {ele.media.includes("mp4") ? (
              <video src={ele.media} autoPlay muted loop></video>
            ) : (
              <img src={ele.media} />
            )}
            <div className="content">
              <h1>{ele.title}</h1>
              <p>{ele.desc}</p>
              <button>
                {ele.btnText} <IoMdArrowDropright className="ico" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PageIterator;
