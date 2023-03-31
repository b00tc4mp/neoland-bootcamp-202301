# BidWise

## Intro 

BidWise is an online platform designed to allow users to purchase products through a real-time auction system,
place your bid, check your auctions and bids and have fun!

![](https://media.giphy.com/media/l41YAbDsTJXKANjmE/giphy.gif)

## Functional 

### Use Cases 

Client 

- Search auctions 
- Auctions tracking
- Real-time bid
- Secure payments

Admin 

- Add Auctions 
- Remove Auctions

#### UI desing 

Mobile 

![](./figmaFinal.png)


## Technical

## Data model 

User 
- id
- role (string, enum [ 'client', 'ádmin' ], required)
- name (string, required)
- age (number, optional)
- email (string, required, unique)
- password (string, required, length >= 8)
- creditCard (string, required, length === 16, unique)

Auction
- id
- name ( string , required)
- description (string, required)
- price (number, required)
- photo (string, optional)
- bidRate (number, required)
- startDate (date, required)
- endDate (date, required)
- status (string ['created','open','closed'])

Bid
- id
- auction (auction.id, required)
- user (user.id, required)
- amount (number, required)
- date (date, required)
