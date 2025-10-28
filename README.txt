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

This project is a full-stack web app built with the MERN stack:
MongoDB, Express.js, React, and Node.js.

It includes two user roles:
1. Standard User – can register, log in, create a profile, add vehicles, and view services.
2. Administrator – can log in to the admin panel to manage customers, vehicles, and services.

----------------------------------------------------------
a. How can the grader start your web server?
----------------------------------------------------------

1. Open a terminal and go to the backend (server) folder:
   cd ~/Downloads/soapywhips-mern/server

2. Make sure dependencies are installed:
   npm install

3. Make sure you have MongoDB running on your computer.
   (You can start it by typing “mongosh” in another terminal if it’s installed.)

4. Start the backend server:
   npm run dev

If everything is correct, you should see:
   “MongoDB connected” and “Server running on 5050”.

This means your Node.js web server (Express API) is running.

----------------------------------------------------------
b. Is there a second server needed for your React app?
----------------------------------------------------------

Yes. The React app (frontend) runs separately using Vite.

1. Open another terminal window or tab.
2. Go to the frontend (client) folder:
   cd ~/Downloads/soapywhips-mern/client
3. Install its dependencies:
   npm install
4. Start the React development server:
   npm run dev

When you see “Local: http://localhost:5173/”, 
open that link in your web browser.

----------------------------------------------------------
c. How can the grader navigate to the application?
----------------------------------------------------------

• The backend API runs on:  http://localhost:5050
• The frontend web app runs on:  http://localhost:5173

To use the site:
1. Go to http://localhost:5173
2. Click “Create Account” to register as a normal user.
3. Log in and explore as a regular client.
4. To become an admin, open MongoDB and run:
   use soapywhips
   db.users.updateOne({ username: "yourusername" }, { $set: { role: "admin" } })

Then log in again — you’ll see the Admin Panel at /admin
(where you can manage services, customers, and vehicles).

----------------------------------------------------------
d. What Collections are needed in MongoDB?
----------------------------------------------------------

The following MongoDB collections are created automatically:

1. users        → stores usernames, hashed passwords, and roles (“user” or “admin”)
2. customers    → stores customer profiles (full name, phone)
3. vehicles     → stores vehicles linked to customers
4. services     → stores available detailing services (name, description, priceUSD)
5. bookings     → stores service bookings (optional feature)

----------------------------------------------------------
Extra Information
----------------------------------------------------------

Default ports:
• Backend (Express): 5050
• Frontend (React): 5173
We use port 5050 because macOS sometimes blocks port 5000.

To stop either server, press Ctrl + C in its terminal window.

----------------------------------------------------------
End of README.txt
----------------------------------------------------------
