import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
 
    return (
        <div className="flex items-center space-x-3 list-none text-blue-600 font-bold p-3 absolute sm:right-80 right-0 sm:mx-5 flex-wrap">
            {pageNumbers.map(number => (
                <li key={number} className="border-2 p-3 px-3 rounded-full cursor-pointer hover:bg-blue-100 m-2">
                    <span onClick={() => paginate(number)}>{number}</span>
                </li>
            ))}
        </div>
    )
}

export default Pagination