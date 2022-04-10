import React, { useEffect, useState } from 'react'

const UpComing = () => {
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches/upcoming')
      .then((response) => response.json())
      .then((response) => setUpcoming(response));
  }, [])
  console.log(upcoming);

  return (
    <div className="w-full mx-auto overflow-auto">
      <table className="w-full text left">
        <tbody className="flex sm:ml-4 py-4 px-5 justify-between text-xs sm:text-lg space-x-2">
          <tr className="flex flex-col space-y-5">
            {upcoming.map((item, index) => <td key={index}>{index + 1}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {upcoming.map((item, index) => <td key={index}>{item.launch_date_utc.substring(0, 19)}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {upcoming.map((item, index) => <td key={index}>N/A</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {upcoming.map((item, index) => <td key={index}>{item.launch_site.site_name}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5 w-16 whitespace-nowrap mr-10">
            {upcoming.map((item, index) => <td key={index}>{item.mission_name.substring(0, 8)}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {upcoming.map((item, index) => <td key={index}>{item.launch_success ? "Success" : "Failed"}</td>)}
          </tr>
          <tr className="flex flex-col space-y-5">
            {upcoming.map((item, index) => <td key={index}>{item.rocket.rocket_name}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UpComing