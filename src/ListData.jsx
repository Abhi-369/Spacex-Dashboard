import React from 'react'

const ListData = ({all}) => {
    console.log(all);
    // console.log(all.launch_date_unix);
  return (
    <div>
        <header>
            <img src={all} alt="" />
            <div>
                {/* mission__name */}
                {/* rocket__name */}
                {/* 3__icon */}
            {/* success */}
            </div>
            {/* close__icon */}
        </header>
    </div>
  )
}

export default ListData