import axios from "axios";
import { useMutation, useQuery } from "react-query";

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
    onError: (err) => {
      console.log("err", err);
    },
    onSuccess: (data) => {
      console.log("success", data);
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

export function PostQuery(tag: string, endpoint: string) {
  // localStorage.setItem("token", "mytoken");

  const token = localStorage.getItem("token");
  let myHeaders = {};

  if (token != undefined) {
    myHeaders = { Authorization: `Bearer ${token}` };
  }

  // tag cache bozmak için kullanılan tag değeri
  // params değeri değiştiğinde cacheden çekmez
  const mutation = useMutation({
    mutationFn: async (params: any) => {
      const { data } = await axios.post(endpoint, {
        params: params,
        headers: myHeaders,
      });

      console.log("post-data", data);

      return data;
    },
    onSuccess: (data) => {
      console.log("success", data);
    },
    onError: (err) => {
      console.log("err", err);
    },
  });

  return mutation;
}
