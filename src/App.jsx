import { useEffect, useState } from "react";
import "./App.css";
import UsePaginatedData from "./usePaginatedData";
import Card from "./Components/card";
import Pagination from "./Components/pagination";

function App() {
  const [loading, data] = UsePaginatedData(3);
  const [activePage, setActivePage] = useState(1);
  const [pageProgrammers, setPageProgrammers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setPageProgrammers(data[activePage - 1]);
  }, [loading, activePage]);

  return (
    <>
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
                  <Card {...programmer} setactivePage={setActivePage} />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Pagination
        pages={data}
        setActivePage={setActivePage}
        activePage={activePage}
      />
    </>
  );
}

export default App;
