import axios from "axios";
import BowlList from "@/components/BowlList";

const menu = ({ bowlList }) => {
  return (
    <div>
      <BowlList bowlList={bowlList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      bowlList: res.data
    }
  };
};

export default menu;
