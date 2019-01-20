# CovHack2019 Website!

- Replace the background images borrowed from fractal to make the site more original


Borrowed code/ideas from:
  - html5up fractal

Issues:
- Snap scrolling was broken in mobile mode as it was scrolling the page to the offset of the bottom of the nav, so with the nav fullscreen it scrolled to the point just off the page. So the snap scrolling now scrolls to the top of the viewport, fine in mobile but on desktop some of the content is cut off by the nav bar
- jQuery animation of MLH badge is queuing
- If the menu is shown then hidden in mobile mode, and the viewport grows to desktop size the menu will remain hidden
- Body noscroll not working on mobile
- On mobile in landscape the nav menu is not scrollable and is cut off, the body scrolls instead

Todo:
- auto hide nav on mobile after clicking a link
