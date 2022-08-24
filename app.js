import { checkAuth, logout } from './services/fetch-utils.js';

// State

// Action Handlers
checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    console.log('button clicked');
    logout();
});


