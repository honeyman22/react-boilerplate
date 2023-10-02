import api from "../utils/api";
import { useQuery } from "react-query";

const useData = ({ key, url }: { key: string; url: string }) => {
  return useQuery(key, () => api.get(url));
};

export default useData;
