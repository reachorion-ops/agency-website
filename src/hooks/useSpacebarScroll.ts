import { useEffect } from 'react';

/**
 * useSpacebarScroll:
 * Ensures pressing Spacebar (or Shift+Spacebar) consistently and smoothly scrolls
 * the viewport or the active modal dossier without getting hijacked by previously-focused
 * buttons or links. Preserves native typing inside text inputs, textareas, and editable fields.
 */
export function useSpacebarScroll() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Space key
      if (e.key !== ' ' && e.key !== 'Spacebar' && e.code !== 'Space') {
        return;
      }

      // Preserve native space input when actively typing in forms
      const activeEl = document.activeElement as HTMLElement | null;
      if (activeEl) {
        const tagName = activeEl.tagName?.toLowerCase();
        if (
          tagName === 'input' ||
          tagName === 'textarea' ||
          tagName === 'select' ||
          activeEl.isContentEditable
        ) {
          return;
        }
      }

      // Prevent default action (prevents re-triggering focused buttons or erratic browser jumps)
      e.preventDefault();

      // If a button or link was focused, blur it so focus returns cleanly to document
      if (activeEl && (activeEl.tagName?.toLowerCase() === 'button' || activeEl.tagName?.toLowerCase() === 'a')) {
        activeEl.blur();
      }

      const direction = e.shiftKey ? -1 : 1;

      // 1. If an active modal is open with an internal scroll container, scroll it smoothly
      const activeModal = document.querySelector<HTMLElement>('[data-modal-scroll="true"]');
      if (activeModal) {
        const scrollAmount = Math.max(200, activeModal.clientHeight * 0.8);
        activeModal.scrollBy({
          top: scrollAmount * direction,
          behavior: 'smooth',
        });
        return;
      }

      // 2. Otherwise, smoothly scroll the main window viewport
      const scrollAmount = Math.max(300, window.innerHeight * 0.85);
      window.scrollBy({
        top: scrollAmount * direction,
        behavior: 'smooth',
      });
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
