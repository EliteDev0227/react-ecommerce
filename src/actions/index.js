export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export function openMenu() {
  return {
    type: OPEN_MENU,
  };
}

export function closeMenu() {
  return {
    type: CLOSE_MENU,
  };
}
