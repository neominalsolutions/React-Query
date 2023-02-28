import axios from "axios";
import { useQuery } from "react-query";
import { GetQuery } from "./QueryBase";

export function GetTodosById(id: number) {
  return GetQuery("todos", `https://jsonplaceholder.typicode.com/todos/`, {
    id: id,
  });
}
