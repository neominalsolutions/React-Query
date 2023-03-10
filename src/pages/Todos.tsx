import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { GetTodosById, PostTodo } from "../networks/todo.api";

type Props = {};

export default function Todos({}: Props) {
  // const [id, setId] = useState<number>(1);

  const queryClient = useQueryClient();

  const { data, isSuccess, isLoading, error } = GetTodosById(3);
  const mutation = PostTodo();

  useEffect(() => {
    if (isSuccess) {
      console.log("data", data);
    }
  });

  const onChange = (event: any) => {
    if (event.target.value != "") {
      // setId(Number(event.target.value));
    }
  };

  return (
    <div>
      <input placeholder="id göre çek" onChange={onChange} />
      <button onClick={() => mutation.mutate({ title: "1" })}>Bas</button>
    </div>
  );
}
