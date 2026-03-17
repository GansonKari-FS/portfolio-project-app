Job Hunter Tracker
Project Overview

Job Hunter Tracker is a full-stack MERN application designed to help users search for remote job listings and track their job applications. The application integrates with the Remotive Remote Jobs API to retrieve real-time job data and allows users to save jobs and monitor their application progress through different stages.

The application focuses on providing a clean and intuitive Soft Modern user interface while demonstrating full-stack development skills including React, Node.js, Express, and MongoDB.

Functional Specification
Application Purpose

The purpose of Job Hunter Tracker is to help users organize their job search by allowing them to:

• Search remote job listings
• View detailed job information
• Save interesting jobs
• Track their application progress

The system is designed to make job searching easier by combining job discovery with application tracking.

Target Users

The target users for this application include:

• Individuals searching for remote jobs
• Students preparing to enter the workforce
• Professionals looking for career opportunities

Core Features
Dashboard

The dashboard will serve as the main landing page for the application.

Features include:
• Overview of saved jobs
• Job application pipeline (Saved, Applied, Interview, Offer, Rejected)
• Quick access to search functionality

Job Search

The search page allows users to search for remote jobs using the Remotive API.

Features include:
• Keyword job search
• Filter options
• Job listing cards showing title, company, and location
• Link to detailed job view

Job Detail Page

The job detail page provides full information about a specific job.

Features include:
• Job title and company information
• Job description
• Tags or categories
• Button to save job to tracker
• Link to apply on the original Remotive listing

Each job will include attribution to Remotive as required by their API terms.

User / Settings Page

The settings page allows users to manage their saved job data and preferences.

Features include:
• View saved jobs
• Update job application status
• Remove saved jobs
• Toggle theme (optional enhancement)

Data Storage

The application will use MongoDB to store saved job listings and application status data.

Data stored will include:

• Job ID
• Job title
• Company name
• Location
• Job status (Saved, Applied, Interview, Offer, Rejected)
• Date saved

API Integration

The application will retrieve job data using the Remotive Remote Jobs API.

Endpoint used:

GET https://remotive.com/api/remote-jobs

The API returns JSON data that includes job listings, company information, and application links.

Each job displayed in the application will include attribution to Remotive and link back to the original job listing.

Technology Stack

Frontend
• React
• React Router
• Tailwind CSS
• Framer Motion

Backend
• Node.js
• Express

Database
• MongoDB

API
• Remotive Remote Jobs API

Milestone Timeline
Week 1

• Decide project concept and theme
• Choose API
• Create Functional Specification
• Design wireframes in Figma
• Set up Git repository and project branches

Week 2

• Build React frontend
• Implement routing and UI layout
• Connect application to Remotive API
• Display job search results

Week 3

• Build backend with Node.js and Express
• Connect MongoDB database
• Implement job saving functionality
• Add job status tracking

Week 4

• Refine user interface and design
• Implement animations and UI polish
• Test application functionality
• Finalize documentation and project submission

Attribution

Job data is provided by the Remotive Remote Jobs API.

All job listings include a link back to the original posting on Remotive to comply with API usage requirements.

Future Enhancements

Possible improvements for future versions of the application include:

• User authentication and accounts
• Advanced job filters (salary, experience level, etc.)
• Drag-and-drop job application pipeline
• Email notifications for saved jobs
• Integration with additional job APIs

## Library Tutorial – Axios

For this exercise, I chose to implement the **Axios JavaScript library**. Axios is a promise-based HTTP client used to send requests to APIs and retrieve data in JavaScript applications.

Axios simplifies the process of fetching data from external services compared to the native `fetch()` API because it automatically handles JSON responses and provides cleaner syntax for asynchronous requests.

### Why I Chose Axios

I chose Axios because my Portfolio Project (CareerPathTracker) requires retrieving data from an external API to simulate job listings and recruiter contact information. Axios makes it easier to send HTTP requests and handle responses inside React applications using `async/await`.

### Installation

To install Axios in a React project, run:

### Importing Axios

Axios is imported into a component using:

### Example Usage

In this project, Axios is used inside the `useEffect` hook to retrieve user data from the Random User API and transform that data into job listings.

The response data is then mapped into a format used by the dashboard components.

### API Used

Random User Generator API  
https://randomuser.me

### Axios Documentation

https://axios-http.com

### Video Tutorial

Link to my tutorial video on Microsoft Stream:

[PASTE STREAM LINK HERE]
