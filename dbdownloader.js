// Random ship facts about MS Silja Europa
const shipFacts = [
    "MS Silja Europa was built in 1993 at Meyer Werft shipyard in Papenburg, Germany.",
    "The ship is 201 meters (660 feet) long and can carry up to 3,123 passengers.",
    "MS Silja Europa operates between Helsinki and Tallinn, crossing the Gulf of Finland.",
    "The ship features a promenade street with shops, restaurants, and entertainment venues.",
    "MS Silja Europa has 12 decks and can accommodate 460 cars or 60 trucks.",
    "The ship was revolutionary for its time with its distinctive white hull and blue stripe design.",
    "MS Silja Europa's top speed is approximately 21.5 knots (40 km/h).",
    "The vessel has been refurbished multiple times to maintain modern standards and amenities."
];

function dbdownloader() {
    const randomFact = shipFacts[Math.floor(Math.random() * shipFacts.length)];
    window.alert("🚢 Ship Fact:\n\n" + randomFact);
}

// Dark mode toggle functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Update button text
    const button = document.querySelector('.dark-mode-toggle');
    button.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Load dark mode preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        const button = document.querySelector('.dark-mode-toggle');
        if (button) {
            button.textContent = '☀️ Light Mode';
        }
    }
});