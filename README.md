# portfolio-project-app


Job Hunter Tracker
Project Overview

Job Hunter Tracker is a full-stack MERN application designed to simplify job hunting. Users can search for remote job listings via the Remotive API, view detailed job descriptions, save jobs, and track the progress of their applications. The app offers a clean, modern design with a focus on user experience.

Features

Search Jobs: Users can search remote jobs with filters like category or company.

Job Details: Each listing has a dedicated detail page with full job descriptions and a link to apply.

Save Jobs: Users can save jobs to their personal tracker.

Application Pipeline: Users can categorize saved jobs into statuses like “Applied” or “Interviewing.”

Settings: Users can toggle themes (light/dark) and clear their saved job data.

Tech Stack

Frontend: React, React Router, Tailwind CSS, Framer Motion.

Backend: Node.js with Express.

Database: MongoDB for saved jobs and statuses.

API: Remotive Remote Jobs API.

Setup Instructions

Clone the repository:
git clone <your-repo-url>

Install dependencies:

Frontend: Navigate into the client folder and run npm install.

Backend: Navigate into the server folder and run npm install.

Set up environment variables:

Create a .env file in the server directory.

Add your MongoDB connection string as MONGO_URI.

Start the development servers:

Backend: Run npm start in the server folder.

Frontend: Run npm start in the client folder.

Usage

Visit the homepage to see your application pipeline and stats.

Use the search page to find jobs based on category, company, or keywords.

View job details and click “Save” to add them to your tracker.

In the pipeline, update statuses (e.g., Applied, Interviewing) and manage your job search process.

In settings, toggle light/dark themes or clear saved data.

Milestones
Milestone 1 (Week 1)

Defined project scope, selected the Remotive API.

Completed Functional Spec detailing the app’s goals and timeline.

Created Figma wireframes for all key views (Dashboard, Search, Detail, Settings).

Established GitHub repo with main, dev, and milestone branches.

Milestone 2 (Week 2)

Build the React frontend with Tailwind styling and React Router.

Integrate the Remotive API to display job listings with filters.

Milestone 3 (Week 3)

Implement job detail view.

Connect MongoDB to store saved jobs and statuses.

Create CRUD operations for status tracking.

Milestone 4 (Week 4)

Enhance UI with Framer Motion animations and theme toggle.

Refine user settings page and add final UX touches.

Test the app, finalize the README, and prepare for submission.

Attribution

All job data is provided by the Remotive Remote Jobs API. Each job listing includes a link back to the original Remotive posting, and a footer note credits Remotive as the data source.

Future Enhancements

Add user authentication so users can log in and manage their own job lists.

Implement notifications for job deadlines or status updates.

Add more filters (e.g., salary range, job type) to enhance search functionality.

Include a drag-and-drop Kanban board for managing job application stages visually.

Integrate a second API, perhaps for company reviews or salary insights.
