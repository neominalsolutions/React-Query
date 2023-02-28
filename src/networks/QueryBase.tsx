import axios from "axios";
import { useQuery } from "react-query";

export function GetQuery(
  tag: string,
  endpoint: string,
  params: any,
  refetchInterval?: number
) {
  // localStorage.setItem("token", "mytoken");

  const token = localStorage.getItem("token");
  let myHeaders = {};

  if (token != undefined) {
    myHeaders = { Authorization: `Bearer ${token}` };
  }

  // tag cache bozmak için kullanılan tag değeri
  // params değeri değiştiğinde cacheden çekmez
  const query = useQuery({
    queryKey: [tag, params],
    queryFn: async ({ signal }) => {
      const { data } = await axios.get(endpoint, {
        params: params,
        signal,
        headers: myHeaders,
      });
      return data;
    },
    refetchInterval: refetchInterval ?? undefined,
  });

  if (query.isRefetching) {
    console.log("refetch", query.isRefetching);
  }

  // if (query.isLoading) {
  //   console.log("loading");
  // }

  // if (query.isFetching) {
  //   console.log("fetching");
  // }

  // if (query.isFetched) {
  //   console.log("fetched");
  // }

  if (query.isSuccess) {
    if (query.data.length == 1) {
      console.log("query.data.length", query.data.length);
      query.data = { ...query.data[0] };
    }

    //console.log("data", query.data);
  }

  return query;
}
