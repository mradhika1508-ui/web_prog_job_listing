**JobBoard India 🇮🇳**

> A modern, front-end job board platform built for the Indian tech ecosystem.
> Designed with speed, accessibility, and clean UX in mind.
JobBoard India is a responsive web application that helps users discover and explore technology jobs from leading Indian companies such as Razorpay, Swiggy, CRED, Zoho, Freshworks, and more.

The project focuses on one simple idea:
**Give users the most important job information instantly — without clutter.**

 **Highlights**

* Fast and responsive job browsing experience
* Smart filtering and debounced search
* Indian salary and location formatting
* Save jobs locally without logging in
* Accessible UI with keyboard-friendly interactions
* Mobile-first sidebar and modal design
* Pure HTML, CSS, and JavaScript — no frameworks required

**Preview**

The platform includes:

* A clean landing page with a searchable job grid
* A collapsible filter sidebar
* Interactive job cards with company, role, salary, tech stack, and location
* A dedicated Saved Jobs section
* A polished Apply modal with validation and upload simulation


**Features**

## 1. Dynamic Job Grid

Job listings are rendered dynamically using JavaScript, making the UI easy to scale and update.

Each card displays:

* Company name
* Job title
* Location
* Salary package in INR
* Experience level
* Job type
* Required technologies

## 2. Advanced Search & Filtering

Users can quickly narrow down opportunities using:

* Search by role, company, or technology
* Location filter
* Experience filter
* Job type filter
* Category filter

The filtering system is powered by a single `applyFilters()` function that keeps all filter states synchronized.

To improve performance, the search bar uses debouncing so filtering is not triggered on every keystroke.

## 3. Saved Jobs System

Users can bookmark interesting jobs for later.

Saved jobs are stored using browser local storage, so they remain available even after refreshing the page.

Features include:

* Save / unsave instantly
* Dedicated Saved Jobs section
* Persistent state between sessions

---

## 4. Application Modal

Instead of redirecting users to another page, the application process is handled through a built-in modal.

The modal includes:

* Name and email fields
* Resume upload simulation
* Cover letter field with character counter
* Form validation
* Success and error feedback states

Supported file formats:

```text
PDF, DOC, DOCX
```

Example validation checks:

* Empty fields
* Invalid email format
* Unsupported file type

---

## 5. Fully Responsive Design

The application is optimized for:

* Desktop
* Tablet
* Mobile devices

On smaller screens:

* The filter panel becomes a slide-out drawer
* The job grid adapts automatically
* Modals and buttons become touch-friendly

---

## 6. Accessibility First

Accessibility was treated as a core requirement rather than an afterthought.

Implemented improvements include:

* Semantic HTML5 elements
* Keyboard navigation support
* Proper label associations
* ARIA live regions for announcements
* Focus trapping inside modals
* High contrast and readable typography

---

# Tech Stack

| Technology        | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| HTML5             | Semantic page structure                          |
| CSS3              | Responsive layout, design system, animations     |
| JavaScript (ES6+) | Filtering, rendering, local storage, modal logic |
| Google Fonts      | Typography using Anybody and Geist               |

---

#  Project Structure

```text
jobboard-india/
│
├── index.html      # Main layout and modal structure
├── styles.css      # Styling, layout, responsive design system
├── app.js          # Job rendering, filters, local storage, validation
└── README.md       # Documentation
```

---

#  How It Works

## Job Rendering

The application stores job data inside JavaScript and renders it dynamically into the DOM.

This makes it easy to later replace the local data with an API or backend service.

## Filter Flow

Whenever the user changes a search query or filter:

1. Current filter values are collected
2. `applyFilters()` checks each job
3. Matching jobs are rendered
4. The results count updates automatically

---

# Indian-Centric Design

Unlike generic international job boards, this project is specifically localized for Indian users.

### Salary Format

```text
₹8–12 LPA
₹25–40 LPA
₹1.2 Cr per annum
```

### Target Locations

* Bengaluru
* Chennai
* Hyderabad
* Mumbai
* Pune
* Gurugram
* Remote (India)

### Typical Company Types

* FinTech
* SaaS
* Startups
* Product-based companies

---

# Design Philosophy

JobBoard India follows a simple design principle:

> "Clarity at a glance."

The result is a clean, minimal, and professional experience that feels more like a polished product than a classroom assignment.
---

#  License

This project is released under the MIT License.

You are free to use, modify, and distribute it for personal or academic purposes.

---

#  Author Notes

This project was built as a front-end demonstration of:

* Responsive UI design
* DOM manipulation
* State management using vanilla JavaScript
* Accessibility best practices
* Real-world product thinking

It is intentionally lightweight, framework-free, and easy to understand for both developers and reviewers.
