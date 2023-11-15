import { useEffect, useState } from "react";
import getCategories from '../../api/http-common';
function Categories() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setApiData(res.data));
  }, []);

  console.log(apiData);
  return (
    <>
      <div className="App">{apiData?.categories}</div>
    </>
  )
}

export default Categories
