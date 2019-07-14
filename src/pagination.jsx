import React from 'react'
import _ from 'lodash'
import Proptypes from 'prop-types'

const Pagination = (props) => {
    const { itemCount, page, onPageChange, currentPage } = props
    const pageCount = itemCount / page
    if (pageCount <=1 ) return null
    const pages = _.range(1, pageCount + 1)
    return(
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    { pages.map( (page,index) => (
                        <li className={ page === currentPage ? "page-item active" : 'page-item'} key={ index }>
                            <button className="page-link" onClick={ () => onPageChange(page) }>{page}</button>
                        </li>)
                    )}

                </ul>
            </nav>
        </div>
    )
}

Pagination.prototype = {
    itemCount: Proptypes.number.isRequired,
    page: Proptypes.number.isRequired,
    currentPage: Proptypes.number.isRequired,
    onPageChange: Proptypes.func.isRequired
}
export default Pagination
