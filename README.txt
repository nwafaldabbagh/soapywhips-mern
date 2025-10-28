==================================================
 Soapy Whips MERN Web Application
==================================================

Author: Nwaf Al Dabbagh
Project: MERN-Stack Web Application
Date: October 16, 2025
--------------------------------------------------
Theme:
A car detailing management system (Soapy Whips) that allows 
administrators to manage services, vehicles, customers, and bookings.
Standard users can register, log in, view available services, add 
their vehicles, and schedule detailing bookings.

==================================================
A. How to Start the Web Server (Backend)
==================================================

1. Make sure you have Node.js and MongoDB installed and running locally.
   - Node.js version 18+ recommended
   - MongoDB running on default port (27017)

2. Open a terminal and navigate to the `server` folder:
   cd server

3. Create a `.env` file in the server folder (if not already there).
   Example contents:
   MONGO_URI=mongodb://127.0.0.1:27017/soapywhips
   JWT_SECRET=replace_this_with_a_long_random_string
   PORT=5050

4. Install dependencies:
   npm install

5. Start the backend web server:
   npm run dev

6. You should see:
   MongoDB connected
   Server running on 5000

   ➜ The backend API will now be available at:
   http://localhost:5050/api

==================================================
B. How to Start the React Application (Frontend)
==================================================

1. Open a second terminal window.

2. Navigate to the `client` folder:
   cd client

3. Install dependencies:
   npm install

4. Start the React development server:
   npm run dev

5. You should see a message like:
   Local: http://localhost:5173/

   ➜ This is the React front-end server.
   It automatically communicates with the backend on port 5000 via Axios.

==================================================
C. How to Navigate to the Application
==================================================

Once both servers are running:

1. Open a web browser and visit:
   http://localhost:5173

2. You will first see the Login Page.
   - You can register a new user.
   - To create an admin, you may update the user's role manually in MongoDB
     (set role field to "admin" in the users collection).

3. The application uses two ports:
   - 5173 → React frontend (main application)
   - 5050 → Express backend (API server)

==================================================
D. MongoDB Collections
==================================================

The application uses the following collections in the soapywhips database:

1. users
   - Stores user accounts with username, password, and role
   - Roles: "admin" or "user"

2. customers
   - Each user has one customer profile (One-to-One with users)
   - Fields: fullName, phone, user

3. vehicles
   - Each customer can have multiple vehicles (One-to-Many)
   - Fields: make, model, year, color, plate, customer

4. services
   - Admin-defined detailing services (wash, wax, interior shampoo, etc.)
   - Fields: name, description, priceUSD

5. bookings
   - Links vehicles to services and scheduled dates (Many-to-One)
   - Fields: vehicle, service, date, status, notes

==================================================
E. Example Admin Workflow
==================================================

1. Admin logs in.
2. Adds Services (e.g., "Full Interior Detail" - $120).
3. Views or manages all customers, vehicles, and bookings.

==================================================
F. Example User Workflow
==================================================

1. User registers an account and logs in.
2. Adds their vehicle (e.g., "2021 BMW M240i, Blue").
3. Views available services.
4. Creates a booking for a service and date.
5. Views all of their bookings in the "My Bookings" page.

==================================================
End of README
==================================================
