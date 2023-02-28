import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Todos from "./pages/Todos";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    </div>
  );
}

export default App;
