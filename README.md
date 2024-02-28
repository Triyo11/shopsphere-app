# Shopsphere

<br/>

## Description
### Shosphere is a multi-seller e-commerce website that provide products with various category from various seller. Users as buyers can search and buy anything on the website. As a seller, users can sell some of their  products. Shopsphere was made by various stacks such as Node JS, Prisma JS, MySql, React JS, and Tailwind CSS. This app also consumes a third API from Raja Ongkir and Stripe as a payment gateway. Beside of that, this app also use third-party Ngrok to make localhost can be accessed by another device.

<br/>

## Structure Directory
- ### Frontend/: Contains code for the User Interface (UI) that will be accessed via the browser using Ngrok

- ### Backend/: Contains code for logic of application, interaction with the database, and provides data to the front end.

<br>
<br>

## How to run?

### Step 0  : Installation
- ### Clone this repository ``` git clone https://github.com/Triyo11/shopsphere-app.git ```
- ### run ``` npm install ``` in terminal
- ### run ``` npm run dev ```
  
<br/>

### Step 1  :  Setting Server 
- ### run ``` npm run dev ``` in your code
- ### Turn on Ngrok to get access to the server
- ### Check server URL in Chrome browser
- ### Create a URL that uses in frontend (example: https://localhost:4200)
- ### Add ```api``` in URL  to check server (https://localhost:4200/api)
- ### Open the link in the Chrome browser
- ### If the window is already open, click the button 'visit link'
- ### Now visit the url frontend again (https://localhost:4200)
- ### Window will be displayed at the front end of the website

<br/>

### Step 2 : User Account
- ### To use features on our website, the user should log in by clicking the 'Login' button on the Sidebar
- ### If doesn't have an account, click 'Register' and a window will change to the Register page
- ### Add some information in the field of the register form and click ```submit``` button
- ### Now you already registered as a ``` Buyer ``` is a regular user that can buy anything on the website
- ### Now back to Login page, and please log in using the email and password that are already registered 
  
<br/>

### Step 3 : Features as a Buyer
- ### If the user Account that registered as a Buyer, the user can explore some features that Shopsphere provides to Buyer.
- ### Include :
    - ### Explore All Products on the Home page
    - ### Search product by category, name, and other
    - ### Buy some products and add them to the cart 
    - ### Visit Cart page (read and edit cart)
    - ### Visit the Order page (checkout process)
    - ### Visit the Payment page (payment process)
    - ### Manage Account
  
<br/>

### Step 4 : Features as a Seller
- ### If user Account that registered as a Seller, the user can some feature that Shopsphere provide to the seller. Sellers have permission like users but also have different actions in manage product
- ### Include :
    - ### Explore All Products on the Home page 
    - ### Manage their product (add product, update product, and delete product) to sell
    - ### Visit the seller transaction page (that displays user (buyer) order information )
    - ### Buy some products and add them to the cart
    - ### Visit Cart page 
    - ### Visit the order page that is specific to the history order as the buyer
    - ### Also can do process payment 
    - ### Manage account
  
  <br/>

## Developer:
- ### Shopsphere is developed by 5star team

<br/>

## API Reference:
- ### Our team uses third-party API to support process payment in Shopsphere
- ### Include 
  - ### https://rajaongkir.com
  - ### https://stripe.com
  
<br/>

## Note:
- ### This documentation is regularly updated to keep up with the evolving shopsphere.


