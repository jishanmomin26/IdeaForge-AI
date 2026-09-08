# IdeaForge AI — AI Development Rules

## 1. Project Identity

Project Name: IdeaForge AI

Project Type: College Mini Project

Domain: AI in Entrepreneurship

AI Application: Generative AI

Academic Project Title:

IdeaForge AI: An AI-Powered Startup Idea Generation System Using Generative AI

---

## 2. Project Objective

IdeaForge AI is a frontend-only web application that helps aspiring entrepreneurs generate startup ideas using Generative AI.

The user provides information about their interests, skills, budget, target audience, and startup goal.

The application sends the information to the Gemini API and presents a structured startup concept.

---

## 3. Technology Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Gemini API
- Git
- GitHub
- Vercel

---

## 4. Project Scope

This is intentionally a small college mini project.

The application must remain frontend-only.

Do NOT add:

- Firebase
- Firestore
- Realtime Database
- Backend
- Node/Express backend
- Authentication
- User accounts
- Admin dashboard
- Payment system
- Database
- ML model training
- Complex analytics
- Unnecessary third-party services

---

## 5. Core Application Flow

Home
↓
Generate Startup Idea
↓
User enters startup information
↓
Gemini API
↓
AI-generated startup idea
↓
Result Page
↓
Generate Another Idea

---

## 6. User Inputs

The generator should collect:

- Startup Interest
- Skills
- Budget
- Target Audience
- Startup Goal

---

## 7. AI Output

The generated startup idea should contain:

- Startup Name
- Tagline
- Description
- Problem Statement
- Solution
- Target Audience
- Business Model
- Revenue Model
- MVP Features

---

## 8. Pages

The application contains:

1. Home
2. Generate
3. Result
4. About

Do not add additional pages unless explicitly requested.

---

## 9. Design Direction

Theme:

Clean, professional, light-mode web application design similar to a modern educational/school website.

Background:

White / very light gray (#F8FAFC / #FFFFFF)

Primary brand color:

Professional Blue (#2563EB)

Visual characteristics:

- Primary buttons: Blue with white text
- Main text: Dark gray / near-black (#0F172A)
- Secondary text: Medium gray (#64748B)
- Cards: White with subtle borders (#E2E8F0)
- Shadows: Very subtle (shadow-sm)
- Clean and spacious layout
- Simple professional navigation
- Minimal animations
- No dark-mode-first design
- No neon colors
- No glowing effects
- No excessive gradients
- No excessive glassmorphism
- No futuristic AI dashboard aesthetic
- Approachable, trustworthy, student-project appropriate

---

## 10. Development Rules

### Rule 1

Work on ONE milestone at a time.

### Rule 2

Read the relevant documentation in `/docs` before implementation.

### Rule 3

Follow `ROADMAP.md` for milestone order.

### Rule 4

Follow `PROJECT_PLAN.md` for project requirements.

### Rule 5

Follow `DESIGN_SYSTEM.md` for visual decisions.

### Rule 6

Do not modify unrelated files.

### Rule 7

Reuse existing components whenever possible.

### Rule 8

Do not create duplicate components.

### Rule 9

Use JavaScript only.

Do NOT introduce TypeScript.

### Rule 10

Use Tailwind CSS for styling.

### Rule 11

Do not introduce unnecessary dependencies.

### Rule 12

Keep API logic separate from UI components.

Gemini API logic belongs inside the service layer.

### Rule 13

Do not hard-code API keys.

### Rule 14

Never commit `.env.local`.

### Rule 15

Test every milestone before moving to the next milestone.

### Rule 16

Do not implement future milestones early.

### Rule 17

Do not redesign existing completed work without explicit permission.

---

## 11. Git Rules

The developer controls Git operations.

Antigravity should NOT automatically:

- git add
- git commit
- git push
- git reset
- git clean
- git merge
- git rebase

Unless the user explicitly requests the operation.

After completing a milestone, provide:

- Recommended commit message
- Files changed
- Testing performed

Then stop.

---

## 12. Terminal Rules

Antigravity may use terminal commands when required for:

- Installing project dependencies
- Running development server
- Running build
- Running lint/tests
- Inspecting project structure

Do not execute destructive commands without user approval.

Never delete the project or reset Git history.

---

## 13. Implementation Workflow

For every milestone:

1. Read the relevant documentation.
2. Inspect the current project.
3. Explain the implementation plan.
4. Identify files to create.
5. Identify files to modify.
6. Implement only the current milestone.
7. Test the implementation.
8. Report changed files.
9. Report test results.
10. Provide Git commit message.
11. STOP.

---

## 14. Environment Variables

Local Gemini configuration must use `.env.local`.

Example:

VITE_GEMINI_API_KEY=your_api_key_here

The real API key must never be placed directly into source files.

`.env.local` must remain ignored by Git.

---

## 15. Frontend-Only API Limitation

This application intentionally uses a frontend-only architecture.

Environment variables prevent accidental GitHub commits but do not make a browser-accessible API key completely secret after deployment.

This limitation must be acknowledged in project documentation.

---

## 16. Quality Standards

Code should be:

- Clean
- Readable
- Modular
- Reusable
- Responsive
- Maintainable
- Appropriate for a college mini project

Avoid unnecessary abstraction.

Do not over-engineer simple functionality.

---

## 17. Completion Rule

After completing the requested milestone:

STOP.

Do not automatically start the next milestone.

Wait for the user's confirmation.