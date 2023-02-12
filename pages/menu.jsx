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
  const res = await axios.get("https://pikko.vercel.app/api/products");
  return {
    props: {
      bowlList: res.data
    }
  };
};

export default menu;
