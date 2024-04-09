import { useEffect, useState } from "react"
import "./Search.scss"
import ServiceData from "../../service/service"
import { Boxes } from "../../components"
import { useParams } from "react-router-dom"
import ReactPaginate from "react-paginate"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Search = () => {
  const [searchProducts, setSearchProducts] = useState()
  const [totalPages, setTotalPages] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const { word } = useParams()

  useEffect(() => {
    getSearchProducts()
  }, [currentPage])

  const getSearchProducts = async () => {
    try {
      const response = await ServiceData.getData(
        `main/get_all_source?word=${word}&page=${currentPage}&limit=5`
      )
      setSearchProducts(response.data)
      setTotalPages(response.data.pages)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="search">
      <div className="title">Search: {word}</div>
      <Boxes boxesData={searchProducts?.data} />
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          previousLabel={<FiChevronLeft />}
          nextLabel={<FiChevronRight />}
          onPageChange={(e) => setCurrentPage(e.selected + 1)}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          renderOnZeroPageCount={null}
          activeClassName="activePage"
        />
      </div>
    </div>
  )
}

export default Search
