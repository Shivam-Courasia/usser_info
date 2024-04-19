document.addEventListener('DOMContentLoaded', () => {
    displayUserData();
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    document.querySelectorAll('.theme-selector button').forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.textContent.includes('Light') ? 'light' : 'dark';
            setTheme(theme);
        });
    });
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const village = document.getElementById('village').value;
        const city = document.getElementById('city').value;
        const userData = { name, phone, village, city };
        localStorage.setItem('userData', JSON.stringify(userData));
        displayUserData();
    });
});

function displayUserData() {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
        const display = document.getElementById('userInfoDisplay');
        display.innerHTML = `<p>Name: ${storedData.name}</p>
                             <p>Phone: ${storedData.phone}</p>
                             <p>Village: ${storedData.village}</p>
                             <p>City: ${storedData.city}</p>`;
    }
}

function setTheme(theme) {
    document.body.className = theme + "-mode";
    localStorage.setItem('theme', theme);
}
