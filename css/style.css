/* ===== Base ===== */
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  --color-primary: #1d4ed8;
  --color-primary-dark: #1e3a8a;
  --color-muted: #555555;
  --color-border: #e2e2e2;
  --max-width: 960px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-primary);
  text-decoration: underline;
}

a:hover,
a:focus {
  color: var(--color-primary-dark);
}

/* Visible focus outline for keyboard users — do not remove */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* ===== Skip link ===== */
.skip-link {
  position: absolute;
  left: -999px;
  top: 0;
  background: var(--color-primary);
  color: #fff;
  padding: 0.5rem 1rem;
  z-index: 100;
}

.skip-link:focus {
  left: 0;
}

/* ===== Header / Nav ===== */
header {
  border-bottom: 1px solid var(--color-border);
}

.site-header-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
}

.site-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
}

.site-title a {
  text-decoration: none;
  color: var(--color-text);
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.25rem;
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
}

nav a[aria-current="page"] {
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
}

/* ===== Main layout ===== */
main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

section {
  margin-bottom: 2.5rem;
}

h1 {
  font-size: 2rem;
  margin-top: 0;
}

h2 {
  font-size: 1.5rem;
}

/* ===== Project cards ===== */
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

.project-card {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
}

.project-card img {
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.project-card h3 {
  margin: 0 0 0.5rem;
}

/* ===== Forms ===== */
.form-field {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
}

.form-field label {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.form-field input,
.form-field textarea {
  padding: 0.6rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

.form-field input[aria-invalid="true"],
.form-field textarea[aria-invalid="true"] {
  border-color: #c0392b;
}

.error-message {
  color: #c0392b;
  font-size: 0.9rem;
  min-height: 1.2em;
}

.required {
  color: #c0392b;
}

button[type="submit"] {
  background: var(--color-primary);
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background: var(--color-primary-dark);
}

.success-message {
  background: #e6f4ea;
  border: 1px solid #34a853;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

/* ===== Footer ===== */
footer {
  border-top: 1px solid var(--color-border);
  text-align: center;
  padding: 1.5rem;
  color: var(--color-muted);
  font-size: 0.9rem;
}

footer ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0;
  margin: 0.5rem 0 0;
}

/* ===== Utility ===== */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
