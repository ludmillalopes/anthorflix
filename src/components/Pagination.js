import React from "react"
import "../components/style/Pagination.css"

export default function Pagination(props) {
  
  const pageLinks = [];

  for(let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage == i ? 'active' : '';

    pageLinks.push(
      <li
        className={`waves-effect ${active}`}
        key={i}
        onClick={() => props.nextPage(i)}
      >
        <a href="#">{i}</a>
      </li>);
  }

  return (
    <>
      <section className="pagination">
        <div className="pagination_container">

          {props.currentPage > 1 ? 
            <li
              className={`waves-effect`}
              onClick={() => props.nextPage(props.currentPage - 1)}
            >
              <a href="#">Anterior</a>
            </li> : ''
          }

          {pageLinks}

          {props.currentPage < props.pages + 1 ? 
            <li
              className={`waves-effect`}
              onClick={() => props.nextPage(props.currentPage + 1)}
            >
              <a href="#">Próxima</a>
            </li> : ''
          }
        </div>
      </section>
    </>
  );
}