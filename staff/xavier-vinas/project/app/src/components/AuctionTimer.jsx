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
    
    let time = ''

    if (days !== 0) {
        time += `${days}d `
    }

    if (hours !== 0) {
        time += `${hours.toString().padStart(2, '0')}h `
    }

    if (minutes !== 0) {
        time += `${minutes.toString().padStart(2, '0')}m `
    }

    if (seconds >= 0) {
        time += `${seconds.toString().padStart(2, '0')}s `
    }
    return <div>
        {time}
    </div>

}

export default AuctionTimer