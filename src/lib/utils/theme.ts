
export function applyStoredTheme() {
  const theme = localStorage.getItem('theme');
  const isDark = theme === 'dark' ? true : false;;
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}