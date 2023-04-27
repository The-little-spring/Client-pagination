import { useEffect, useState } from "react";
import "./App.css";
import UsePaginatedData from "./usePaginatedData";
import Card from "./Components/card";

function App() {
  const [loading, data] = UsePaginatedData(3);
  const [page, setPage] = useState(1);
  const [pageProgrammers, setPageProgrammers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setPageProgrammers(data[page - 1]);
  }, [loading, page]);

  return (
    <div className="container mt-5">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spiner-border"></div>
        </div>
      )}
      {!loading && (
        <div className="d-flex justify-content-center">
          {pageProgrammers.map(({ id, ...programmer }) => {
            return (
              <div className="col-3" key={id}>
                <Card {...programmer} setPage={setPage} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
