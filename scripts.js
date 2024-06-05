document.addEventListener('DOMContentLoaded', function () {
    // Обработчики для открытия и закрытия меню и форм
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = document.querySelector('.dropdown-menu').contains(event.target);
        const isClickInsideButton = document.querySelector('.btn.menu').contains(event.target);
        const isClickInsideGameFilter = document.querySelector('.custom-select').contains(event.target);

        if (!isClickInsideMenu && !isClickInsideButton) {
            document.querySelector('.dropdown-menu').classList.remove('show');
        }

        if (!isClickInsideGameFilter) {
            closeDropdown();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelector('.dropdown-menu').classList.remove('show');
            closeLoginForm();
            closeRegisterForm();
            closeBetForm();
            closeDropdown();
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

    // Обработчик для изменения языка
    const languageSelector = document.querySelector('.language select');
    languageSelector.addEventListener('change', function () {
        changeLanguage(this.value);
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

function closeDropdown() {
    const dropdown = document.querySelector('.dropdown-options');
    dropdown.style.display = 'none';
}

window.onclick = function (event) {
    if (!event.target.matches('.menu') && !event.target.matches('.menu *')) {
        const dropdownMenu = document.getElementById("dropdownMenu");
        if (dropdownMenu.classList.contains("show")) {
            dropdownMenu.classList.remove("show");
        }
    }

    if (!event.target.matches('.selected-option') && !event.target.closest('.dropdown-options')) {
        closeDropdown();
    }
}
