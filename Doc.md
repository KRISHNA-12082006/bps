# 🖥️ **School Website Structure – Developer/Designer Guide**

---

### 🌐 **NAVBAR** (`<nav id="main-navbar">`)

```text
HOME | ACADEMICS | ADMISSIONS | GALLERY | CONTACT US | ABOUT US
```

* Sticky top bar
* Responsive (hamburger menu for mobile)
* Brand/logo on the left, menu items on the right

---

### 🏠 **HOME PAGE** (`<section id="home">`)

#### **1️⃣ Hero Section** (`.hero-section`)

* `display: flex;` (2-column layout)

**Left:**

```html
<img src="school-building.jpg" alt="School Campus">
```

**Right: Form** (`#hero-contact-form`)

```html
<form>
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  <input type="tel" placeholder="Phone Number">
  <button type="submit">Enquire Now</button>
</form>
```

---

#### **2️⃣ Mission & Vision Section** (`.mission-vision`)

* `display: flex;`
* Text on  **left** , image on **right**

```html
<h2>Welcome to [School Name]</h2>
<p>[Insert paragraph about the school’s mission, core values, and educational goals]</p>
```

---

#### **3️⃣ Upcoming Events Section** (`#upcoming-events`)

* Fetch dynamically from backend (`/api/events?upcoming=true`)
* Show cards if data exists

```html
<div class="event-card">
  <img src="event.jpg">
  <h3>Annual Day</h3>
  <p>25th January</p>
</div>
```

---

### 🔻 **FOOTER** (`<footer id="site-footer">`)

```html
<ul>
  <li><a href="/academics">Academics</a></li>
  <li><a href="/admissions">Admissions</a></li>
  <li><a href="/gallery">Gallery</a></li>
</ul>
<p>© 2025 [School Name]. All rights reserved.</p>
```

* Include upcoming events if available
* Social media links (optional)

---

### 📘 **ACADEMICS PAGE** (`/academics`)

* Grid or tab layout for:
  * Grade-wise curriculum
  * Schedule
* Include a registration form (popup/modal or inline)
* Admission process steps (`<ol>`)

```html
<form id="course-inquiry-form">
  <input type="text" placeholder="Student Name">
  <select name="grade">
    <option value="Grade 1">Grade 1</option>
    ...
  </select>
  <button type="submit">Submit</button>
</form>
```

---

### 🖼️ **GALLERY PAGE** (`/gallery`)

* Event filter dropdown or tabs (Annual Day, Sports, etc.)
* Masonry or grid layout for images
* Modal/lightbox on image click

```html
<div class="gallery-grid">
  <img src="event1.jpg">
  <img src="event2.jpg">
</div>
```

---

### 📍 **CONTACT US PAGE** (`/contact`)

* Google Map Embed (iframe)
* Contact Info:
  * School Address
  * Phone number (tel:)
  * Email (mailto:)

**Contact Form** (connected to backend API)

```html
<form id="contact-form">
  <input type="text" placeholder="Your Name">
  <input type="email" placeholder="Email">
  <textarea placeholder="Your Message"></textarea>
  <button type="submit">Send Message</button>
</form>
```

---

### 🏫 **ABOUT US PAGE** (`/about`)

* Timeline or story section for school history
* Highlight milestones, awards, alumni, affiliations

```html
<section class="about-timeline">
  <div class="year">2010</div>
  <p>School Founded</p>
  ...
</section>
```

---

### 📱 **Responsiveness & Tech Suggestions**

* **Framework:** HTML, CSS, JavaScript
* **Forms:** Connect via AJAX / Fetch API

---

---

---
