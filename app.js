import { getUser, logout } from './services/fetch-utils';

// State

// Action Handlers
async function handlePageLoad() {
    const user = await getUser();
    if (!user) location.replace('../');
    display();
}



handlePageLoad();
