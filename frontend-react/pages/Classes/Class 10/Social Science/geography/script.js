// JavaScript for Class 10 Social Science

// Function to show login modal
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Function to close login modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Navigation functions for chapters
function navigateToChapter(chapterName) {
    // Map chapter names to their respective paths
    const chapterPaths = {
        'Chapter1': 'Chapter1/chapter1.html',
        'Chapter2': 'Chapter2/chapter2.html',
        'Chapter3': 'Chapter3/chapter3.html',
        'Chapter4': 'Chapter4/chapter4.html',
        'Chapter5': 'Chapter5/chapter5.html',
        'Chapter6': 'Chapter6/chapter6.html',
        'Chapter7': 'Chapter7/chapter7.html'
    };

    const path = chapterPaths[chapterName];
    if (path) {
        window.location.href = path;
    } else {
        alert('Navigation path not found for ' + chapterName);
    }
}

// Function to navigate to subjects
function navigateToSubject(subjectName) {
    // Map subject names to their respective paths
    const subjectPaths = {
        'History': 'history/index.html',
        'Geography': 'geography/index.html',
        'Political Science': 'politicalScience/index.html',
        'Economics': 'economics/index.html'
    };

    const path = subjectPaths[subjectName];
    if (path) {
        window.location.href = path;
    } else {
        alert('Navigation path not found for ' + subjectName);
    }
}

// Function to handle search functionality (placeholder)
function searchContent(query) {
    // Placeholder for search implementation
    alert('Search functionality for "' + query + '" would be implemented here.');
}

// Function to track progress (placeholder)
function trackProgress() {
    // Placeholder for progress tracking
    alert('Progress tracking would be implemented here.');
}

// Function to load dynamic content (placeholder)
function loadContent() {
    // Placeholder for dynamic content loading
    console.log('Loading content...');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadContent();
});
