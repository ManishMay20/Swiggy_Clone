import { useEffect, useState } from "react";

const useData = () => {
  const [apiInfo, setApiInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setApiInfo(json);
    console.log(apiInfo);
  };

  return apiInfo;
};
export default useData;
