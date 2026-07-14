# Education Document Request System

Built an Educational Document Request & Approval System with role-based access, multi-document request workflow, and admin-controlled verification.

## Overview:
Education Document Request System is a full-stack web application that streamlines the process of requesting, reviewing, approving, and delivering official educational documents. The system uses role-based authentication to separate student and administrator access, ensuring a secure and organized document management workflow.

---

## Features: 
#### Authentication & Authorization

- JWT-based authentication with secure password hashing using bcryptjs.
- Role-based access control (Student & Admin).
- Students cannot access admin routes.
- Admins cannot access student-only routes.
- Protected API routes and pages.

#### Student Features

- Student registration and login.
- Create new document requests.
- Request summary page before submission.
- Track request status.
- Download approved PDF documents.
- Profile management.

#### Admin Features

- Secure admin login (manual account creation only).
- Review incoming document requests.
- Approve or reject requests.
- Upload official PDF documents.

---

## Technology ⚙️

- ### Front-End
  - Next.js
  - TypeScript
  - tailwindcss
  - shadcn
  - axios
  - react-icons
- ### Back-End
  - Next.js API route
  - mongoose
  - bcryptjs
  - jsonwebtoken ( JWT )


---

## Author 👨‍💻:

- [Mehedi Hasan](https://github.com/mehediweb01)

## Contact me 📞:

- [LinkedIn](https://www.linkedin.com/in/mehediweb01/)
- [GitHub](https://github.com/mehediweb01)
- [Facebook](https://www.facebook.com/mehediweb01)
- Email: mehedihasan87456@gmail.com

### Thank you 🫂
