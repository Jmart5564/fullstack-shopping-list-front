import { getUser, logout } from './services/fetch-utils';

// State

// Action Handlers
async function handlePageLoad() {
    const user = await getUser();
    if (!user) location.replace('../');
    display();
}

async function handleSignOut() {
    logout();
}

function createLogoutButton(button, { handleSignOut }) {
    button.addEventListener('click', () => {
        handleSignOut();
    });
    return () => {};
}

const CreateLogoutButton = createLogoutButton(
    document.querySelector('#logout'),
    { handleSignOut }
);

function display() {
    CreateLogoutButton();
}

handlePageLoad();
