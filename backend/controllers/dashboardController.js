/**
 * Dashboard Controller
 * Handles dashboard routing and redirection based on user class and stream
 */

// Stream configurations for different classes
const STREAM_CONFIG = {
  9: {
    streams: [],
    dashboard: 'class_9_default'
  },
  10: {
    streams: [],
    dashboard: 'class_10_default'
  },
  11: {
    streams: ['pcm', 'pcb', 'commerce', 'humanities'],
    dashboards: {
      'pcm': 'class_11_pcm',
      'pcb': 'class_11_pcb',
      'commerce': 'class_11_commerce',
      'humanities': 'class_11_humanities'
    }
  },
  12: {
    streams: ['pcm', 'pcb', 'commerce', 'humanities'],
    dashboards: {
      'pcm': 'class_12_pcm',
      'pcb': 'class_12_pcb',
      'commerce': 'class_12_commerce',
      'humanities': 'class_12_humanities'
    }
  }
};

// Subject mappings for each stream
const SUBJECT_MAPPING = {
  'pcm': {
    name: 'Physics, Chemistry & Mathematics',
    subjects: ['Physics', 'Chemistry', 'Mathematics']
  },
  'pcb': {
    name: 'Physics, Chemistry & Biology',
    subjects: ['Physics', 'Chemistry', 'Biology']
  },
  'commerce': {
    name: 'Commerce Stream',
    subjects: ['Accounts', 'Business Studies', 'Economics']
  },
  'humanities': {
    name: 'Humanities Stream',
    subjects: ['English', 'History', 'Geography', 'Political Science']
  }
};

/**
 * Get dashboard HTML file path based on class and stream
 * @param {number} userClass - User's class (9-12)
 * @param {string} stream - User's stream (for classes 11-12)
 * @returns {string} Dashboard HTML file path
 */
function getDashboardPath(userClass, stream = null) {
  // HTML dashboard paths are no longer used.
  return null;
}

/**
 * Get dashboard route path based on class and stream
 * @param {number} userClass - User's class (9-12)
 * @param {string} stream - User's stream (for classes 11-12)
 * @returns {string} Dashboard route path
 */
function getDashboardRoute(userClass, stream = null) {
  const classNum = parseInt(userClass);
  const normalizedStream = (stream || '').toLowerCase().trim();

  // For classes 9-10
  if (classNum === 9 || classNum === 10) {
    return `/dashboard/${classNum}_default`;
  }

  // For classes 11-12 with streams
  if ((classNum === 11 || classNum === 12) && normalizedStream) {
    return `/dashboard/${classNum}_${normalizedStream}`;
  }

  // Fallback
  return '/dashboard/default';
}

/**
 * Get subjects for a given stream
 * @param {string} stream - Stream identifier
 * @returns {Object} Subject information
 */
function getSubjectsForStream(stream) {
  const normalizedStream = (stream || '').toLowerCase().trim();
  return SUBJECT_MAPPING[normalizedStream] || SUBJECT_MAPPING['commerce'];
}

/**
 * Serve dashboard HTML file
 */
function serveDashboard(req, res) {
  res.status(404).json({ error: "HTML dashboards are deprecated. Use the React frontend." });
}

/**
 * Get dashboard data API endpoint
 * Returns user dashboard data as JSON
 */
function getDashboardData(req, res) {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Not authenticated'
      });
    }

    const dashboardRoute = getDashboardRoute(user.class, user.stream);
    const subjects = getSubjectsForStream(user.stream);

    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        class: user.class,
        stream: user.stream
      },
      dashboard: {
        route: dashboardRoute,
        subjects: subjects.subjects,
        streamName: subjects.name
      }
    });

  } catch (error) {
    console.error('Dashboard data error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data'
    });
  }
}

/**
 * Redirect to appropriate dashboard based on user class and stream
 */
function redirectToDashboard(req, res) {
  try {
    const user = req.user;

    if (!user || !user.class) {
      return res.redirect('/login?message=Please log in to access your dashboard&type=warning');
    }

    const dashboardRoute = getDashboardRoute(user.class, user.stream);
    res.redirect(dashboardRoute);

  } catch (error) {
    console.error('Dashboard redirect error:', error);
    res.redirect('/login?message=Error accessing dashboard&type=error');
  }
}

module.exports = {
  getDashboardPath,
  getDashboardRoute,
  getSubjectsForStream,
  serveDashboard,
  getDashboardData,
  redirectToDashboard,
  STREAM_CONFIG,
  SUBJECT_MAPPING
};
