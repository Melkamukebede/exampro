// utils.js - Helper functions
const Utils = {
    generateId: () => Date.now() + '-' + Math.random().toString(36).substr(2, 9),
    escapeHtml: (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },
    showToast: (message, type = 'info') => {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast show toast-${type}`;
        setTimeout(() => toast.classList.remove('show'), 3000);
    },
    formatTime: (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
};

// app.js - Main Application
class ExamMasterApp {
    constructor() {
        this.storage = new StorageManager();
        this.premium = this.storage.getPremiumStatus();
        this.currentView = 'dashboard';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupTheme();
        this.checkFirstRun();
        this.renderView();
        window.addEventListener('hashchange', () => this.renderView());
    }

    setupNavigation() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    window.location.hash = href.substring(1);
                }
            });
        });
    }

    setupTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.getElementById('themeToggle').addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    checkFirstRun() {
        if (!this.storage.getExams().length) {
            // Add sample exams
            this.storage.saveExam({
                id: 'sample1',
                title: 'Sample Biology Quiz',
                subject: 'Biology',
                difficulty: 'Easy',
                timeLimit: 10,
                questions: [
                    {
                        id: 'q1',
                        text: 'What is the powerhouse of the cell?',
                        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi body'],
                        correct: 1,
                        explanation: 'Mitochondria produce ATP.'
                    },
                    // ... more questions
                ]
            });
        }
    }

    renderView() {
        const hash = window.location.hash.slice(1) || 'dashboard';
        this.currentView = hash;
        const container = document.getElementById('view-container');
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${hash}`);
        });

        // Route to appropriate view
        switch(hash) {
            case 'dashboard': this.renderDashboard(container); break;
            case 'create': this.renderCreateExam(container); break;
            case 'files': this.renderFileManager(container); break;
            case 'json-processor': this.renderJsonProcessor(container); break;
            case 'results': this.renderResults(container); break;
            case 'practice': this.renderPractice(container); break;
            default: container.innerHTML = '<h2>Page not found</h2>';
        }
    }

    renderDashboard(container) {
        const exams = this.storage.getExams();
        const stats = this.storage.getStats();
        container.innerHTML = `
            <div class="grid">
                <div class="card glass">
                    <h3>Welcome back!</h3>
                    <p>You have ${exams.length} exam${exams.length !== 1 ? 's' : ''} available.</p>
                    <div class="stats">
                        <div>Total Questions: ${stats.totalQuestions}</div>
                        <div>Completed Practices: ${stats.completedPractices}</div>
                    </div>
                </div>
                ${this.renderPremiumStatusCard()}
            </div>
            <div class="card">
                <h2>Recent Exams</h2>
                <div class="exam-list">
                    ${exams.slice(0, 5).map(exam => `
                        <div class="exam-item">
                            <div>
                                <strong>${Utils.escapeHtml(exam.title)}</strong>
                                <small>${exam.subject} · ${exam.questions.length} questions</small>
                            </div>
                            <button class="btn btn-primary" data-practice="${exam.id}">Practice</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        // Attach practice listeners
        container.querySelectorAll('[data-practice]').forEach(btn => {
            btn.addEventListener('click', () => {
                window.location.hash = `practice?id=${btn.dataset.practice}`;
            });
        });
    }

    // ... (Other view rendering methods: create, files, json processor, results, practice)
}

// Storage Manager
class StorageManager {
    constructor() {
        this.version = '1.0';
        this.initStorage();
    }

    initStorage() {
        if (!localStorage.getItem('exams')) {
            localStorage.setItem('exams', JSON.stringify([]));
        }
        if (!localStorage.getItem('results')) {
            localStorage.setItem('results', JSON.stringify([]));
        }
        if (!localStorage.getItem('premium')) {
            localStorage.setItem('premium', JSON.stringify({ active: false, code: null }));
        }
    }

    getExams() { return JSON.parse(localStorage.getItem('exams')); }
    saveExam(exam) {
        const exams = this.getExams();
        const index = exams.findIndex(e => e.id === exam.id);
        if (index >= 0) exams[index] = exam;
        else exams.push(exam);
        localStorage.setItem('exams', JSON.stringify(exams));
    }
    deleteExam(id) {
        const exams = this.getExams().filter(e => e.id !== id);
        localStorage.setItem('exams', JSON.stringify(exams));
    }

    getPremiumStatus() { return JSON.parse(localStorage.getItem('premium')); }
    setPremiumStatus(status) { localStorage.setItem('premium', JSON.stringify(status)); }

    // ... results, stats, etc.
}

// Initialize app when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ExamMasterApp();
});