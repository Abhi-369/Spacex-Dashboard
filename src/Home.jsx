import React, { useEffect, useState } from 'react'
import { BiFilterAlt } from 'react-icons/bi'
import Failed from './Failed'
import GetAll from './GetAll'
import Pagination from './Pagination'
import Success from './Success'
import UpComing from './UpComing'

const Home = () => {
    const [All, setAll] = useState([])
    const [value, setValue] = useState("all");

    // for displaying current  clicked table data by true false ternary operator
    const [showAll, setShowAll] = useState(true)
    const [showUpcoming, setShowUpcoming] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);

    useEffect(() => {

        value === "all" ? setShowAll(true) : setShowAll(false);
        value === "upcoming" ? setShowUpcoming(true) : setShowUpcoming(false);
        value === "successful" ? setShowSuccess(true) : setShowSuccess(false);
        value === "failed" ? setShowFailed(true) : setShowFailed(false);

    }, [value]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then((response) => response.json())
            .then((response) => setAll(response));
    }, [])

    const handleOnChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    }

    return (

        <div>
            <header className="flex justify-center border-b bg-[#F6F6F6]">
                <img src="https://www.nicepng.com/png/detail/140-1407232_spacex-logo-spacex.png" alt="" />
            </header>

            <div>
                <section className="body-font text-slate-300">
                    <div className="container px-5 py-18 mx-auto">
                        <div className="lg:w-2/3 w-full mx-auto overflow-auto mt-10">
                            <form className="text-black flex items-center sm:justify-end sm:py-3 mb-10 space-x-2 justify-center">
                                <BiFilterAlt color='white'/>
                                <select name="launches" className="outline-none p-1" value={value} onChange={handleOnChange}>
                                    <option value="all">All Launches</option>
                                    <option value="upcoming">Upcoming Launches</option>
                                    <option value="successful">Successful Launches</option>
                                    <option value="failed">Failed Launches</option>
                                </select>
                            </form>
                            <table className="table-auto w-full text-left whitespace-no-wrap border-2">
                                <thead>
                                    <tr className="flex bg-gray-100 justify-between sm:px-8 px-3 border-b">
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">No</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Launched (UTC)</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Location</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Mission</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Orbit</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Launch Status</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Rocket</th>
                                    </tr>
                                </thead>

                                {showAll && <GetAll all={All} />}
                                {showUpcoming && <UpComing />}
                                {showSuccess && <Success all={All} />}
                                {showFailed && <Failed all={All} />}
                            </table>
                        </div>

                    </div>
                </section>
            </div>

        </div>
    )
}

export default Home