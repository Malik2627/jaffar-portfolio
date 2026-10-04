# JAFFAR PORTFOLIO 🚀

> **Digital Resume & Portfolio Website**  
> **Assignment:** GUVI Full Stack Development  
> **Student:** Jaffar Malik B.L. | B.Sc. Computer Science (A.I. & M.L.)

---

## 📌 Project Description

**JAFFAR PORTFOLIO** is a modern, high-performance, responsive digital resume and personal portfolio website engineered for **Jaffar Malik B.L.**, a B.Sc. Computer Science student specializing in Artificial Intelligence and Machine Learning at Takshashila University.

Built using pure **HTML5**, **Vanilla CSS3**, and **Vanilla JavaScript**, this project demonstrates complete compliance with assignment criteria, zero reliance on external frameworks or heavy libraries, high WCAG accessibility, and full compatibility with **GitHub Pages**.

---

## ✨ Key Features

1. **Hero Section**: Two-column layout with status badge, professional titles, specialization chips, double CTAs, interactive profile avatar, and floating tech badges.
2. **About Me Section**: Personal bio, core strengths checklist, and academic statistics row.
3. **Technical Skills**: Grid of skill categories (Programming, Web Dev, AI & ML, Tools) with animated IntersectionObserver progress bars.
4. **Education Timeline**: Vertical timeline featuring degree milestones, institution details, and semester GPA scores.
5. **Featured Projects**: Responsive project cards featuring PNP (Prep N Play), BHONZ AI, House Price Prediction, Spam Detection, Calories Prediction, and AURISTRA'26 E.D.I.T.H.
6. **Experience & Achievements**: Milestone cards for HackIndia 24-Hour Hackathon, College 48-Hour Hackathon, and Scientia Event.
7. **Certifications & Learning**: Structured coursework cards with authentic labeling.
8. **Dedicated Resume CTA**: Prominent call-to-action banner for direct PDF resume downloads.
9. **Interactive Contact Form**: Frontend JavaScript form validation, real-time error cleanup, horizontal shake feedback, and accessible alert banner.
10. **Light / Dark Theme System**: CSS Custom Properties theme switching system with `localStorage` persistence and OS `prefers-color-scheme` auto-detection.
11. **Scroll Reveal Animations**: Smooth entry animations respecting `prefers-reduced-motion`.
12. **Complete Responsiveness**: Custom media queries optimized across 320px, 375px, 425px, 768px, 1024px, and 1440px viewports.

---

## 📁 Project Directory Structure

```text
jaffar-portfolio/
├── index.html          # Semantic HTML5 page structure
├── style.css           # Vanilla CSS3 styling system & CSS Custom Properties
├── script.js           # Vanilla JavaScript ES6+ interactive modules
├── README.md           # Documentation & GitHub Pages deployment guide
└── assets/
    ├── images/         # Profile avatar & preview media
    └── icons/          # Custom SVG & favicon icons
```

---

## 🛠️ Technology Stack

- **Markup**: HTML5 (Semantic elements, ARIA attributes)
- **Styling**: Vanilla CSS3 (Custom Properties, Flexbox, Grid, Glassmorphism, Keyframes)
- **Scripting**: Vanilla JavaScript ES6+ (DOM Modules, IntersectionObserver, LocalStorage)
- **Deployment**: GitHub Pages (Relative asset paths, root-relative execution)

---

## 🌐 GitHub Pages Deployment Instructions

1. **Push Repository to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Final submission - JAFFAR PORTFOLIO"
   git branch -M main
   git remote add origin https://github.com/<your-username>/jaffar-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository page on GitHub.
   - Select **Settings** > **Pages** from the left navigation menu.
   - Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)`.
   - Click **Save**.

3. **Live URL**:
   Your site will be live at:
   `https://<your-username>.github.io/jaffar-portfolio/`

---

## ✅ Deployment Audit Checklist

- [x] `index.html` loads and parses valid HTML5 semantics cleanly.
- [x] `style.css` provides variables in `:root` (light) and `[data-theme="dark"]` (dark).
- [x] `script.js` handles modules cleanly without console errors.
- [x] Light and Dark modes switch seamlessly.
- [x] Theme choice persists in `localStorage` and restores automatically.
- [x] Mobile drawer navigation slides in and closes on Escape key or backdrop tap.
- [x] Smooth scrolling enabled with header offset compensation.
- [x] Contact form validates required fields with shake feedback and clear messages.
- [x] All asset paths use relative paths (`assets/...`, `style.css`, `script.js`).
- [x] Zero external frameworks or Windows file path references.

---

## 📜 License & Author

Created by **Jaffar Malik B.L.** for the **GUVI Full Stack Development Assignment**.  
*B.Sc. Computer Science (A.I. & M.L.) Student*
