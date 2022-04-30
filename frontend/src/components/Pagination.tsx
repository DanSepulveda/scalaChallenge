import { PaginationProps } from '../types'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Pagination = (props: PaginationProps): JSX.Element => {
    const { page, setPage, pageQty } = props

    let pages = []
    for (let i = 1; i <= pageQty; i++) pages.push(i)

    const changePage = (newPage: number) => {
        window.scrollTo(0, 0)
        setPage(newPage)
    }

    const previousPage = page !== 1 &&
        <div className='d-flex align-items-center link rounded-1'>
            <MdArrowBackIosNew />
            <span onClick={() => changePage(page - 1)}>Anterior</span>
        </div>

    const actualPage = <span className='mx-5 info'>{`Página ${page} de ${pageQty}`}</span>

    const nextPage = page !== pageQty &&
        <div className='d-flex align-items-center link rounded-1'>
            <MdArrowForwardIos />
            <span onClick={() => changePage(page + 1)}>Siguiente</span>
        </div>

    return (
        <div className='d-flex mt-3 mb-5 justify-content-center align-items-center'>
            {previousPage}
            {actualPage}
            {nextPage}
        </div>
    )
}

export default Pagination