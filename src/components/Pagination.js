import React from "react";

const Pagination = ({totalPages, handleClick, page}) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    return (
        <div id="pagination">
            {page != 1 && <button className="btn-page" key={pages[0]} onClick={() => handleClick(pages[0])}>{pages[0]}</button>}
            {page != 1 && <button className="btn-page" key="voltar" onClick={() => handleClick(page - 1)}>{"<"}</button>}
            <button className="btn-page active" key={page} onClick={() => handleClick(page)}>{page}</button>
            {page != totalPages && <button className="btn-page" key="proximo" onClick={() => handleClick(page + 1)}>{">"}</button>}
            {page != totalPages && <button className="btn-page" key={totalPages} onClick={() => handleClick(totalPages)}>{totalPages}</button>}
        </div>
    )
}

export default Pagination;