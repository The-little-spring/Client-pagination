import PropTypes from "prop-types";

const Pagination = ({ pages, setActivePage, activePage }) => {
  const prevPage = () => {
    setActivePage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pages.length;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setActivePage((oldPage) => {
      let prevPage = oldPage + 1;
      if (prevPage > pages.length) {
        prevPage = 1;
      }
      return prevPage;
    });
  };

  return (
    <nav>
      <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
        <li className="page-item">
          <a href="#" className="page-link" onClick={prevPage}>
            قبلی
          </a>
        </li>
        {pages.map((page, index) => {
          return (
            <li
              className={`page-item ${
                index + 1 === activePage ? "active" : ""
              }`}
              key={index}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => setActivePage(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          );
        })}
        <li className="page-item">
          <a href="#" className="page-link" onClick={nextPage}>
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pages: PropTypes.array.isRequired,
  setActivePage: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
};

export default Pagination;
