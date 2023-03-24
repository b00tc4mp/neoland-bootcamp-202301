import React, { useState, useEffect } from 'react'
import moment from 'moment'

function AuctionTimer({ endDate }) {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date())
        }, 1000);

        return () => clearInterval(interval)
    }, [])


    const end = moment(endDate)
    const duration = moment.duration(end.diff(now))

    const days = Math.floor(duration.asDays())
    const hours = duration.hours()
    const minutes = duration.minutes()
    const seconds = duration.seconds()

    const time = `${days}d ${hours}h ${minutes}m ${seconds}s`

    return <div>
        {time}
    </div>

}

export default AuctionTimer