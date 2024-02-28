# Shopsphere

<br/>

## Description
### Shosphere is multi-seller ecommerce website that provide products with various category from various seller. User as a buyer can search and buy anything in the website. As a seller, user can sell some their  products. Shopsphere was made by various stack such as Node JS, Prisma JS , MySql , React JS, Tailwind CSS. These app also consume third API from Raja Ongkir and Stripe as payment gateway. Beside of that, these app also use third party Ngrok to make localhost can be accessed by other device.

<br/>

## Structure Directory
- ### Frontend/: Contains code for the User Interface (UI) that will be accessed via the browser using Ngrok

- ### Backend/: Contains code for logic of application, interaction with the database, and provides data to the frontend.

<br>
<br>

## How to run ?

### Step 0  : Installation
- ### Clone this repository ``` git clone https://github.com/Triyo11/shopsphere-app.git ```
- ### run ``` npm install ``` in terminal
- ### run ``` npm run dev ```
  
<br/>

### Step 1  :  Setting Server 
- ### run ``` npm run dev ``` in your code
- ### Turn on Ngrok to get access the server
- ### Check server URL in chrome browser
- ### Create URL that use in frontend (example: https://localhost:4200)
- ### Add ```api``` in URL  to check server (https://localhost:4200/api)
- ### Open the link in chrome browser
- ### If window already open , click button 'visit link'
- ### Now visit the url frontend again (https://localhost:4200)
- ### Window will be displays the frontend of the website

<br/>

### Step 2 : User Account
- ### To use features in our website , user should login by click 'Login' button in Sidebar
- ### If doesn't have account, click 'Register' and window will change to Register page
- ### Add some information in field of register form and clik ```submit``` button
- ### Now you already register as ``` Buyer ``` is regular user that can buy anything in the website
- ### Now back to Login page , and please login using email and password that already registered 
  
<br/>

### Step 3 : Features as a Buyer
- ### If user Account that registered as Buyer, user can explore some features that Shopsphere provide to Buyer.
- ### Include :
    - ### Explore All Product in Home page
    - ### Search product by category, name and other
    - ### Buy some product and add to cart 
    - ### Visit Cart page (read and edit cart)
    - ### Visit Order page (checkout process)
    - ### Visit Payment page (payment process)
    - ### Manage Account
  
<br/>

### Step 4 : User Experience (Seller)
- ### If user Account that registered as Seller, user can some feature that shopsphere provide to seller. Seller have permission like user but also have different action in manage product
- ### Include :
    - ### Explore All Product in Home page 
    - ### Manage their product (add product, update product and delete product) to sell
    - ### Visit seller transaction page (that display user (buyer) order information )
    - ### Buy some product and add to cart
    - ### Visit Cart page 
    - ### Visit order page that spesific to history order as buyer
    - ### Also can do process payment 
    - ### Manage account
  
  <br/>

## Developer:
- ### Shopsphere is develop by 5star team

<br/>

## API Reference:
- ### Our team use third-party API to support process payment in Shopsphere
- ### Include 
  - ### https://rajaongkir.com
  - ### https://stripe.com
  
<br/>

## Note:
- ### This documentation is regularly updated to keep up with the evolving shopsphere.


