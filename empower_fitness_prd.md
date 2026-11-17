# Product Requirements Document (PRD)
**Project Name:** Empower Fitness & Dance Studio Web App
**Type:** Full-Stack Web Application (Frontend + Backend)

---

## 1. Project Overview
A comprehensive web application for "Empower Fitness & Dance Studio" to manage their digital presence, student admissions, fee collections (online/offline), and studio management. The app includes a public website, a student dashboard, and an admin panel.

## 2. Technology Stack
*   **Frontend & Backend Framework:** Next.js (App Router)
*   **Database:** MongoDB Atlas with Mongoose ORM
*   **Styling:** Tailwind CSS, Shadcn UI, Framer Motion (Animations)
*   **Authentication:** NextAuth.js (Auth.js) - Email/Password & Phone OTP
*   **Form Management:** React Hook Form + Zod (Validation)
*   **Payment Gateway:** Razorpay
*   **State Management:** Redux Toolkit
*   **Other Libraries:** `react-big-calendar` (Calendar), `jspdf` / `@react-pdf/renderer` (Receipt generation), Axios

---

## 3. Core Features & Requirements

### 3.1. Public Website (UI/UX)
*   **Home Page:** Hero section, clear "Join Now" CTA, mobile-responsive sidebar.
*   **About Us:** Trainer profile (Namrata Singh Rajput - Licensed Zumba, Strong Nation, Power Garba Instructor).
*   **Services:** Details about Zumba Fitness and Dance classes.
*   **Gallery:** High-quality studio session photos and videos.
*   **Contact:** Address (Ekta Nagar, Thelkabod, Kanker Chhattisgarh), contact numbers (7000206754, 9685606669), and Google Maps integration.

### 3.2. Digital Admission Form
*   Fully mobile-responsive form connected to the Razorpay payment gateway.
*   **Fields required:** Name, Photo upload, Age, Weight, Address, Contact, Qualification, Profession, DOB, Joining Date.
*   **Preferences:** Class Type (Zumba Fitness / Dance), Batch (Morning / Evening).
*   **Dance Forms:** Bollywood Style, Semi Classical, Bhangda, Garba, Hip-Hop, Western, Jazz, Salsa, Any Other.
*   **Terms & Conditions Checkbox:** "Fees in 1st week of every month. Non-refundable and Non-transferable."

### 3.3. User Portal (Student Dashboard)
*   **Authentication:** Secure login (Email/Phone).
*   **Dashboard:** Active plan, fee payment history, due amount tracker.
*   **Profile Management:** Edit bio details, current age, weight, and contact.
*   **Custom Calendar:** View upcoming classes, holidays, and studio events.
*   **Progress Tracker:** Visual chart for weight/BMI progress.
*   **Video Library (VOD):** Premium content access for missed classes.
*   **Receipts:** Download auto-generated PDF receipts for both online and offline payments.

### 3.4. Admin Panel (Studio Management)
*   **Dashboard:** Total active students, monthly revenue, pending dues overview.
*   **Member Management:** Approve/reject admissions, view/edit student profiles, freeze/pause memberships.
*   **Fee & Inventory Management:** Maintain a fee ledger. Ability to add **Offline (Cash/UPI)** payments manually which triggers the same automated receipt system.
*   **Notice Board:** Push announcements directly to the homepage and student dashboards.

### 3.5. Extra Growth Features
*   **Free Trial Booking:** Lead generation for new visitors.
*   **Automated Reminders:** WhatsApp/Email alerts for due fees.
*   **Attendance Tracker:** Admin marking system and student view.
*   **Mini E-commerce:** Simple store for fitness gear/t-shirts.
*   **Gamification:** Digital badges for attendance and performance.

---

## 4. Development Plan (Phases)

*   **Step 1: Database Architecture:** Setup Next.js, configure MongoDB schemas (User, Admission, FeeLedger, Event).
*   **Step 2: Frontend Layout:** Build mobile-first public pages and navigation.
*   **Step 3: Admission & Payments:** Integrate React Hook Form and Razorpay order/verify APIs.
*   **Step 4: Fee Ledger System:** Develop the receipt generation logic for both online webhooks and manual offline entries.
*   **Step 5: Portals (User & Admin):** Build protected routes, dashboards, Redux state slices, and the custom calendar.
*   **Step 6: Testing & Deployment:** Vercel deployment, responsive testing, and error handling refinement.

---

## 5. Folder Structure & Architecture

```text
empower-fitness-app/
├── src/
│   ├── app/                      # 🌐 APP ROUTER (Pages & API Routes)
│   │   ├── api/                  # 🔙 BACKEND ROUTES
│   │   │   ├── auth/             # [...nextauth]/route.ts, signup/route.ts
│   │   │   ├── admission/        # route.ts
│   │   │   ├── payment/          # create-order, verify, webhook routes
│   │   │   ├── admin/            # members, revenue routes
│   │   │   └── user/             # profile, attendance routes
│   │   │
│   │   ├── (public)/             # 🖥️ FRONTEND: PUBLIC PAGES
│   │   │   ├── page.tsx          # Home Page
│   │   │   ├── about/, services/, gallery/, contact/
│   │   │   └── admission/        # Registration Form
│   │   │
│   │   ├── (auth)/               # 🖥️ FRONTEND: AUTH
│   │   │   └── login/, signup/
│   │   │
│   │   ├── user/                 # 🖥️ FRONTEND: STUDENT PORTAL
│   │   │   ├── layout.tsx        # Sidebar & Topbar
│   │   │   ├── dashboard/, profile/, calendar/, fee-status/
│   │   │
│   │   └── admin/                # 🖥️ FRONTEND: ADMIN PORTAL
│   │       ├── layout.tsx        
│   │       ├── dashboard/, members/, fee-ledger/, notice-board/
│   │
│   ├── backend/                  # ⚙️ BACKEND LOGIC
│   │   ├── models/               # MongoDB Schemas
│   │   ├── controllers/          # Business Logic
│   │   ├── middlewares/          # withAuth, requireAdmin, errorHandler
│   │   ├── config/               # dbConnect, razorpayConfig
│   │   └── utils/                # generatePdfReceipt, sendEmailAlert
│   │
│   ├── store/                    # 🗃️ REDUX STORE
│   │   ├── store.ts, providers.tsx
│   │   └── slices/               # authSlice, userSlice, adminSlice
│   │
│   ├── components/               # 🧩 UI COMPONENTS
│   │   ├── ui/                   # Shadcn Base Components
│   │   ├── layout/               # Navbar, Footer, Sidebar
│   │   ├── forms/                # AdmissionForm, LoginForm
│   │   └── shared/               # CustomCalendar, ProgressTracker
│   │
│   └── lib/                      # 🛠️ UTILS & HELPERS
│       ├── axiosInstance.ts      # Axios setup with interceptors
│       └── formatters.ts         
│
├── .env.local                    # Environment Variables
├── tailwind.config.ts
└── package.json
```

### 5.1. Environment Variables (`.env.local`)
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster/empower_fitness
NEXTAUTH_SECRET=your_super_secret_key_here
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_yourkeyid
RAZORPAY_KEY_SECRET=your_razorpay_secret
EMAIL_SERVER_USER=your_email@gmail.com
EMAIL_SERVER_PASSWORD=your_app_password
```

### 5.2. Payment & Receipt Architecture
1. **Online Payment:** Frontend -> `/api/payment/create-order` -> Razorpay UI -> `/api/payment/verify` -> Update `FeeLedger` -> Auto-generate PDF.
2. **Offline Payment:** Admin Portal -> Manual entry form -> `/api/admin/fee-ledger` -> Update `FeeLedger` -> Trigger same PDF generation logic.

### 5.3. Error Handling Architecture
* **Backend:** Try-catch blocks wrapped in a custom `errorHandler` middleware. Returns standard JSON formats (e.g., `{ success: false, message: "Error msg", status: 400 }`).
* **Frontend:** Axios interceptors catch global errors (like 401 Unauthorized for auto-logout). Redux `rejectWithValue` updates the state, and UI libraries (like React Hot Toast) display user-friendly error popups.