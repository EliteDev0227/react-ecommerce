export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export function openMenu() {
  return {
    type: OPEN_MENU,
  };
}

export function closeMenu() {
  console.log('Close Menu action');
  return {
    type: CLOSE_MENU,
  };
}

export const getMenuOpen = (state) => state.menuOpen;
