// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Обработчики для открытия и закрытия меню и форм
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = document.querySelector('.dropdown-menu').contains(event.target);
        const isClickInsideButton = document.querySelector('.btn.menu').contains(event.target);

        if (!isClickInsideMenu && !isClickInsideButton) {
            document.querySelector('.dropdown-menu').classList.remove('show');
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelector('.dropdown-menu').classList.remove('show');
            closeLoginForm();
            closeRegisterForm();
            closeBetForm();
        }
    });

    document.querySelector('.btn.menu').addEventListener('click', function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Добавьте обработчики для ставок
    const betButtons = document.querySelectorAll('.bet-btn');
    betButtons.forEach(button => {
        button.addEventListener('click', function () {
            openBetForm(this);
        });
    });
});

function toggleMenu() {
    document.getElementById('dropdownMenu').classList.toggle('show');
}

function openLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}

function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}

function openRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
}

function closeRegisterForm() {
    document.getElementById('registerForm').style.display = 'none';
}

function openBetForm(button) {
    const team = button.getAttribute('data-team');
    const odds = button.getAttribute('data-odds');
    document.getElementById('betTeam').value = team;
    document.getElementById('betOdds').value = odds;
    document.getElementById('betForm').style.display = 'block';
}

function closeBetForm() {
    document.getElementById('betForm').style.display = 'none';
}

function submitBetForm() {
    const team = document.getElementById('betTeam').value;
    const odds = document.getElementById('betOdds').value;
    const amount = document.getElementById('betAmount').value;
    alert(`Ставка сделана на ${team} с коэффициентом ${odds} на сумму ${amount}`);
    closeBetForm();
    // Здесь можно добавить логику для отправки данных на сервер
}

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        element.textContent = translations[language][key];
    });
}

const translations = {
    en: {
        support: 'SUPPORT',
        market: 'MARKET',
        menu: 'MENU',
        home: 'Home',
        bets: 'Bets',
        contact: 'Contact',
        login: 'LOG IN',
        register: 'REGISTER',
        placeYourBets: 'Place Your Bets',
        team1: 'Navi',
        team2: 'Astralis',
        team3: 'Faze',
        team4: 'Liquid',
        team5: 'OG',
        team6: 'EG',
        team7: 'Virtus.pro',
        team8: 'Secret',
        team9: 'G2',
        team10: 'Fnatic',
        team11: 'T1',
        team12: 'DRX',
        loginHeading: 'Login',
        username: 'Username',
        password: 'Password',
        loginButton: 'Log In',
        registerHeading: 'Register',
        newUsername: 'Username',
        newPassword: 'Password',
        email: 'Email',
        registerButton: 'Register'
    },
    ru: {
        support: 'ПОДДЕРЖКА',
        market: 'РЫНОК',
        menu: 'МЕНЮ',
        home: 'Главная',
        bets: 'Ставки',
        contact: 'Контакты',
        login: 'ВОЙТИ',
        register: 'РЕГИСТРАЦИЯ',
        placeYourBets: 'Сделайте ставку',
        team1: 'Navi',
        team2: 'Astralis',
        team3: 'Faze',
        team4: 'Liquid',
        team5: 'OG',
        team6: 'EG',
        team7: 'Virtus.pro',
        team8: 'Secret',
        team9: 'G2',
        team10: 'Fnatic',
        team11: 'T1',
        team12: 'DRX',
        loginHeading: 'Войти',
        username: 'Имя пользователя',
        password: 'Пароль',
        loginButton: 'Войти',
        registerHeading: 'Регистрация',
        newUsername: 'Имя пользователя',
        newPassword: 'Пароль',
        email: 'Email',
        registerButton: 'Зарегистрироваться'
    }
};

// Добавьте этот код в самое начало файла
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const dropdown = document.querySelector('.dropdown-options');
        if (dropdown) {
            dropdown.style.display = 'none';
        }

        const loginForm = document.getElementById("loginForm");
        if (loginForm) {
            loginForm.style.display = 'none';
        }

        const registerForm = document.getElementById("registerForm");
        if (registerForm) {
            registerForm.style.display = 'none';
        }

        const menu = document.getElementById("dropdownMenu");
        if (menu) {
            menu.classList.remove('show');
        }
    }
});


console.log("Script loaded successfully");

function openLoginForm() {
    console.log("Opening login form");
    document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm() {
    console.log("Closing login form");
    document.getElementById("loginForm").style.display = "none";
}

function openRegisterForm() {
    console.log("Opening register form");
    document.getElementById("registerForm").style.display = "block";
}

function closeRegisterForm() {
    console.log("Closing register form");
    document.getElementById("registerForm").style.display = "none";
}

function submitLoginForm() {
    console.log("Submitting login form");
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(`Username: ${username}, Password: ${password}`);

    // Отправка данных на сервер
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                alert('Login successful');
                closeLoginForm();
            } else {
                alert('Login failed');
            }
        })
        .catch(error => console.error('Error:', error));
}

function submitRegisterForm() {
    console.log("Submitting register form");
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const email = document.getElementById('email').value;

    console.log(`Username: ${username}, Password: ${password}, Email: ${email}`);

    // Отправка данных на сервер
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                alert('Registration successful');
                closeRegisterForm();
            } else {
                alert('Registration failed');
            }
        })
        .catch(error => console.error('Error:', error));
}

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-options');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function selectOption(value) {
    const selectedOption = document.querySelector('.selected-option');
    const dropdown = document.querySelector('.dropdown-options');
    selectedOption.textContent = value === 'all' ? 'Все игры' : document.querySelector(`.option[onclick="selectOption('${value}')"]`).textContent;
    dropdown.style.display = 'none';
    filterGames(value);
}

function filterGames(value) {
    const matches = document.querySelectorAll('.match');
    matches.forEach(match => {
        match.style.display = (value === 'all' || match.dataset.game === value) ? 'flex' : 'none';
    });
}

// Функция для переключения отображения меню:

function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.menu') && !event.target.matches('.menu *')) {
        const dropdownMenu = document.getElementById("dropdownMenu");
        if (dropdownMenu.classList.contains("show")) {
            dropdownMenu.classList.remove("show");
        }
    }
}
