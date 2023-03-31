const { Bid } = require('../../data/models')
    // el código busca las últimas ofertas realizadas

function aggregateUserStatusInAuctions(userId, auctions) {
    const auctionIds = auctions.map(auction => auction._id)

    return Bid.find({ auction: { $in: auctionIds } })
        .then(bids => {
            //  se utiliza el método reduce para agrupar todas las ofertas en subastas, lo que significa que todas las ofertas con el mismo ID de subasta se agruparán juntas en un solo objeto.
            const auctionsBids = bids.reduce((acc, bid) => {
                const auctionId = bid.auction.toString()

                if (!acc[auctionId]) acc[auctionId] = []

                acc[auctionId].push(bid)

                return acc
            }, {})
            
//Luego, se recorre cada subasta en auctionsBids, y se utiliza el método reduce nuevamente para encontrar la última oferta realizada en esa subasta.Si el usuario que realiza la solicitud es el que realizó la última oferta en la subasta, se actualiza el estado de la subasta en el objeto auction que se encuentra en la variable auctions.Si la subasta ya ha cerrado y el usuario ha realizado la última oferta, su estado se actualiza a "ganó", de lo contrario, se actualiza a "en curso".
            
            for (const auctionId in auctionsBids) {
                const auctionBids = auctionsBids[auctionId]

                const lastBid = auctionBids.reduce((prevBid, nextBid) => {
                    return prevBid.date < nextBid.date ? nextBid : prevBid
                })

                if (lastBid.user.toString() === userId) {
                    const auction = auctions.find(auction => auction._id.toString() === auctionId)

                    auction.userStatus = auction.status === 'closed' ? 'won' : 'winning'
                }
            }
        

            auctions.forEach(auction => {
                auction.id = auction._id.toString()

                delete auction._id

                delete auction.__v
            })

            return auctions
        })
}

module.exports = aggregateUserStatusInAuctions



