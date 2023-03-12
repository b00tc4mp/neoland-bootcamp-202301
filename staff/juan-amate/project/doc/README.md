![Logo](https://raw.githubusercontent.com/amat3/neoland-bootcamp-202301/feature/fullstack/staff/juan-amate/project/app/public/images/logo-web.png)

# WeddID

## Intro

Send your contracts and keep your customer data up to date to save time and be more productive.

![](https://media.giphy.com/media/KSzxFSCApjqOOI1A9q/giphy.gif)

## Badges

![Badge en Desarrollo](https://img.shields.io/badge/Versión-0.0-blue) ![Badge en Desarrollo](https://img.shields.io/badge/Demo-3/3-orange) ![Badge en Desarrollo](https://img.shields.io/badge/Test-0/0-yellow) ![Badge en desarrollo](https://img.shields.io/badge/Status-en%20desarrollo-green)

| **Platform** |

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink) ![](https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown) ![](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) ![](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) ![](https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white) ![](https://img.shields.io/badge/Brave-FF1B2D?style=for-the-badge&logo=Brave&logoColor=white)

![](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![](https://img.shields.io/badge/Adobe%20Creative%20Cloud-DA1F26?style=for-the-badge&logo=Adobe%20Creative%20Cloud&logoColor=white) ![](https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black) ![](https://img.shields.io/badge/Adobe%20Lightroom-31A8FF?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white)

## Functional

### Use cases

Client

- Send personal data
- List personal data
- Modify personal data
- Recieve contract
- Create pdf contract
- List constracts

Admin

- Add client
- List clients
- Search client
- Update client
- Remove client
- Add contract
- List contract
- Search contract
- Update contract
- Remove contract
- Send contract to client

#### UI design

Mobile

![](https://res.cloudinary.com/practicaldev/image/fetch/s--bkOKlhvR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g5qbl3jlcuh64epme60v.png)

Desktop

![](https://www.captain-design.com/blog/content/images/2020/11/figma-tutorial-frame-to-screenshot.png)

## Technical

### Data model

Admin

- id
- business name (string, required)
- cif/nif (string, required)
- address (string, required)
- zip code (number, required, length === 5)
- city (string, required)
- region (string, required)
- email (string, required, unique)
- password (string, required, length >= 8)
- phone number (number)
- signature (string, required)

User

- id
- name (string, required)
- surname (string, required)
- phone number (number)
- email (string, required, unique)
- cif/nif (number, required)
- address (string, required)
- zip code (number, required)
- city (string, required)
- region (string, required)
- password (string, required, length >= 8)
- signature (string, required)
- event date (date, required)
- ceremony place (string, required)
- ceremony hour (date, required)
- session place (string)
- celebration place (string, required)
- getting ready address (string)
- getting ready city (string)
- couple name (string, required)
- couple surname (string, required)
- couple phone number (number)
- couple email (string, required, unique)
- couple cif/nif (number, required)
- couple getting ready address (string, required)
- couple city (string, required)

Contract

- id
- date (string, required)
- description service (string, required)
- price (number, required)
- merchant (user.id)
