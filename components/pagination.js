function Item({ number, onClick, isCurPage }) {
    return <li><a
        href="#"
        id={number}
        onClick={onClick}
        className={isCurPage ? "py-2 px-3 text-[#577BC1] bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-900 dark:text-white" : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>
        {number}
    </a></li>
}

export default function Pagination({ count, page, setPage }) {
    const items = Array(count)
        .fill(null)
        .map((_, i) =>
            <Item
                number={i + 1}
                key={i + 1}
                onClick={e => setPage(p => parseInt(e.target.id))}
                isCurPage={i + 1 === page} />
        );

    const onPrevious = () => {
        if (page > 1) {
            setPage(page => page - 1);
            window.location.replace('#');
        }
    }

    const onNext = () => {
        if (page < count) {
            setPage(page => page + 1);
            window.location.replace('#');
        }
    }

    return (
        <nav className="relative">
            <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex -space-x-px">
                <li key={0}><a onClick={onPrevious} className="select-none py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a></li>
                {items}
                <li key={count + 1}><a onClick={onNext} className="select-none py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a></li>
            </ul>
        </nav>
    )
}