// Show login modal after 30 seconds or on certain interactions
let modalShown = false;

function showLoginModal() {
    if (!modalShown) {
        document.getElementById('loginModal').style.display = 'block';
        modalShown = true;
    }
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Auto-show modal after 30 seconds
setTimeout(function() {
    if (!modalShown && Math.random() < 0.7) { // 70% chance to show
        showLoginModal();
    }
}, 30000);

// Show modal on scroll or after visiting 2-3 sections
let sectionsVisited = 0;
window.addEventListener('scroll', function() {
    if (!modalShown && sectionsVisited >= 2) {
        showLoginModal();
    }
});

// Track section visits
document.querySelectorAll('.class-card').forEach(card => {
    card.addEventListener('click', function() {
        sectionsVisited++;
    });
});

function navigateToClass(className) {
    // Map class names to their respective paths
    const classPaths = {
        'Class 1': 'Classes/Class 1/index.html',
        'Class 2': 'Classes/Class 2/index.html',
        'Class 3': 'Classes/Class 3/index.html',
        'Class 4': 'Classes/Class 4/index.html',
        'Class 5': 'Classes/Class 5/index.html',
        'Class 6': 'Classes/Class 6/index.html',
        'Class 7': 'Classes/Class 7/index.html',
        'Class 8': 'Classes/Class 8/index.html',
        'Class 9': 'Classes/Class 9/index.html',
        'Class 10': 'Classes/Class 10/index.html',
        'Class 11': 'Classes/Class 11/index.html',
        'Class 12': 'Classes/Class 12/index.html',
        'Medical': 'Classes/Class 11/index.html#medical', // Optional anchor for streams
        'Non-Medical': 'Classes/Class 11/index.html#non-medical',
        'Commerce': 'Classes/Class 11/index.html#commerce',
        'Humanities': 'Classes/Class 11/index.html#humanities'
    };

    const path = classPaths[className];
    if (path) {
        window.location.href = path;
    } else {
        alert('Navigation path not found for ' + className);
    }
}

function navigateToSubject(subjectName) {
    // Map subject names to their respective paths
    const subjectPaths = {
        'English': '../English/index.html',
        'Hindi': '../Hindi/index.html',
        'Mathematics': '../Mathematics/index.html',
        'Science': 'index.html',
        'Social Science': '../Social Science/index.html',
        'Computer Applications': '../Computer Applications/index.html',
        'Sanskrit': '../Sanskrit/index.html'
    };

    const path = subjectPaths[subjectName];
    if (path) {
        window.location.href = path;
    } else {
        alert('Navigation path not found for ' + subjectName);
    }
}
