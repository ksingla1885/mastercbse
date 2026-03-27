// Utility for creating consistent page templates
export function createPageTemplate(title, content = '') {
    return `
        <div class="page-content">
            <div class="page-header">
                <h1 class="page-title">${title}</h1>
                <div class="page-actions">
                    <button class="btn btn-outline">
                        <i class="fas fa-download"></i> Export
                    </button>
                </div>
            </div>
            
            <div class="page-body">
                ${content}
            </div>
        </div>
    `;
}

export function createEmptyState(icon, title, description, action = null) {
    return `
        <div class="empty-state">
            <div class="empty-state-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <h3>${title}</h3>
            <p>${description}</p>
            ${action || ''}
        </div>
    `;
}

export function createCard(title, content, footer = '', className = '') {
    return `
        <div class="card ${className}">
            <div class="card-header">
                <h3 class="card-title">${title}</h3>
            </div>
            <div class="card-body">
                ${content}
            </div>
            ${footer ? `<div class="card-footer">${footer}</div>` : ''}
        </div>
    `;
}
