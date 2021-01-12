import React, { useEffect, useRef, useState } from "react";
import { useAxios } from "./useAxios";

function App() {
  const { loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });
  console.log(`loading: ${loading},\n data: ${JSON.stringify(data)},\n error: ${error}`);
  return (
    <div className="App">
      <h1>{data?.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}

export default App;
