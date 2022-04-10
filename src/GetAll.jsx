import React, { useState } from 'react'
import ListData from './ListData';
import Pagination from './Pagination';

const GetAll = ({ all }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [showList, setShowList] = useState(false)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = all.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleClick = ({ index, item }) => {
        console.log(item[index]);
    }

    return (
        <div className="w-full mx-auto overflow-autoag">
            <table className="w-full text left">
                <tbody className="flex sm:ml-4 py-4 px-5 justify-between text-xs sm:text-lg space-x-2">
                    <tr className="flex flex-col space-y-5">
                        {currentPosts.map((item, index) => <td key={index}>{index + 1}</td>)}
                    </tr>
                    <tr className="flex flex-col space-y-5">
                        {currentPosts.map((item, index) => <td key={index}>{item.launch_date_utc.substring(0, 19)}</td>)}
                    </tr>
                    <tr className="flex flex-col space-y-5">
                        {currentPosts.map((item, index) => <td key={index}>N/A</td>)}
                    </tr>
                    <tr className="flex flex-col space-y-5">
                        {currentPosts.map((item, index) => <td key={index}>{item.launch_site.site_name}</td>)}
                    </tr>
                    <tr className="flex flex-col space-y-5 w-16 whitespace-nowrap mr-10 cursor-pointer">
                        {currentPosts.map((item, index) => <td key={index} onClick={(index) => handleClick(item, index)}>{item.mission_name.substring(0, 8)}</td>)}
                    </tr>
                    <tr className="flex flex-col space-y-5">
                        {currentPosts.map((item, index) => <td key={index}>{item.launch_success ? "Success" : "Failed"}</td>)}
                    </tr>
                    <tr className="flex flex-col space-y-5">
                        {currentPosts.map((item, index) => <td key={index}>{item.rocket.rocket_name}</td>)}
                    </tr>
                </tbody>
            </table>

            {/* {showList && <ListData all={all} />} */}
            
            <Pagination postsPerPage={postsPerPage} totalPosts={all.length} paginate={paginate} />
        </div>
    )
}

export default GetAll