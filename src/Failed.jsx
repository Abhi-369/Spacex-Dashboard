import React, { useEffect, useState } from 'react'

const Success = ({ all }) => {
  const [failData, setFailData] = useState([])
  let data;
  useEffect(() => {
    data = all?.filter(data => data?.launch_success === false);
    console.log(data);
    setFailData(data);
  }, [])

  return (
    <div className="w-full mx-auto overflow-auto">
      <table className="w-full text left">
        <tbody className="flex sm:ml-4 py-4 px-5 justify-between text-xs sm:text-lg space-x-2">
          <tr className="flex flex-col space-y-5">
            {failData.map((item, index) => <td key={index}>{index + 1}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {failData.map((item, index) => <td key={index}>{item.launch_date_utc.substring(0, 19)}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {failData.map((item, index) => <td key={index}>N/A</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {failData.map((item, index) => <td key={index}>{item.launch_site.site_name}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5 w-16 whitespace-normal mr-10">
            {failData.map((item, index) => <td key={index}>{item.mission_name}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {failData.map((item, index) => <td key={index}>{item.launch_success ? "Success" : "Failed"}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {failData.map((item, index) => <td key={index}>{item.rocket.rocket_name}</td>)}
          </tr>
        </tbody>
      </table>
    </div>)
}

export default Success