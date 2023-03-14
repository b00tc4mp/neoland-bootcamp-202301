![Logo](https://raw.githubusercontent.com/amat3/neoland-bootcamp-202301/feature/fullstack/staff/juan-amate/project/app/public/images/logo-web.png)

# WeddID

## Intro

Send your contracts and keep your customer data up to date to save time and be more productive.

![](https://media.giphy.com/media/KSzxFSCApjqOOI1A9q/giphy.gif)

## Functional

### Use cases

Admin

- Add client
- View clients
- Search client
- Update client
- Add contract
- View contract
- Search contract
- Update contract
- Remove contract

Client

- Save personal data
- View personal data
- Modify personal data
- Recieve contract
- View constracts
- Create pdf contract

#### UI design

Mobile

![](https://res.cloudinary.com/practicaldev/image/fetch/s--bkOKlhvR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g5qbl3jlcuh64epme60v.png)

## Technical

### Data model

User

- id
- name (string, required)
- nationalId (string, required)
- role (string, required, enum ['admin', 'client'])
- address (string, required)
- zipCode (string, required)
- city (string, required)
- province (string, required)
- phone (string)
- email (string, required, unique)
- password (string, required, length >= 8)

Contract

- id
- user (user.id)
- date (Date, required)
- description (string, required)
- price (number, required)

- eventDate (date, required)
- ceremonyPlace (Place, required)
- sessionPlace (Place)
- celebrationPlace (Place)
- preparationPlace (Place)

- coupleName (string, required)
- coupleId (string, required)
- couplePhone (string)
- coupleEmail (string, required, unique)
- couplePreparationPlace (Place)

Place

- id
- description (string, required)
- address (string)
- zipCode (string)
- city (string, required)
- province (string)

### Sequence

![](./images/...)
