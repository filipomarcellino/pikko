import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState(null);
  const [extraOption, setExtraOption] = useState([]);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOption((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dhwwacd93/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOption,
        img: url
      };

      await axios.post("http://pikko.vercel.app/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen z-[999] w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="flex flex-col text-center border bg-lime-600 text-white p-4 m-8">
        <span
          className="cursor-pointer self-end top-0 left-0 border text-white px-1 bg-red-500 rounded-full"
          onClick={() => setClose(true)}
        >
          X
        </span>
        <h1 className="text-2xl border-b-2 mb-2">Add a New Bowl</h1>
        <div className="mb-2">
          <label>Choose an image</label> <br></br>
          <input
            className="border text-center m-auto w-full"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="mb-2">
          <label>Title</label> <br></br>
          <input
            className="w-full text-black p-1"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label>Description</label> <br></br>
          <textarea
            className="w-full text-black p-1"
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label>Prices</label> <br></br>
          <div>
            <input
              className="w-full mb-2 text-black p-1"
              type="number"
              placeholder="Regular"
              onChange={(e) => changePrice(e, 0)}
            />{" "}
            <br></br>
            <input
              className="w-full mb-2 text-black p-1"
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 1)}
            />
          </div>
        </div>
        <div>
          <label>Extra</label>
          <div>
            <input
              className="w-full mb-2 text-black p-1"
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />{" "}
            <br></br>
            <input
              className="w-full mb-2 text-black p-1"
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />{" "}
            <br></br>
            <button
              className="border rounded-lg p-1 mb-2"
              onClick={handleExtra}
            >
              Add Extra
            </button>
          </div>
          <div className="mb-4">
            {extraOption.map((option) => (
              <span className="m-2 p-1 border" key={option.text}>
                {option.text}, {option.price}
              </span>
            ))}
          </div>
        </div>
        <button className="border rounded-lg" onClick={handleCreate}>
          Create Bowl
        </button>
      </div>
    </div>
  );
};

export default Add;
