import axios from "axios";
import { useEffect, useState } from "react";
import _ from "lodash";

const UsePaginatedData = (pageSize) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://react-mini-projects-api.classbon.com/Programmer/programmers"
    );
    const result = response.data;
    const chunkedData = _.chunk(result, pageSize);
    setData(chunkedData);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [loading, data];
};

export default UsePaginatedData;
