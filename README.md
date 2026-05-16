# 📚 ExamMaster Pro

**Create, Practice, Master – Anytime, Anywhere.**

A powerful, fully offline‑capable exam preparation suite for students, teachers, and self‑learners. Works on Android via WebView or directly in any modern browser.

---

## ✨ Features

### 🎯 Core Features
- **Full Exam Lifecycle** – Create, edit, delete, and practice exams with multiple‑choice questions (4 options + explanation).
- **Step‑by‑Step Exam Wizard** – Intuitive 3‑step process: Details → Questions → Review & Save.
- **Practice Mode** – Built‑in timer (with pause/resume), progress bar, and instant feedback.
- **Detailed Results** – Review each answer with correct/incorrect indicators and rich explanations.
- **Offline‑First** – All data stored locally using IndexedDB. No internet required after first load.

### 🤖 AI‑Powered Question Generation
- **Exam Professor** – Generate tailored prompts for any subject. Copy and paste into ChatGPT, Claude, or any AI.
- **Groq AI Integration** – Direct API connection to generate questions instantly (free API key required).
- **OpenTriviaDB Integration** – Fetch thousands of free trivia questions.
- **Paste JSON Questions** – Import structured question sets in bulk.

### 🛠️ Advanced JSON Processor
- **Tree/Code Editor** – Full JSON editor with syntax highlighting, search, validation, and formatting.
- **File Manager** – Create, save, delete, import, and export JSON files.
- **Sync with Main App** – Seamlessly transfer exams between the JSON editor and the main app.

### 💎 Premium Model
- **Free Tier** – 2 exams, 5 questions per exam, 10 total questions.
- **Premium Tier** – Unlimited exams and questions. One‑time offline activation.

### 🎨 Modern UI
- Dark glassmorphism theme with smooth animations.
- SVG icons throughout – no external fonts required.
- Fully responsive – works on phones, tablets, and desktops.
- Collapsible question cards for efficient space usage.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| **Database** | IndexedDB (via native JS API) |
| **Math Rendering** | KaTeX |
| **Markdown Parsing** | Marked.js |
| **JSON Editing** | JSONEditor.js |
| **AI Integration** | Groq API, OpenTriviaDB API |
| **OCR** | Tesseract.js |
| **PDF Parsing** | PDF.js |
| **Hosting** | Static hosting (GitHub Pages, Netlify, Vercel) |

---

## 📁 Project Structure


---

## 🛠️ Installation

### Option 1: Use Online (Easiest)
The app is hosted on **GitHub Pages**. Visit:

https://github.com/Melkamukebede/exampro/


### Option 2: Android (WebView)
1. Clone the repository.
2. Place all files in `app/src/main/assets/` of an Android project.
3. Use the provided `MainActivity.kt` (Kotlin) to load the app in a WebView.

### Option 3: Local PC
1. Clone the repository.
2. Open `index.html` in any modern browser.
3. All features work offline after the first load.

---

## 🔧 Configuration

### Groq API Key
1. Get a free API key from [console.groq.com](https://console.groq.com/keys).
2. Open the JSON Editor → Groq AI → enter your API key.
3. The key is saved locally in your browser (never sent to any server).

### Premium Activation
1. Open the Payment Dashboard.
2. Send payment to the provided account.
3. Generate a code and send SMS to the admin.
4. Enter the password received to unlock unlimited access.

---

## 📱 Android Integration

The app is designed to run inside an Android `WebView`. A complete `MainActivity.kt` is provided with:
- Native file import/export.
- SMS activation.
- Full‑screen immersive mode.
- External JSON file handling.

---

## 🌐 Browser vs WebView

| Environment | Limits |
|-------------|--------|
| **Android WebView** | Free tier limits enforced (upgrade to Premium for unlimited). |
| **Regular Browser** | All features unlocked – completely free. |

---

## 📊 Performance

- Loads instantly on modern devices.
- IndexedDB handles thousands of questions without performance degradation.
- All libraries are loaded locally (no CDN dependencies for core features).

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [KaTeX](https://katex.org/) – Math rendering
- [Marked.js](https://marked.js.org/) – Markdown parsing
- [JSONEditor](https://github.com/josdejong/jsoneditor) – JSON editing
- [Tesseract.js](https://tesseract.projectnaptha.com/) – OCR
- [PDF.js](https://mozilla.github.io/pdf.js/) – PDF parsing
- [Groq](https://groq.com/) – AI API
- [OpenTriviaDB](https://opentdb.com/) – Trivia questions

---

## 🌟 Final Words

*"The future of exam preparation is here – offline, fast, and completely under your control."*
