import axios from "axios";
import { useQuery } from "react-query";
import { GetQuery, PostQuery } from "./QueryBase";

export function GetTodosById(id: number) {
  return GetQuery("todos", `https://jsonplaceholder.typicode.com/todos/`, {
    id: id,
  });
}

export function PostTodo(param: any) {
  return PostQuery(
    "todos",
    `https://jsonplaceholder.typicode.com/todos/`,
    param
  );
}
