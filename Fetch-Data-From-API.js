//You need to create a html file to navigate changes on browser
///Simply include this file inside <script> tag

// Fetch users from the JSONPlaceholder API
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}

// Display users on the page
function displayUsers(users) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h2>Users List:</h2>";

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `<strong>${user.name}</strong> (${user.email})`;
        outputDiv.appendChild(userDiv);
    });
}

// Event listener for the Fetch Users button
document.getElementById('fetchBtn').addEventListener('click', async () => {
    const users = await fetchUsers();
    displayUsers(users);
});
