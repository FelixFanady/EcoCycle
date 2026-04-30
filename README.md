# EcoCycle - Marketplace Premium Light-Mode Edition

## ✅ Fitur Yang Sudah Diimplementasikan

### Backend & Authentication

- ✓ **File-Based Database**: `account.json` untuk menyimpan user credentials
- ✓ **Session Management**: Express-session dengan secure sessions
- ✓ **Protected Routes**: Middleware untuk buyer/seller dashboard (login required)
- ✓ **Register System**: User bisa membuat akun baru dengan role selection
- ✓ **Login/Logout**: Credentials check dari database dengan session tracking

### UI/UX Design

- ✓ **Light Mode Only**: Elegant, clean, premium aesthetic (NO dark mode)
- ✓ **Google Fonts**: Poppins (headings) + Inter (body text)
- ✓ **Large Base Font**: 18px untuk aksesibilitas generasi semua usia
- ✓ **Full-Width Layouts**: Elemen besar, tidak ada design kotak-kotak kecil
- ✓ **Zig-Zag Sections**: Layout berselang-seling (image left-text right, kemudian reverse)
- ✓ **Premium Components**: Navbar sticky modern, footer comprehensive dengan newsletter
- ✓ **Video Placeholder**: Testimonial section dengan video player placeholder
- ✓ **Smooth Animations**: Hover transitions halus pada semua interactive elements
- ✓ **Responsive Design**: Mobile-first, semua halaman responsif (mobile/tablet/desktop)
- ✓ **Tap Targets**: Min 48px untuk aksesibilitas touch

### Halaman (6 Pages)

1. **Home (index.html)** - Hero section besar, 3x zig-zag features, testimonial video placeholder, CTA
2. **Register (register.html)** - Form besar untuk create account dengan role selection
3. **Login (login.html)** - Form premium centered dengan demo credentials info
4. **Buyer Dashboard (buyer-dashboard.html)** - PROTECTED: KPI cards, recent orders, recommendations
5. **Seller Dashboard (seller-dashboard.html)** - PROTECTED: Revenue metrics, product listing form, shipping status
6. **Product Detail (product-detail.html)** - Large product image, impact box, related products

### Components (Reusable & Injected via JS)

- ✓ Navbar: Modern sticky header dengan responsive mobile menu
- ✓ Footer: 4-column premium footer dengan brand, links, resources, newsletter subscription

### Tech Stack

- **Frontend**: HTML5, CSS3 (Google Fonts, Flexbox/Grid, Media Queries)
- **JavaScript**: Vanilla ES6 (component injection, error handling)
- **Backend**: Node.js + Express.js
- **Session**: Express-session untuk persistent login
- **Database**: account.json (file-based mock database)

---

## 📂 Struktur Folder

```
EcoCycle/
├── server.js                          # Express server dengan auth & session
├── account.json                       # User database (username, password, role)
├── package.json                       # Dependencies (express, express-session)
├── package-lock.json
│
├── public/
│   ├── css/
│   │   └── styles.css                # Global styling: light-mode, zig-zag, premium
│   ├── js/
│   │   ├── app.js                    # Global JS (error handling)
│   │   └── components/
│   │       ├── navbar.js             # Navbar injection logic
│   │       └── footer.js             # Footer injection logic
│   └── components/
│       ├── navbar.html               # Navbar markup (injected)
│       └── footer.html               # Footer markup (injected)
│
├── views/
│   ├── index.html                    # Home - Hero + Zig-Zag + Testimonial + CTA
│   ├── register.html                 # Register form
│   ├── login.html                    # Login form
│   ├── buyer-dashboard.html          # PROTECTED Buyer Dashboard
│   ├── seller-dashboard.html         # PROTECTED Seller Dashboard
│   └── product-detail.html           # Product detail + recommendations
│
└── .git/
```

---

## 🚀 Cara Jalankan

### 1. Install Dependencies

```bash
cd d:\EcoCycle
npm install
```

### 2. Jalankan Server

```bash
npm start
```

Server akan jalan di: **http://localhost:8069**

### 3. Akses Website

- **Home**: http://localhost:8069/
- **Login**: http://localhost:8069/login
- **Register**: http://localhost:8069/register

---

## 👤 Demo Credentials

Gunakan di Login page:

**Buyer Role:**

- Username: `buyer`
- Password: `buyer`
- → Redirect ke `/buyer-dashboard` (PROTECTED)

**Seller Role:**

- Username: `seller`
- Password: `seller`
- → Redirect ke `/seller-dashboard` (PROTECTED)

**Register:**

- Bisa membuat akun baru dengan username/password/role
- Data akan disimpan di `account.json`
- Langsung login otomatis ke dashboard

---

## 🎨 Color Palette (Light Mode)

- **Forest Green**: #1f5f3a (Primary CTA, headings accents)
- **Mint Green**: #a8e6b8 (Secondary buttons, badges)
- **Earth Brown**: #8b6f47 (Accent)
- **Off-White**: #f9f8f5 (Background gradient)
- **Text Primary**: #1a1a1a (Main text)
- **Text Secondary**: #4a4a4a (Body text)
- **Text Muted**: #7a7a7a (Captions, secondary info)
- **Border**: #e8e8e0 (Subtle dividers)

---

## 📝 CSS Features (Premium Light-Mode)

- **Typography**: Poppins 700 (headings), Inter 400-600 (body)
- **Shadows**: 3 levels (sm, md, lg) untuk depth hierarchy
- **Spacing**: 8px grid system (consistent padding/margins)
- **Transitions**: 300ms cubic-bezier untuk smooth animations
- **Radius**: 12px standard, 16px large cards
- **Flexbox + Grid**: Responsive layouts tanpa Bootstrap

---

## 🔐 Protected Routes (Middleware)

Buyer & Seller Dashboard memerlukan session login:

```javascript
function protectedRoute(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  next();
}
```

Jika tidak login, akan redirect ke `/login`

---

## 📱 Responsiveness

- **Mobile** (< 768px): Single column, full-width, touch-friendly
- **Tablet** (768px - 1024px): 2 columns untuk grid layouts
- **Desktop** (> 1024px): 3 columns, full zig-zag sections

---

## ✨ HCI Design Principles Diterapkan

1. **Learnability**: Clear navigation, consistent patterns
2. **Efficiency**: Fast access to key info (KPI cards), minimal clicks
3. **Memorability**: Consistent color scheme, familiar UI patterns
4. **Error Prevention**: Form validation, demo credentials info
5. **Error Recovery**: Error messages dengan clear instructions
6. **Satisfaction**: Smooth animations, premium aesthetics
7. **Accessibility**:
   - 18px base font untuk readability
   - 48px min tap targets
   - Semantic HTML5
   - Color contrast compliant
   - Mobile-first responsive
8. **Aesthetic & Minimalist Design**: Clean light-mode, premium typography

---

## 📋 Checklist Persyaratan

- ✅ Bahasa English pada semua UI/copy
- ✅ Mobile-First Design, responsif semua devices
- ✅ Modular components (navbar/footer reusable)
- ✅ Express server port 8069
- ✅ Autentikasi buyer/seller dengan hardcoded + file-based
- ✅ 6 halaman (Home, Login, Register, Buyer Dashboard, Seller Dashboard, Product Detail)
- ✅ Light mode only, premium aesthetic
- ✅ Google Fonts (Poppins + Inter)
- ✅ Large base font 18px
- ✅ Full-width layouts, bukan tiny cards
- ✅ Zig-zag section layout
- ✅ Premium navbar/footer
- ✅ Video placeholder dalam testimonial
- ✅ Smooth hover transitions
- ✅ Protected dashboard routes

---

## 🛠️ Developer Notes

### Menambah User Baru

Edit `account.json`:

```json
{
  "id": 3,
  "username": "newuser",
  "password": "password123",
  "role": "buyer"
}
```

### Mengubah Port

Edit di `server.js`: `const PORT = 8069;`

### Custom CSS

Edit `public/css/styles.css` dengan CSS variables di `:root`

### Menambah Halaman Baru

1. Create `views/new-page.html`
2. Add route di `server.js`:
   ```javascript
   app.get("/new-page", (req, res) => {
     res.sendFile(view("new-page.html"));
   });
   ```

---

**Created**: April 30, 2026
**Status**: Production-Ready for HCI Assignment
**Version**: 2.0 (Upgraded with Premium Light-Mode)
