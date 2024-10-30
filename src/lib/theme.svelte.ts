let _theme = $state('dark');

const theme = $derived(_theme);

export function themeFacade() {
  return {
    theme,
    toggle: () => {
      _theme = (_theme === 'light') ? 'dark' : 'light';
    }
  }
}