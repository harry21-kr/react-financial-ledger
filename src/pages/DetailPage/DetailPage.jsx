import { useEffect } from "react";

const DetailPage = () => {
  useEffect(() => {
    console.log("mounted");
  }, []);
  return <div>asd</div>;
};

export default DetailPage;
