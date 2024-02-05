
FENCESTIMATOR

Overview

Fencestimator is a web application designed to simplify the process of estimating material costs for building fences. Users can select their desired fence style, input the required linear feet and height, and receive an accurate cost estimation based on Home Depot Canada's product listings. The app aims to streamline the planning phase of fence construction projects by providing users with real-time pricing information.

Problem

Estimating the cost of building a fence can be time-consuming and error-prone, especially for individuals without prior experience in construction. Homeowners and contractors often struggle to accurately calculate the quantity and cost of materials needed for a fencing project, leading to budget overruns and delays. Existing solutions may lack integration with local suppliers' pricing data, resulting in inaccurate estimations. EstiFence addresses these challenges by automating the estimation process and leveraging Home Depot Canada's product database to provide users with precise material costs.

User Profile

EstiFence caters to homeowners, contractors, and DIY enthusiasts involved in residential or commercial fence construction projects. Users may vary in their level of expertise, from novices seeking guidance on material requirements to experienced professionals looking for a convenient tool to streamline their workflow. The app must offer a user-friendly interface with intuitive controls to accommodate individuals with diverse technical backgrounds. Additionally, the platform should support both desktop and mobile devices to ensure accessibility on-the-go.






Features

Fence Style Selection: Users choose from a variety of pre-defined fence styles. 
Input Parameters: Users input the required linear feet and height of the fence.
Material Cost Estimation: The app calculates the total cost of materials based on input parameters and real-time pricing data from Home Depot Canada.
Shopping List Generation: A detailed list of materials, including quantities and prices, is generated for the user's reference.
Export Options: Users can export the shopping list as a PDF or CSV file for offline access or sharing with contractors.


Implementation

Tech Stack
Frontend: HTML, CSS, JavaScript (React.js)
Backend: Node.js, Express.js
Web Scraping: Puppeteer (for Home Depot Canada website scraping)
Database: MySql (for storing user preferences and data) - coming soon
PDF Generation: JSPDF (for generating PDF reports)

APIs
Home Depot Canada website (for retrieving real-time pricing data)

Sitemap
Home Page
Fence Style Selection
Input Form
Estimation Results
Shopping List
Export Options

Data
Real-time Pricing Data: Retrieved via web scraping from Home Depot Canada's website.



Endpoints

GET /fence-styles: Retrieve available fence styles.
POST /estimate: Receive input parameters and return cost estimation.
GET /shopping-list: Retrieve generated shopping list.
POST /export: Generate and download PDF/CSV file.

Auth
Authentication will not be implemented in the initial version of the app.


Nice-to-haves

Custom fence designs
User authentication and account management
Integration with additional suppliers for pricing data comparison
Mobile app version for enhanced accessibility
Interactive 3D fence visualization tool
