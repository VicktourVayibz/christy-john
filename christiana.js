/* ==========================================================================
   PREMIUM INTERACTIONS: CHRISTIANA'S LANDING PAGE INTERACTIVE EFFECTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // 1. DYNAMIC NAV EFFECTS ON SCROLL
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Adds a solid premium background and cleaner shadow once scrolled
            navbar.style.backgroundColor = 'rgba(9, 12, 18, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            navbar.style.padding = '5px 0'; // Slit typography refinement
        } else {
            // Returns to luxurious default airy blur transparent state
            navbar.style.backgroundColor = 'rgba(13, 17, 26, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '0';
        }
    });
});