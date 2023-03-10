# Chanclas App

## Intro

blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah

![](https://media3.giphy.com/media/XBKXFcmnznZzxfdOoY/giphy.gif?cid=ecf05e47mxxlyy9erd50q48nktg9t087xqq3s9848k9hngf1&rid=giphy.gif&ct=g)

## Functional

### Use cases

Client

- Search chanclas
- Mark favorite
- Mark like
- Add to cart
- Remote from cart
- Checkout cart
- List orders

Merchant

- Search chanclas
- Add chancla
- Remove chancla
- Update chancle
- List orders
- Manage order

#### UI design

Mobile

![](https://res.cloudinary.com/practicaldev/image/fetch/s--bkOKlhvR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g5qbl3jlcuh64epme60v.png)

Desktop

![](https://www.captain-design.com/blog/content/images/2020/11/figma-tutorial-frame-to-screenshot.png)

## Techincal

### Data model

User

- id
- role (string, enum ['client', 'merchant'], required)
- name (string, required)
- age (number, optional)
- email (string, required, unique)
- password (string, required, length >= 8)

Product

- id
- name (string, required)
- description (string, required)
- price (number, required)
- merchant (user.id)
- photos (string[], required)
- enabled (boolean, required)

Order

- id
- items (Item)
- total (number)

Item

- id
- product (product.id)
- size (number, required)
- color (string, required) 
- quantity (number, required)

Stock

- id
- product (product.id)
- size (number, required)
- quantity (number, required)