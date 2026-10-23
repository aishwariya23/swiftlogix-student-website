## What Should the Application Contain?

!image.png

## Website vs Web Application

| Aspect | Website | Web Application |
| --- | --- | --- |
| **Purpose** | Mainly provides information to users | Allows users to perform actions or operations |
| **Interaction** | Usually has simple or limited interaction | Usually highly interactive |
| **Content** | Content may remain mostly unchanged | Content frequently changes based on user actions and data |
| **User Login** | Often not required | Commonly requires user login |
| **Data Processing** | Limited data processing | Performs operations such as creating, updating, searching, and deleting data |
| **Examples** | Company website, portfolio, news/information site | Gmail, Amazon, Google Docs, Uber, Swiggy, online banking |
| **Typical Flow** | Home → About → Services → Contact | Login → Search Shipment → Create Shipment → Assign Driver → Update Status → View Analytics |

**Note:** Modern digital products often combine both **website** and **web application** features.

# Decoding the Application

## Major Components of a Modern Web Application and Full Stack Development

!image.png

## Frontend Development

### What is Frontend Development?

Frontend Development refers to the part of web development responsible for everything users **see and interact with** in their browser.

In SwiftLogix, frontend elements include:

- Dashboard
- Navigation menu
- Shipment cards
- Shipment table
- Search bar
- Buttons
- Driver list
- Charts
- Forms
- Status badges

### Frontend Technologies

| Component | Technologies / Tools |
| --- | --- |
| Markup | HTML |
| Styling | CSS, Sass, Tailwind CSS, Bootstrap |
| Behaviour | JavaScript, TypeScript |
| Libraries / Frameworks | React, Angular, Vue |
| Build Tools | Vite, Webpack, Babel |

### HTML, CSS and JavaScript

Students can remember the three core technologies using:

```
HTML       → Structure
CSS        → Appearance
JavaScript → Behaviour
```

### HTML

HTML defines what exists on the page.

```html
<h1>SwiftLogix</h1>

<p>Track your shipment</p>

<button>Track Shipment</button>
```

### CSS

CSS controls how those elements look.

```css
button {
    padding: 10px;
    border-radius: 6px;
}
```

### JavaScript

JavaScript controls behaviour.

```jsx
trackButton.addEventListener("click", function () {
    alert("Searching shipment...");
});
```

A useful question:

> **HTML asks: What exists?**
> 
> 
> **CSS asks: How does it look?**
> 
> **JavaScript asks: What does it do?**
> 

## Role of a Frontend Developer

A frontend developer typically:

- Builds user interfaces.
- Creates responsive layouts.
- Implements designs using HTML, CSS, and JavaScript.
- Adds interactions.
- Connects the frontend to backend APIs.
- Handles loading, success, and error states.
- Improves frontend performance.
- Ensures usability across devices and browsers.

## Backend Development

### What is Backend Development?

Backend Development focuses on the logic that runs behind the scenes.

Users usually do not directly see backend operations.

For SwiftLogix, the backend may:

```
Create shipment
Update shipment
Delete shipment
Assign driver
Authenticate user
Calculate shipping cost
Retrieve shipment information
Store delivery updates
Generate reports
```

### Backend Technologies

| Component | Technologies |
| --- | --- |
| Languages / Runtime | Node.js, Python, Java, PHP, C# |
| Frameworks | Express, Django, Flask, Spring Boot, ASP.NET Core |
| Databases | MongoDB, MySQL, PostgreSQL, SQLite |
| APIs | REST, GraphQL |
| Authentication | Passport.js, OAuth 2.0, JWT-based approaches |
| Hosting | AWS, Azure, DigitalOcean and similar platforms |

## Role of a Backend Developer

A backend developer typically:

- Creates server-side logic.
- Builds APIs.
- Connects applications with databases.
- Handles authentication and authorization.
- Processes business rules.
- Integrates third-party systems.
- Maintains performance and scalability.

## Frontend and Backend Working Together

Suppose a SwiftLogix employee searches:

```
Shipment S102
```

The application flow may look like:

```
Employee
   ↓
Frontend
   ↓
"Give me shipment S102"
   ↓
API
   ↓
Backend
   ↓
Database
   ↓
Find shipment S102
   ↓
Backend
   ↓
API Response
   ↓
Frontend
   ↓
Display shipment
```

The frontend and backend are therefore not competing parts of an application.

They work together.

## Database

A database stores application information persistently.

For SwiftLogix, the database may contain:

| shipment_id | customer | destination | status |
| --- | --- | --- | --- |
| S101 | Nykaa | Ahmedabad | Delivered |
| S102 | Amazon | Mumbai | In Transit |
| S103 | Flipkart | Jaipur | Delayed |

Other database records may include:

- Customers
- Drivers
- Warehouses
- Payments
- Delivery history
- Users
- Notifications

A simple way to explain it:

> **The database acts like the application's long-term memory.**
> 

## APIs

### What is an API?

An API allows different software components to communicate with one another.

Suppose the frontend asks:

```
Give me shipment S102.
```

The application may send a request such as:

```
GET /shipments/S102
```

The backend may respond with:

```json
{
  "shipmentId": "S102",
  "customer": "Amazon",
  "destination": "Mumbai",
  "status": "In Transit"
}
```

The frontend then converts that data into a visual interface.

## Where Does AI Fit?

SwiftLogix doesn't simply want a logistics application.

It wants an **AI-powered logistics application**.

AI may help solve problems such as:

- Predicting shipment delays
- Estimating delivery times
- Recommending drivers
- Optimizing routes
- Identifying unusual delivery patterns

## Complete SwiftLogix Architecture

```
                   USER
                     ↓
                  Browser
                     ↓
                FRONTEND
          HTML + CSS + JavaScript
                     ↓
                    API
                     ↓
                  BACKEND
                     ↓
              ┌──────┴───────┐
              ↓              ↓
          DATABASE        AI MODEL
              ↓              ↓
        Shipment Data    Predictions
```

## Common Full Stack Technology Combinations

Now that we understand the application layers, we can look at different technologies that can implement them.

## 1. MERN Stack

- **M**ongoDB — Database
- **E**xpress.js — Backend Framework
- **R**eact.js — Frontend Library
- **N**ode.js — Server Runtime

SwiftLogix could potentially use:

```
React
   ↓
Node + Express
   ↓
MongoDB
```

This is called the **MERN Stack**.

## 2. MEAN Stack

- MongoDB
- Express.js
- Angular
- Node.js

The major difference from MERN is that Angular is used instead of React.

## 3. MEVN Stack

- MongoDB
- Express.js
- Vue.js
- Node.js

Vue is used for the frontend.

## 4. LAMP Stack

- Linux
- Apache
- MySQL
- PHP

This is a long-established stack commonly used for server-rendered web applications.

## 5. Django Stack

Typical combination:

```
Frontend:
HTML + CSS + JavaScript

Backend:
Python + Django

Database:
PostgreSQL / SQLite
```

Example use case:

A logistics reporting or management system could use Django for backend logic.

## 6. .NET Stack

Typical combination:

- ASP.NET Core
- C#
- SQL Server
- Razor Pages, Blazor, or another frontend technology

Often seen in enterprise software environments.

## Common Technology Stack Components

| Layer / Area | Technologies |
| --- | --- |
| Frontend | HTML, CSS, JavaScript, React, Angular, Vue |
| Backend | Node.js, Django, Flask, PHP, ASP.NET Core, Spring |
| Database | MongoDB, MySQL, PostgreSQL |
| APIs | REST, GraphQL |
| Version Control | Git |
| Code Collaboration | GitHub, GitLab |
| Deployment / Cloud | AWS, Azure, Vercel and similar platforms |
| Automation / DevOps | Docker, GitHub Actions |

## Why Learn Full Stack Development?

Full Stack Development gives learners the ability to understand how an application works end to end.

Benefits include:

- End-to-end project understanding
- Ability to connect frontend and backend
- Better understanding of system architecture
- Greater flexibility across development roles
- Ability to build complete projects

However:

> Being a Full Stack Developer does not necessarily mean being an expert in every technology.
> 

It means understanding how the major application layers interact and being able to work across them when needed.

# Basics of Web Development

!image.png

## What is the Internet?

!image.png

##
