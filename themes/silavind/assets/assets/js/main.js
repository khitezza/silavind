const themeToggleBtn = document.getElementById('theme-toggle-btn');
lightIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#FFF2DF" d="M12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-2.69L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20z"/></svg>'
darkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#1a1a1a" d="M10 2c-1.82 0-3.53.5-5 1.35C8 5.08 10 8.3 10 12s-2 6.92-5 8.65C6.47 21.5 8.18 22 10 22a10 10 0 0 0 10-10A10 10 0 0 0 10 2"/></svg>'

const currentTheme = document.documentElement.getAttribute('data-theme');
themeToggleBtn.innerHTML = currentTheme === 'dark' ? lightIcon : darkIcon;

themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = darkIcon;
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = lightIcon;
        localStorage.setItem('theme', 'dark');
    }
});

homeTabSwitch = function (tabName) {
    const writings = document.getElementById('writings');
    const switchWritings = document.getElementById('switchWritings');
    const projects = document.getElementById('projects');
    const switchProjects = document.getElementById('switchProjects');

    if (tabName === 'writings') {
        writings.style.display = 'flex';
        switchWritings.style.color = 'var(--color-accent)';
        projects.style.display = 'none';
        switchProjects.style.color = 'var(--color-primary)';
    } else {
        writings.style.display = 'none';
        switchWritings.style.color = 'var(--color-primary)';
        projects.style.display = 'flex';
        switchProjects.style.color = 'var(--color-accent)';
    }
}