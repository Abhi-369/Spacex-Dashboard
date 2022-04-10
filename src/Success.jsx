import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

const Success = ({ all }) => {
  const [successData, setSuccessData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  let data;
  useEffect(() => {
    data = all?.filter(data => data?.launch_success === true);
    console.log(data);
    setSuccessData(data);
  }, [])

  console.log(successData);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = successData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="w-full mx-auto overflow-auto">
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
          <tr className="flex flex-col space-y-5 w-16 whitespace-normal mr-10">
            {currentPosts.map((item, index) => <td key={index}>{item.mission_name}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {currentPosts.map((item, index) => <td key={index}>{item.launch_success ? "Success" : "Failed"}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {currentPosts.map((item, index) => <td key={index}>{item.rocket.rocket_name}</td>)}
          </tr>
        </tbody>
      </table>
      <Pagination postsPerPage={postsPerPage} totalPosts={successData.length} paginate={paginate} />
    </div>)
}

export default Success