/* Dokan site header — rendered on every page from one source. */
(function () {
  var host = document.getElementById('site-nav');
  if (!host) return;
  var variant = host.dataset.variant || 'light';
  var logo = variant === 'dark'
    ? 'Media/Dokan%20Logos/Dokan%20Logo-Dark%20Footer.svg'
    : 'Media/Dokan%20Logos/Dokan%20Logo-Lite%20Menu.svg';

  var NAV = "    <div class=\"hero-menu\">\n      <div class=\"menu-row\">\n        <a href=\"index.html\" class=\"menu-logo\">\n          <img src=\"__LOGO__\" alt=\"Dokan\" width=\"121\" height=\"33\" class=\"w-[121px] h-[33px]\" />\n        </a>\n\n        <ul class=\"menu-links\" id=\"menuLinks\">\n          <li class=\"has-mega\" id=\"megaTrigger\" data-mega=\"megaProduct\"><a href=\"#\" role=\"button\" aria-expanded=\"false\" aria-controls=\"megaProduct\">Product</a><svg class=\"menu-chev\" viewBox=\"0 0 10 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M1 1l4 4 4-4\"/></svg></li>\n          <li class=\"has-mega\" data-mega=\"megaSolutions\"><a href=\"#\" role=\"button\" aria-expanded=\"false\" aria-controls=\"megaSolutions\">Solutions</a><svg class=\"menu-chev\" viewBox=\"0 0 10 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M1 1l4 4 4-4\"/></svg></li>\n          <li><a href=\"#\">Apps</a><svg class=\"menu-chev\" viewBox=\"0 0 10 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M1 1l4 4 4-4\"/></svg></li>\n          <li class=\"has-mega\" data-mega=\"megaResource\"><a href=\"#\" role=\"button\" aria-expanded=\"false\" aria-controls=\"megaResource\">Resource</a><svg class=\"menu-chev\" viewBox=\"0 0 10 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M1 1l4 4 4-4\"/></svg></li>\n          <li><a href=\"demo.html\">Demo</a></li>\n          <li class=\"menu-links-login\"><a href=\"#\">Login</a></li>\n        </ul>\n\n        <div class=\"menu-right\">\n          <a href=\"#\" class=\"menu-login\">Login</a>\n          <a href=\"#\" class=\"menu-pricing\">Pricing</a>\n          <button class=\"menu-toggle\" id=\"menuToggle\" aria-label=\"Open menu\" aria-expanded=\"false\" aria-controls=\"menuLinks\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M4 7h16M4 12h16M4 17h16\"/></svg>\n          </button>\n        </div>\n      </div>\n    </div>\n";
  var MEGA = "    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Mega menu: Product (Figma 44:957) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <div class=\"mega\" id=\"megaProduct\" role=\"region\" aria-label=\"Product menu\">\n      <div class=\"mega-rule\"></div>\n      <div class=\"mega-inner\">\n\n        <!-- Features -->\n        <div class=\"mega-col\">\n          <p class=\"mega-head\">Features</p>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><path d=\"M22.5 23.63V21.38C22.5 20.18 22.03 19.04 21.18 18.19C20.34 17.35 19.19 16.88 18 16.88H9C7.81 16.88 6.66 17.35 5.82 18.19C4.97 19.04 4.5 20.18 4.5 21.38V23.63\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M13.5 12.38C15.99 12.38 18 10.36 18 7.88C18 5.39 15.99 3.38 13.5 3.38C11.01 3.38 9 5.39 9 7.88C9 10.36 11.01 12.38 13.5 12.38Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n            <span><span class=\"t\">Admin features</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.38 12.38L3.38 17.44C3.38 20.62 3.38 22.21 4.36 23.2C5.35 24.19 6.94 24.19 10.13 24.19L16.88 24.19C20.06 24.19 21.65 24.19 22.64 23.2C23.63 22.21 23.63 20.62 23.63 17.44V12.38\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M16.88 19.13C16.11 19.81 14.88 20.25 13.5 20.25C12.12 20.25 10.89 19.81 10.13 19.13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M8.97 10.13L9.93 9.87C9.8 9.38 9.33 9.07 8.84 9.13C8.34 9.2 7.97 9.62 7.97 10.13H8.97ZM2.38 11.3L3.31 10.95H3.31L2.38 11.3ZM24.62 11.3L23.69 10.95L23.69 10.95L24.62 11.3ZM18.03 10.13H19.03C19.03 9.62 18.66 9.2 18.16 9.13C17.67 9.07 17.2 9.38 17.07 9.87L18.03 10.13ZM2.76 9.09L3.63 9.59L3.63 9.59L2.76 9.09ZM3.85 7.2L2.98 6.71L2.98 6.71L3.85 7.2ZM24.24 9.09L23.37 9.59V9.59L24.24 9.09ZM23.15 7.2L24.02 6.71L24.02 6.71L23.15 7.2ZM24.74 10.38L23.74 10.47V10.47L24.74 10.38ZM2.26 10.38L1.27 10.3V10.3L2.26 10.38ZM8.97 10.13H7.97C7.97 11.43 6.9 12.5 5.57 12.5L5.57 13.5V14.5C7.99 14.5 9.97 12.55 9.97 10.13H8.97ZM5.57 13.5L5.57 12.5C4.53 12.5 3.65 11.85 3.31 10.95L2.38 11.3L1.44 11.64C2.06 13.31 3.68 14.5 5.57 14.5V13.5ZM24.62 11.3L23.69 10.95C23.35 11.85 22.47 12.5 21.43 12.5V13.5V14.5C23.32 14.5 24.94 13.31 25.56 11.64L24.62 11.3ZM21.43 13.5V12.5C20.1 12.5 19.03 11.43 19.03 10.13H18.03H17.03C17.03 12.55 19.01 14.5 21.43 14.5V13.5ZM13.5 13.5V12.5C11.76 12.5 10.33 11.36 9.93 9.87L8.97 10.13L8 10.38C8.64 12.77 10.88 14.5 13.5 14.5L13.5 13.5ZM18.03 10.13L17.07 9.87C16.67 11.36 15.24 12.5 13.5 12.5V13.5L13.5 14.5C16.12 14.5 18.36 12.77 19 10.38L18.03 10.13ZM2.76 9.09L3.63 9.59L4.72 7.7L3.85 7.2L2.98 6.71L1.9 8.59L2.76 9.09ZM24.24 9.09L25.1 8.59L24.02 6.71L23.15 7.2L22.28 7.7L23.37 9.59L24.24 9.09ZM6.65 2.81V3.81L20.35 3.81V2.81V1.81L6.65 1.81V2.81ZM22.57 5.02H23.57C23.57 3.24 22.12 1.81 20.35 1.81V2.81V3.81C21.03 3.81 21.57 4.36 21.57 5.02H22.57ZM23.15 7.2L24.02 6.71C23.72 6.19 23.57 5.61 23.57 5.02H22.57H21.57C21.57 5.96 21.81 6.89 22.28 7.7L23.15 7.2ZM4.43 5.02L5.43 5.02C5.43 4.36 5.97 3.81 6.65 3.81V2.81V1.81C4.88 1.81 3.43 3.24 3.43 5.02H4.43ZM24.62 11.3L25.56 11.64C25.61 11.52 25.68 11.32 25.72 11.08C25.76 10.83 25.76 10.58 25.73 10.3L24.74 10.38L23.74 10.47C23.76 10.68 23.75 10.75 23.75 10.77C23.74 10.78 23.74 10.8 23.69 10.95L24.62 11.3ZM24.24 9.09L23.37 9.59C23.68 10.12 23.72 10.22 23.74 10.47L24.74 10.38L25.73 10.3C25.67 9.55 25.4 9.11 25.1 8.59L24.24 9.09ZM3.85 7.2L4.72 7.7C5.19 6.89 5.43 5.96 5.43 5.02L4.43 5.02H3.43C3.43 5.61 3.28 6.19 2.98 6.71L3.85 7.2ZM2.38 11.3L3.31 10.95C3.26 10.8 3.26 10.78 3.25 10.77C3.25 10.75 3.24 10.68 3.26 10.47L2.26 10.38L1.27 10.3C1.24 10.58 1.24 10.83 1.28 11.08C1.32 11.32 1.39 11.52 1.44 11.64L2.38 11.3ZM2.76 9.09L1.9 8.59C1.6 9.11 1.33 9.55 1.27 10.3L2.26 10.38L3.26 10.47C3.28 10.22 3.32 10.12 3.63 9.59L2.76 9.09Z\" fill=\"currentColor\"/></svg>\n            <span><span class=\"t\">Vendor Features</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><path d=\"M17.18 21.78V19.94C17.18 18.97 16.79 18.03 16.1 17.34C15.41 16.65 14.48 16.26 13.5 16.26H7.06C6.08 16.26 5.14 16.65 4.45 17.34C3.76 18.03 3.38 18.97 3.38 19.94V21.78\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10.28 12.58C12.31 12.58 13.96 10.93 13.96 8.9C13.96 6.86 12.31 5.22 10.28 5.22C8.24 5.22 6.6 6.86 6.6 8.9C6.6 10.93 8.24 12.58 10.28 12.58Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M18.1 12.58L19.94 14.42L23.63 10.74\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n            <span><span class=\"t\">Customer Features</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9.57 1.98C10.6 1.83 11.77 2.26 12.41 3.18H12.41C12.64 3.53 12.83 3.94 12.95 4.18V4.18L13.49 5.25C13.89 6.04 14.02 6.27 14.18 6.44C14.34 6.59 14.56 6.73 15.34 7.12H15.34L16.58 7.75H16.58C16.8 7.85 17.15 8.02 17.47 8.24C18.3 8.82 18.68 9.76 18.69 10.64C18.69 11.52 18.33 12.47 17.52 13.07C17.35 13.2 17.14 13.32 16.95 13.42L16.47 13.65L15.36 14.21C14.68 14.55 14.45 14.67 14.27 14.82C14.13 14.95 13.97 15.14 13.67 15.75L13.67 15.75L12.97 17.13C12.76 17.54 12.52 18.08 12.13 18.49C11.69 18.98 11.12 19.25 10.37 19.36L10.36 19.37L10.35 19.37C9.33 19.51 8.2 19.09 7.55 18.19V18.19C7.55 18.19 7.54 18.19 7.54 18.18C7.54 18.18 7.54 18.17 7.53 18.17V18.17C7.38 17.96 7.28 17.75 7.2 17.6C7.11 17.41 7.07 17.32 7.01 17.21C6.75 16.77 6.49 16.17 6.3 15.8C6.08 15.36 5.89 15.04 5.67 14.84V14.83C5.59 14.76 5.45 14.66 5.23 14.54C5.01 14.42 4.81 14.33 4.55 14.2V14.2L3.33 13.58C3.14 13.49 2.74 13.3 2.44 13.09L2.44 13.08C1.81 12.62 1.4 11.93 1.28 11.16L1.28 11.16C1.13 10.13 1.47 8.96 2.43 8.26H2.43C2.76 8.02 3.26 7.8 3.47 7.69L3.47 7.69L4.57 7.14C5.37 6.74 5.73 6.57 5.96 6.18C6.21 5.74 6.44 5.27 6.69 4.75C6.94 4.25 7.2 3.71 7.52 3.19C7.78 2.77 8.17 2.49 8.51 2.32C8.86 2.14 9.23 2.03 9.57 1.98H9.57ZM9.86 3.96L9.86 3.96C9.72 3.98 9.56 4.03 9.42 4.1C9.28 4.17 9.23 4.23 9.23 4.24C8.96 4.66 8.73 5.12 8.49 5.63C8.25 6.12 7.99 6.66 7.69 7.18C7.09 8.2 6.06 8.63 5.47 8.92L4.36 9.48L4.36 9.48C4.11 9.61 3.9 9.7 3.74 9.79L3.61 9.88C3.36 10.06 3.2 10.44 3.26 10.86L3.26 10.87C3.3 11.11 3.43 11.33 3.62 11.47C3.75 11.56 3.94 11.65 4.23 11.8H4.22L5.45 12.41C5.63 12.5 5.93 12.65 6.19 12.79C6.39 12.9 6.62 13.03 6.84 13.21L7.06 13.39L7.23 13.57C7.61 13.99 7.88 14.48 8.09 14.91C8.37 15.45 8.52 15.83 8.74 16.21C8.85 16.4 8.94 16.61 9 16.72C9.03 16.79 9.06 16.85 9.08 16.89L9.15 17L9.16 17.01L9.17 17.02C9.34 17.27 9.71 17.43 10.07 17.39C10.46 17.32 10.59 17.22 10.66 17.14C10.81 16.98 10.92 16.76 11.18 16.23L11.88 14.85L11.88 14.85C12.21 14.19 12.51 13.7 12.96 13.31C13.38 12.95 13.9 12.71 14.46 12.42L15.57 11.87L16.03 11.64C16.15 11.58 16.25 11.52 16.33 11.46C16.54 11.3 16.69 11.01 16.69 10.66C16.68 10.31 16.53 10.03 16.32 9.88C16.16 9.77 15.98 9.69 15.68 9.53L15.68 9.53L14.45 8.91H14.44C13.74 8.56 13.19 8.28 12.76 7.84C12.33 7.4 12.06 6.85 11.71 6.15V6.15L11.17 5.08C10.99 4.74 10.89 4.51 10.76 4.31C10.6 4.08 10.21 3.91 9.86 3.96Z\" fill=\"currentColor\"/><path d=\"M18.88 12.84C21.06 12.7 20.83 14.45 21.95 15.63C22.86 16.59 24.44 16.42 24.72 18.08C24.78 18.44 24.75 18.8 24.63 19.14C24.19 20.44 22.77 20.39 21.93 21.27C20.92 22.34 21.14 23.76 19.4 24.04C17.18 24.17 17.46 22.46 16.31 21.25C15.4 20.29 13.8 20.45 13.54 18.77C13.49 18.43 13.52 18.08 13.63 17.75C14.07 16.43 15.5 16.5 16.34 15.6C17.34 14.53 17.14 13.1 18.88 12.84ZM19.11 15.14C18.08 16.56 16.91 17.59 15.18 18.44C16.62 19.2 17.84 20.05 18.75 21.27C18.82 21.37 19.06 21.68 19.15 21.74C20.2 20.29 21.34 19.31 23.09 18.44C21.84 17.82 20.84 17.1 19.93 16.13C19.77 15.96 19.23 15.22 19.11 15.14Z\" fill=\"currentColor\"/></svg>\n            <span><span class=\"t\">Dokan AI (New)</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n        </div>\n\n        <!-- Modules -->\n        <div class=\"mega-col\">\n          <p class=\"mega-head\">Modules 42+</p>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><path d=\"M23.56 18.94C22.82 14.5 20.52 11.19 18.53 9.25C17.94 8.68 17.65 8.4 17.01 8.14C16.37 7.88 15.82 7.88 14.71 7.88H12.29C11.18 7.88 10.63 7.88 9.99 8.14C9.35 8.4 9.06 8.68 8.47 9.25C6.48 11.19 4.18 14.5 3.44 18.94C2.89 22.25 5.94 24.75 9.35 24.75H17.65C21.06 24.75 24.11 22.25 23.56 18.94Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M14.4 12.38C14.4 11.82 13.95 11.38 13.4 11.38C12.85 11.38 12.4 11.82 12.4 12.38L13.4 12.38L14.4 12.38ZM12.4 20.25C12.4 20.8 12.85 21.25 13.4 21.25C13.95 21.25 14.4 20.8 14.4 20.25H13.4H12.4ZM14.48 14.67C14.82 15.11 15.45 15.19 15.89 14.86C16.33 14.52 16.41 13.9 16.08 13.46L15.28 14.06L14.48 14.67ZM12.19 18C11.78 17.63 11.15 17.67 10.78 18.08C10.41 18.49 10.45 19.12 10.86 19.49L11.53 18.74L12.19 18ZM13.4 16.2V15.2C12.68 15.2 12.39 15.08 12.3 15.02C12.28 15.01 12.27 15 12.27 15C12.27 15 12.27 15 12.27 14.99C12.27 14.99 12.25 14.95 12.25 14.84H11.25H10.25C10.25 15.53 10.5 16.22 11.18 16.68C11.77 17.08 12.56 17.2 13.4 17.2V16.2ZM11.25 14.84H12.25C12.25 14.79 12.27 14.67 12.47 14.52C12.67 14.37 13 14.25 13.4 14.25V13.25V12.25C12.62 12.25 11.87 12.48 11.29 12.91C10.71 13.34 10.25 14.01 10.25 14.84H11.25ZM15.75 17.79H14.75C14.75 17.91 14.72 17.97 14.7 18.01C14.68 18.04 14.64 18.09 14.55 18.15C14.34 18.27 13.96 18.38 13.4 18.38V19.38V20.38C14.14 20.38 14.93 20.25 15.58 19.86C16.28 19.44 16.75 18.73 16.75 17.79H15.75ZM13.4 16.2V17.2C14.13 17.2 14.47 17.31 14.62 17.41C14.67 17.44 14.69 17.47 14.7 17.5C14.72 17.53 14.75 17.62 14.75 17.79H15.75H16.75C16.75 16.95 16.44 16.21 15.71 15.73C15.07 15.31 14.24 15.2 13.4 15.2V16.2ZM13.4 13.25L14.4 13.25L14.4 12.38L13.4 12.38L12.4 12.38L12.4 13.25L13.4 13.25ZM13.4 19.38H12.4V20.25H13.4H14.4V19.38H13.4ZM13.4 13.25V14.25C13.97 14.25 14.34 14.48 14.48 14.67L15.28 14.06L16.08 13.46C15.48 12.67 14.45 12.25 13.4 12.25V13.25ZM13.4 19.38V18.38C12.83 18.38 12.41 18.19 12.19 18L11.53 18.74L10.86 19.49C11.51 20.07 12.44 20.38 13.4 20.38V19.38Z\" fill=\"currentColor\"/><path d=\"M8.16 5C7.93 4.66 7.6 4.2 8.29 4.1C9 3.99 9.75 4.48 10.47 4.47C11.13 4.46 11.46 4.17 11.82 3.75C12.2 3.31 12.79 2.25 13.5 2.25C14.21 2.25 14.8 3.31 15.18 3.75C15.54 4.17 15.87 4.46 16.53 4.47C17.25 4.48 18 3.99 18.71 4.1C19.4 4.2 19.07 4.66 18.84 5L17.79 6.53C17.34 7.18 17.11 7.51 16.64 7.69C16.17 7.88 15.57 7.88 14.35 7.88H12.65C11.43 7.88 10.83 7.88 10.36 7.69C9.89 7.51 9.66 7.18 9.21 6.53L8.16 5Z\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>\n            <span><span class=\"t\">Payments</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3.44 17.09L3.86 14.76C4.34 12.01 4.58 10.63 5.55 9.82C6.51 9 7.89 9 10.65 9H16.35C19.11 9 20.49 9 21.45 9.82C22.42 10.63 22.66 12.01 23.14 14.76L23.56 17.09C24.23 20.9 24.56 22.81 23.53 24.06C22.49 25.31 20.58 25.31 16.76 25.31H10.24C6.42 25.31 4.51 25.31 3.47 24.06C2.44 22.81 2.77 20.9 3.44 17.09Z\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M8.44 9L8.63 6.73C8.84 4.2 10.96 2.25 13.5 2.25C16.04 2.25 18.16 4.2 18.37 6.73L18.56 9\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M16.88 12.38C16.73 13.96 15.26 15.19 13.5 15.19C11.74 15.19 10.27 13.96 10.13 12.38\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>\n            <span><span class=\"t\">Shipping and delivery</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><ellipse cx=\"20.25\" cy=\"11.25\" rx=\"4.5\" ry=\"9\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M20.25 2.25C16.76 2.25 9.52 4.92 5.37 6.59C3.46 7.35 2.25 9.2 2.25 11.25C2.25 13.3 3.46 15.15 5.37 15.91C9.52 17.58 16.76 20.25 20.25 20.25\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M12.38 24.75L10.19 23.55C7.81 22.24 6.46 19.59 6.8 16.88\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n            <span><span class=\"t\">Marketing and growth</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><path d=\"M22.62 17.56V9.45C22.62 9.1 22.52 8.75 22.35 8.44C22.17 8.13 21.91 7.88 21.61 7.7L14.51 3.65C14.21 3.47 13.86 3.38 13.5 3.38C13.14 3.38 12.79 3.47 12.49 3.65L5.39 7.7C5.09 7.88 4.83 8.13 4.65 8.44C4.48 8.75 4.38 9.1 4.38 9.45V17.56C4.38 17.91 4.48 18.26 4.65 18.57C4.83 18.88 5.09 19.13 5.39 19.31L12.49 23.36C12.79 23.54 13.14 23.63 13.5 23.63C13.86 23.63 14.21 23.54 14.51 23.36L21.61 19.31C21.91 19.13 22.17 18.88 22.35 18.57C22.52 18.26 22.62 17.91 22.62 17.56Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4.66 8.4L13.5 13.51L22.34 8.4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M13.5 23.72V13.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n            <span><span class=\"t\">Product types</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n\n          <a href=\"#\" class=\"mega-more\">View all modules\n            <svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4.17 10H15.83\"/><path d=\"M10 4.17L15.83 10L10 15.83\"/></svg>\n          </a>\n        </div>\n\n        <!-- Extend -->\n        <div class=\"mega-col\">\n          <p class=\"mega-head\">Extend</p>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><path d=\"M4.66 2.25C4.02 2.25 3.41 2.5 2.96 2.96C2.5 3.41 2.25 4.02 2.25 4.66V19.93C2.25 21.21 2.76 22.43 3.66 23.34C4.11 23.79 4.64 24.14 5.23 24.38C5.81 24.62 6.44 24.75 7.07 24.75C8.35 24.75 9.58 24.24 10.48 23.34C11.38 22.43 11.89 21.21 11.89 19.93V4.66C11.89 4.02 11.64 3.41 11.19 2.96C10.73 2.5 10.12 2.25 9.48 2.25H4.66ZM4.66 3.86H9.48C9.7 3.86 9.9 3.94 10.05 4.09C10.2 4.24 10.29 4.45 10.29 4.66V19.93C10.29 20.78 9.95 21.6 9.34 22.2C8.74 22.8 7.92 23.14 7.07 23.14C6.65 23.14 6.23 23.06 5.84 22.9C5.45 22.74 5.1 22.5 4.8 22.2C4.2 21.6 3.86 20.78 3.86 19.93V4.66C3.86 4.45 3.94 4.24 4.09 4.09C4.24 3.94 4.45 3.86 4.66 3.86Z\" fill=\"currentColor\"/><path d=\"M17.85 3.36C17.21 3.36 16.6 3.61 16.15 4.06C16.15 4.06 16.14 4.06 16.14 4.06L10.52 9.72C10.44 9.79 10.38 9.88 10.34 9.98C10.3 10.08 10.28 10.18 10.28 10.29C10.28 10.39 10.31 10.5 10.35 10.6C10.39 10.69 10.45 10.78 10.52 10.86C10.68 11.01 10.88 11.09 11.09 11.09C11.31 11.09 11.51 11.01 11.66 10.85L17.29 5.19C17.44 5.05 17.64 4.97 17.85 4.97C18.06 4.97 18.26 5.05 18.41 5.2L21.8 8.6C21.95 8.75 22.03 8.96 22.03 9.17C22.03 9.38 21.95 9.59 21.8 9.74L9.35 22.2C9.2 22.36 9.11 22.56 9.11 22.77C9.11 22.99 9.2 23.19 9.35 23.34C9.5 23.49 9.7 23.58 9.91 23.58C10.13 23.58 10.33 23.49 10.48 23.34L22.94 10.87C22.94 10.87 22.94 10.87 22.94 10.87C23.39 10.42 23.64 9.8 23.64 9.17C23.64 8.53 23.39 7.92 22.94 7.47L19.55 4.06C19.55 4.06 19.55 4.06 19.55 4.06C19.09 3.61 18.48 3.36 17.85 3.36Z\" fill=\"currentColor\"/><path d=\"M16.71 15.11C16.5 15.11 16.3 15.19 16.15 15.34C16 15.49 15.91 15.7 15.91 15.91C15.91 16.12 16 16.33 16.15 16.48C16.3 16.63 16.5 16.71 16.71 16.71H22.34C22.55 16.71 22.76 16.8 22.91 16.95C23.06 17.1 23.14 17.3 23.14 17.52V22.34C23.14 22.55 23.06 22.76 22.91 22.91C22.76 23.06 22.55 23.14 22.34 23.14H7.07C6.86 23.14 6.65 23.23 6.5 23.38C6.35 23.53 6.27 23.73 6.27 23.95C6.27 24.16 6.35 24.36 6.5 24.51C6.65 24.67 6.86 24.75 7.07 24.75H22.34C22.98 24.75 23.59 24.5 24.04 24.04C24.5 23.59 24.75 22.98 24.75 22.34V17.52C24.75 16.88 24.5 16.27 24.04 15.81C23.59 15.36 22.98 15.11 22.34 15.11H16.71Z\" fill=\"currentColor\"/><path d=\"M3.05 8.68C2.84 8.68 2.64 8.76 2.49 8.91C2.33 9.06 2.25 9.27 2.25 9.48C2.25 9.7 2.33 9.9 2.49 10.05C2.64 10.2 2.84 10.29 3.05 10.29H11.09C11.3 10.29 11.51 10.2 11.66 10.05C11.81 9.9 11.89 9.7 11.89 9.48C11.89 9.27 11.81 9.06 11.66 8.91C11.51 8.76 11.3 8.68 11.09 8.68H3.05Z\" fill=\"currentColor\"/><path d=\"M3.05 15.11C2.84 15.11 2.64 15.19 2.49 15.34C2.33 15.49 2.25 15.7 2.25 15.91C2.25 16.12 2.33 16.33 2.49 16.48C2.64 16.63 2.84 16.71 3.05 16.71H11.09C11.3 16.71 11.51 16.63 11.66 16.48C11.81 16.33 11.89 16.12 11.89 15.91C11.89 15.7 11.81 15.49 11.66 15.34C11.51 15.19 11.3 15.11 11.09 15.11H3.05Z\" fill=\"currentColor\"/></svg>\n            <span><span class=\"t\">Compatible themes</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><path d=\"M18.51 3.38L22.19 7.06L18.51 10.74\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5.63 12.58V10.74C5.63 9.76 6.01 8.82 6.7 8.13C7.39 7.44 8.33 7.06 9.31 7.06H22.19\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.31 23.63L5.63 19.94L9.31 16.26\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22.19 14.42V16.26C22.19 17.24 21.81 18.17 21.11 18.86C20.42 19.55 19.49 19.94 18.51 19.94H5.63\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n            <span><span class=\"t\">Compatible plugins</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><path transform=\"translate(3.375 2.25)\" d=\"M10.13 0 C4.53 0 0 4.32 0 9.67 L0 14.59 C0 16.04 1.24 17.23 2.76 17.23 C4.28 17.23 5.52 16.04 5.52 14.59 L5.52 11.43 C5.52 9.97 4.28 8.79 2.76 8.79 C2.45 8.79 2.16 8.84 1.88 8.93 C2.27 4.91 5.82 1.76 10.13 1.76 C14.43 1.76 17.98 4.91 18.37 8.93 C18.09 8.84 17.8 8.79 17.49 8.79 C15.97 8.79 14.73 9.97 14.73 11.43 L14.73 14.59 C14.73 16.04 15.97 17.23 17.49 17.23 C17.77 17.23 18.04 17.19 18.29 17.11 C17.95 18.19 16.89 18.98 15.65 18.98 L12.73 18.98 C12.35 17.96 11.33 17.23 10.13 17.23 C8.6 17.23 7.36 18.41 7.36 19.86 C7.36 21.32 8.6 22.5 10.13 22.5 C11.33 22.5 12.35 21.77 12.73 20.74 L15.65 20.74 C18.19 20.74 20.25 18.77 20.25 16.35 L20.25 9.67 C20.25 4.32 15.72 0 10.13 0 Z M2.76 10.55 C3.27 10.55 3.68 10.94 3.68 11.43 L3.68 14.59 C3.68 15.07 3.27 15.47 2.76 15.47 C2.25 15.47 1.84 15.07 1.84 14.59 L1.84 11.43 C1.84 10.94 2.25 10.55 2.76 10.55 Z M10.13 20.74 C9.62 20.74 9.2 20.35 9.2 19.86 C9.2 19.38 9.62 18.98 10.13 18.98 C10.63 18.98 11.05 19.38 11.05 19.86 C11.05 20.35 10.63 20.74 10.13 20.74 Z M17.49 15.47 C16.98 15.47 16.57 15.07 16.57 14.59 L16.57 11.43 C16.57 10.94 16.98 10.55 17.49 10.55 C18 10.55 18.41 10.94 18.41 11.43 L18.41 14.59 C18.41 15.07 18 15.47 17.49 15.47 Z\" fill=\"currentColor\"/></svg>\n            <span><span class=\"t\">Elementor support</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n\n          <a href=\"#\" class=\"mega-item\">\n            <svg viewBox=\"0 0 27 27\" width=\"27\" height=\"27\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"13.5\" cy=\"13.5\" r=\"11.25\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M9 12.99V11.28C9 10.83 9.37 10.46 9.82 10.46H17.5L16 8.44M18 13.5V15.72C18 16.17 17.63 16.54 17.18 16.54H9.5L11 18.56\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n            <span><span class=\"t\">Changelog</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span>\n          </a>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- \u2550\u2550\u2550 Mega menu: Solutions \u2550\u2550\u2550 -->\n    <div class=\"mega\" id=\"megaSolutions\" role=\"region\" aria-label=\"Solutions menu\">\n      <div class=\"mega-rule\"></div>\n      <div class=\"mega-inner mega-inner--3\">\n        <div class=\"mega-listcol\">\n          <p class=\"mega-h\">Build a marketplace like</p>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Amazon</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">eBay</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Etsy</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Alibaba</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Printful (print on demand)</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Udemy</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-more\">More examples<svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4.17 10H15.83\"/><path d=\"M10 4.17L15.83 10L10 15.83\"/></svg></a>\n        </div>\n        <div class=\"mega-listcol\">\n          <p class=\"mega-h\">Industry demos</p>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Fashion</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Furniture</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Electronics</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Auction</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Booking</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-more\">View all demos<svg viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4.17 10H15.83\"/><path d=\"M10 4.17L15.83 10L10 15.83\"/></svg></a>\n        </div>\n        <div class=\"mega-listcol\">\n          <p class=\"mega-h\">By marketplace type</p>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Physical products</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Digital downloads</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Services and bookings</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Auctions</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">B2C marketplace</span><span class=\"d\">Lorem Ipsum is simply dummy text</span></span></a>\n        </div>\n      </div>\n    </div>\n    <!-- \u2550\u2550\u2550 Mega menu: Resource \u2550\u2550\u2550 -->\n    <div class=\"mega\" id=\"megaResource\" role=\"region\" aria-label=\"Resource menu\">\n      <div class=\"mega-rule\"></div>\n      <div class=\"mega-inner mega-inner--5\">\n        <div class=\"mega-listcol\">\n          <p class=\"mega-h\">Learn</p>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Documentation</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Blog</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Video tutorials</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Webinars</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">FAQ</span></span></a>\n        </div>\n        <div class=\"mega-listcol\">\n          <p class=\"mega-h\">Compare</p>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Dokan vs other plugins</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Testimonials</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Success stories</span></span></a>\n        </div>\n        <div class=\"mega-listcol\">\n          <p class=\"mega-h is-plain\">Quick Links</p>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Download<br />free Dokan Lite</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Affiliate program</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Influencer program</span></span></a>\n        </div>\n        <div class=\"mega-listcol\">\n          <p class=\"mega-h\">Free tools</p>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Startup<br />cost calculator</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Profit margin<br />calculator</span></span></a>\n        </div>\n        <div class=\"mega-listcol\">\n          <p class=\"mega-h\">Community</p>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Support tickets</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">GitHub</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Roadmap and ideas</span></span></a>\n          <a href=\"#\" class=\"mega-card\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.8 11.1V12a10 10 0 11-5.9-9.1\"/><path d=\"M8.5 11.5l3 3 9-9\"/></svg><span><span class=\"t\">Hire experts</span></span></a>\n        </div>\n      </div>\n    </div>";

  host.className = 'site-nav';
  host.setAttribute('data-variant', variant);
  host.innerHTML = NAV.replace('__LOGO__', logo) + MEGA;

  /* ---------- Page loader (every page) ----------
     The global timeline keeps running (ScrollTrigger's refreshes revert and
     re-render animations, and that only works on a running root), so page
     intros may already be under way behind the plain canvas. Once fonts and
     the hero's first images are in (1.2s at most): the pages' own header
     tweens are finished and dropped, everything else is parked in one paused
     timeline, and whatever had started is set back to its first frame at
     "now". The header then gets a single entrance on the canvas; 0.45s later
     the page appears and every parked animation goes back onto the root at
     the same global time (the wrapper must not outlive the reveal, or the
     root would drop it — and every ScrollTrigger tween inside — once its
     intros had finished). */
  (function () {
    var root = document.documentElement;
    if (!root.classList.contains('is-loading')) return;
    var g = window.gsap, parked = null, released = false;
    function unpark() {
      if (!parked) return;
      parked.resume();                                  /* re-aligns its start to "now" */
      var base = parked.startTime(), kids = parked.getChildren(false, true, true);
      kids.forEach(function (k) { g.globalTimeline.add(k, base + k.startTime()); });
      parked.kill(); parked = null;
    }
    function reveal() {
      root.classList.remove('is-loading', 'is-released');
      root.style.removeProperty('--loader-bg');
      unpark();
      try { document.dispatchEvent(new CustomEvent('site:revealed')); } catch (e) {}
    }
    function release() {
      if (released) return;
      released = true;
      if (!g) { reveal(); return; }
      var items = host.querySelectorAll('.menu-row > *');
      g.getTweensOf(items).forEach(function (t) { t.progress(1).kill(); });
      parked = g.exportRoot().pause();
      var now = parked.time();
      parked.getChildren(false, true, true).forEach(function (a) {
        if (a.paused()) return;                         /* ScrollTrigger-held: leave alone */
        if (a.startTime() < now) a.startTime(now);      /* already running: restart at "now" */
        /* run to the end and back (callbacks suppressed): on the way back every
           from() re-applies its start state — ScrollTrigger's init refreshes
           may have reverted the ones that had not started yet */
        if (a.totalDuration() < 60) a.totalProgress(1, true).totalProgress(0, true);
        else a.totalTime(0);
      });
      root.classList.add('is-released');                /* header shows from here */
      g.from(items, { y: -16, opacity: 0, duration: .6, stagger: .08, ease: 'power3.out',
                      clearProps: 'transform,opacity' });
      setTimeout(reveal, 450);
    }
    function whenReady() {
      var hero = host.parentElement || document.body, waits = [];
      if (document.fonts && document.fonts.ready) waits.push(document.fonts.ready);
      [].forEach.call(hero.querySelectorAll('img'), function (im) {
        if (im.complete || im.getAttribute('loading') === 'lazy') return;
        waits.push(new Promise(function (r) { im.addEventListener('load', r); im.addEventListener('error', r); }));
      });
      [hero].concat([].slice.call(hero.children)).forEach(function (el) {
        var m = /url\(["']?([^"')]+)["']?\)/.exec(getComputedStyle(el).backgroundImage);
        if (m) waits.push(new Promise(function (r) { var i = new Image(); i.onload = i.onerror = r; i.src = m[1]; }));
      });
      Promise.race([Promise.all(waits), new Promise(function (r) { setTimeout(r, 1200); })]).then(release, release);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', whenReady);
    else whenReady();
    setTimeout(release, 3000);                   /* never hold a page longer than this */
  })();

  /* Route mega-menu items that have real pages */
  var ROUTES = { 'Compatible themes': 'themes.html', 'Blog': 'blog.html',
    'Testimonials': 'testimonials.html', 'Dokan AI (New)': 'dokan-ai.html' };
  host.querySelectorAll('.mega-item .t, .mega-card .t').forEach(function (t) {
    var to = ROUTES[t.textContent.trim()];
    if (to) t.closest('a').setAttribute('href', to);
  });
  var MORE_ROUTES = { 'View all modules': 'modules.html' };
  host.querySelectorAll('.mega-more').forEach(function (a) {
    var to = MORE_ROUTES[a.textContent.trim()];
    if (to) a.setAttribute('href', to);
  });

  /* Mark the current page in the nav */
  var page = (location.pathname.split('/').pop() || 'index.html');
  host.querySelectorAll('.menu-links a').forEach(function (a) {
    if (a.getAttribute('href') === page) {
      a.setAttribute('aria-current', 'page');
      a.style.color = '#7047EB'; a.style.fontWeight = '700';
    }
  });

  /* The home page's header sits inside a hero card inset 20px from the window,
     so its nav row and mega sheet are 20px in and the sheet is 40px narrower.
     Pages with a full-bleed hero get the same inset (class below), so the menu
     and the mega sheet have identical geometry everywhere. */
  (function () {
    function bleed() {
      var box = host.parentElement;
      if (!box) return;
      var r = box.getBoundingClientRect();
      host.classList.toggle('nav-bleed', r.left <= 1 && r.width >= document.documentElement.clientWidth - 1);
    }
    bleed();
    window.addEventListener('resize', bleed);
    window.addEventListener('load', bleed);
  })();

  /* ---------- Mega menus (Product / Solutions / Resource) ---------- */
  (function () {
    var triggers = [].slice.call(host.querySelectorAll('.menu-links li[data-mega]'));
    if (!triggers.length) return;
    var canAnimate = !!window.gsap &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var current = null, closeTimer = null;

    var menus = triggers.map(function (li) {
      return { li: li, link: li.querySelector('a'), panel: host.querySelector('#' + li.dataset.mega) };
    }).filter(function (m) { return m.panel; });

    function paint(m, open) {
      m.panel.classList.toggle('is-open', open);
      m.li.classList.toggle('is-open', open);
      m.link.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!canAnimate) return;
      if (open) {
        gsap.fromTo(m.panel, { y: -10 }, { y: 0, duration: .32, ease: 'power3.out', overwrite: true });
        gsap.fromTo(m.panel.querySelectorAll('.mega-col, .mega-listcol'),
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: .38, ease: 'power3.out', stagger: .05, overwrite: true });
      } else {
        gsap.set(m.panel.querySelectorAll('.mega-col, .mega-listcol'),
                 { clearProps: 'transform,opacity' });
      }
    }
    var mobileNav = window.matchMedia('(max-width:1200px)');
    var logoImg = host.querySelector('.menu-logo img');
    var LOGO_LIGHT = 'Media/Dokan%20Logos/Dokan%20Logo-Lite%20Menu.svg';
    /* The panels live inside the hero card, whose overflow:hidden would clip
       anything drawn from them. So the page dim is drawn by one transparent
       box on <body>, laid exactly over the open panel: its outer box-shadow
       paints only outside the box, so the panel stays untouched, and
       pointer-events:none keeps every click going through. */
    var shade = document.createElement('div');
    shade.className = 'mega-shade';
    shade.setAttribute('aria-hidden', 'true');
    document.body.appendChild(shade);
    function placeShade() {
      if (!current) return;
      var r = current.panel.getBoundingClientRect();
      var lift = canAnimate ? (gsap.getProperty(current.panel, 'y') || 0) : 0;   /* ignore the drop-in offset */
      shade.style.left   = (r.left + window.scrollX) + 'px';
      shade.style.top    = (r.top - lift + window.scrollY) + 'px';
      shade.style.width  = r.width + 'px';
      shade.style.height = r.height + 'px';
    }
    window.addEventListener('resize', placeShade);
    function open(m) {
      if (current === m) return;
      if (current) paint(current, false);
      current = m || null;
      if (current) paint(current, true);
      placeShade();
      shade.classList.toggle('is-on', !!current);
      host.classList.toggle('is-mega-open', !!current && !mobileNav.matches);   /* desktop sheet only */
      /* On a dark hero the white wordmark would disappear on the sheet. */
      if (variant === 'dark' && logoImg) {
        logoImg.setAttribute('src', current && !mobileNav.matches ? LOGO_LIGHT : logo);
      }
    }
    function closeAll() { open(null); }
    host.__megaClose = closeAll;
    function cancelClose() { clearTimeout(closeTimer); }
    function scheduleClose() { cancelClose(); closeTimer = setTimeout(closeAll, 140); }

    menus.forEach(function (m) {
      m.li.addEventListener('mouseenter', function () { cancelClose(); open(m); });
      m.li.addEventListener('mouseleave', scheduleClose);
      m.panel.addEventListener('mouseenter', cancelClose);
      m.panel.addEventListener('mouseleave', scheduleClose);
      m.link.addEventListener('click', function (e) {
        e.preventDefault(); cancelClose(); open(current === m ? null : m);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && current) { var l = current.link; closeAll(); l.focus(); }
    });
    function outside(e) {
      if (!current) return;
      if (!current.panel.contains(e.target) && !current.li.contains(e.target)) closeAll();
    }
    document.addEventListener('click', outside);
    document.addEventListener('focusin', outside);
  })();

  /* ---------- Mobile dropdown ---------- */
  (function () {
    var t = host.querySelector('#menuToggle'), l = host.querySelector('#menuLinks');
    if (!t || !l) return;

    /* The mega sheets are desktop-only, so on phones and tablets each one is
       mirrored as an accordion inside its own <li>: group headings plus plain
       links, built from the same markup so the two never drift apart. The
       mega script's is-open class on the <li> expands it (one at a time). */
    function label(node) {
      var t = node.querySelector('.t') || node, out = '';
      t.childNodes.forEach(function (c) {
        out += c.nodeName === 'BR' ? ' ' : (c.nodeType === 3 || c.nodeType === 1 ? c.textContent : '');
      });
      return out.replace(/\s+/g, ' ').trim();
    }
    l.querySelectorAll('li[data-mega]').forEach(function (li) {
      var panel = host.querySelector('#' + li.dataset.mega);
      if (!panel) return;
      var sub = document.createElement('div'), inner = document.createElement('div');
      sub.className = 'msub'; inner.className = 'msub-inner';
      panel.querySelectorAll('.mega-col, .mega-listcol').forEach(function (col) {
        var g = document.createElement('div'), h = col.querySelector('.mega-head, .mega-h');
        g.className = 'msub-group';
        if (h) { var p = document.createElement('p'); p.className = 'msub-h'; p.textContent = label(h); g.appendChild(p); }
        col.querySelectorAll('a').forEach(function (a) {
          var x = document.createElement('a');
          x.href = a.getAttribute('href') || '#';
          x.textContent = label(a);
          if (a.classList.contains('mega-more')) x.className = 'msub-more';
          g.appendChild(x);
        });
        inner.appendChild(g);
      });
      sub.appendChild(inner); li.appendChild(sub);
      /* re-fit the sheet once the accordion has finished opening/closing */
      sub.addEventListener('transitionend', fit);
    });

    /* Cap the sheet to what is actually visible: the viewport and any
       clipping ancestor (hero cards use overflow:hidden). Beyond that the
       sheet scrolls inside itself instead of being cut off. */
    function fit() {
      if (!l.classList.contains('is-open')) return;
      var top = l.getBoundingClientRect().top, bottom = window.innerHeight;
      for (var el = host.parentElement; el && el !== document.body; el = el.parentElement) {
        var cs = getComputedStyle(el);
        if (cs.overflowY !== 'visible' || cs.overflowX !== 'visible') bottom = Math.min(bottom, el.getBoundingClientRect().bottom);
      }
      l.style.maxHeight = Math.max(220, bottom - top - 12) + 'px';
    }
    function setOpen(open) {
      l.classList.toggle('is-open', open);
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) fit();
      else if (host.__megaClose) host.__megaClose();
    }
    t.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!l.classList.contains('is-open'));
    });
    document.addEventListener('click', function (e) {
      if (l.classList.contains('is-open') && !l.contains(e.target) && !t.contains(e.target)) setOpen(false);
    });
    window.addEventListener('resize', fit);
  })();
})();

/* ══════════ Tertiary (underline) buttons — hover animation, every page ══════════
   Each part is doubled, an original and an aria-hidden clone, inside its own
   overflow:hidden mask. On hover or keyboard focus the label rolls up, the
   arrow leaves to the top-right while its copy enters from the bottom-left
   (40ms later), and the underline slides right with a 14px gap travelling
   across it. At rest, and once the move ends, the button looks unchanged;
   hover-out simply runs the transitions back. The underline is redrawn as an
   element at the link's own offset and thickness, and the colour and gap are
   pinned so no page hover rule can shift the finished state. Pages can mark
   extra links with data-tertiary, or call window.dokanTertiary(root) after
   injecting new ones. */
(function () {
  var SEL = '[data-tertiary], .md-link, .mk-card-cta, .ww-pop-more, .feat-side a, .blog-card a.underline, .mdh-req .lnk a';

  /* The label window is sized from real metrics: its top clears ascenders,
     its bottom stops just above the underline (so the incoming copy never
     crosses the line), and the label keeps its original line-box height. */
  function measure(a) {
    var label = a.querySelector('.tbtn-label'), line = a.querySelector('.tbtn-line');
    if (!label || !line) return;
    var mask = label.querySelector('.tbtn-mask'), ts = label.querySelectorAll('.tbtn-t');
    mask.style.height = mask.style.marginTop = mask.style.marginBottom = '';
    ts.forEach(function (t) { t.style.height = t.style.paddingTop = ''; });
    var fs = parseFloat(getComputedStyle(a).fontSize) || 16;
    var t1 = ts[0], top = t1.getBoundingClientRect().top, L = t1.getBoundingClientRect().height;
    var mark = document.createElement('span');
    mark.style.cssText = 'display:inline-block;width:0;height:0;vertical-align:baseline';
    t1.appendChild(mark);
    var base = mark.getBoundingClientRect().top - top;
    t1.removeChild(mark);
    var off = parseFloat(a.dataset.tbOffset); if (isNaN(off)) off = fs * .1;
    /* Chrome paints text underlines at whole CSS pixels (1.5px shows as 2px) */
    var th = parseFloat(a.dataset.tbThick); th = isNaN(th) ? Math.max(1, Math.round(fs / 16)) : Math.max(1, Math.round(th));
    var lineTop = base + off;
    var e1 = Math.round(fs * .2);                              /* room above the line box */
    var bottom = Math.max(base + fs * .2, lineTop - 1);        /* window ends above the underline */
    var H = bottom + e1;
    ts.forEach(function (t) { t.style.height = H + 'px'; t.style.paddingTop = e1 + 'px'; });
    mask.style.height = H + 'px';
    mask.style.marginTop = (-e1) + 'px';
    mask.style.marginBottom = (L - bottom) + 'px';
    line.style.top = lineTop + 'px';
    line.style.height = th + 'px';
  }

  function enhance(a) {
    if (a.classList.contains('tbtn')) return;
    var cs = getComputedStyle(a);
    /* remember the link's own underline before it is switched off */
    var off = parseFloat(cs.textUnderlineOffset), th = parseFloat(cs.textDecorationThickness);
    if (!isNaN(off)) a.dataset.tbOffset = off;
    if (!isNaN(th)) a.dataset.tbThick = th;
    var icon = null, text = '';
    [].slice.call(a.childNodes).forEach(function (n) {
      if (n.nodeType === 3) { text += n.textContent; a.removeChild(n); }
      else if (n.nodeType === 1 && (n.tagName.toLowerCase() === 'svg' || n.querySelector('svg')) && !icon) { icon = n; a.removeChild(n); }
      else if (n.nodeType === 1) { text += n.textContent; a.removeChild(n); }
    });
    text = text.replace(/\s+/g, ' ').trim();
    if (!text) return;

    var label = document.createElement('span'), mask = document.createElement('span');
    label.className = 'tbtn-label'; mask.className = 'tbtn-mask';
    var t1 = document.createElement('span'), t2 = document.createElement('span');
    t1.className = 'tbtn-t'; t2.className = 'tbtn-t tbtn-clone';
    t1.textContent = t2.textContent = text; t2.setAttribute('aria-hidden', 'true');
    mask.appendChild(t1); mask.appendChild(t2); label.appendChild(mask);
    var line = document.createElement('span');
    line.className = 'tbtn-line'; line.setAttribute('aria-hidden', 'true');
    line.innerHTML = '<i></i><i class="tbtn-clone"></i>';
    label.appendChild(line);
    a.appendChild(label);

    if (icon) {
      var box = document.createElement('span'), i1 = document.createElement('span'), i2 = document.createElement('span');
      box.className = 'tbtn-ico'; i1.className = 'tbtn-io'; i2.className = 'tbtn-io tbtn-clone';
      i1.appendChild(icon); i2.appendChild(icon.cloneNode(true)); i2.setAttribute('aria-hidden', 'true');
      box.appendChild(i1); box.appendChild(i2);
      a.appendChild(box);
    }
    if (!a.getAttribute('aria-label')) a.setAttribute('aria-label', text);
    a.style.setProperty('--tb-color', cs.color);
    a.style.setProperty('--tb-gap', cs.columnGap && cs.columnGap !== 'normal' ? cs.columnGap : '10px');
    if (cs.display === 'inline') a.style.display = 'inline-flex';
    a.classList.add('tbtn');
    measure(a);
  }

  function run(root) {
    (root || document).querySelectorAll(SEL).forEach(enhance);
  }
  window.dokanTertiary = run;
  function remeasure() { document.querySelectorAll('.tbtn').forEach(measure); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { run(); });
  else run();
  window.addEventListener('load', remeasure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(remeasure);
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(remeasure, 150); });
})();

/* ══════════ White secondary buttons — "radial fill, follow cursor" hover ══════════
   A dark circle grows from the point where the pointer enters until it covers
   the button, follows the pointer while inside, and shrinks back into the
   exit point. The fill is an aria-hidden overlay with a copy of the label,
   revealed by clip-path; only --rb-p (0 -> 1) is transitioned, so x/y/r
   track the pointer with no lag. Keyboard focus grows from the centre. The
   button's size, colours at rest and its own hover rules are untouched.
   Pages can mark extra buttons with data-radial, or call
   window.dokanRadial(root) after injecting new ones. */
(function () {
  var SEL = '[data-radial], .btn-secondary, .mh-b2, .ai-b2, .dd-b2, .mdh-buy .b2, .btn-ghost';

  function setPoint(b, x, y) {
    var w = b.clientWidth, h = b.clientHeight;
    x = Math.min(Math.max(x, 0), w); y = Math.min(Math.max(y, 0), h);   /* a fast exit can report a point outside */
    var r = Math.max(Math.hypot(x, y), Math.hypot(w - x, y), Math.hypot(x, h - y), Math.hypot(w - x, h - y)) + 1;
    b.style.setProperty('--rb-x', x + 'px');
    b.style.setProperty('--rb-y', y + 'px');
    b.style.setProperty('--rb-r', r);
  }
  function local(b, e) {
    var rect = b.getBoundingClientRect(), bl = b.clientLeft, bt = b.clientTop;
    return [e.clientX - rect.left - bl, e.clientY - rect.top - bt];
  }

  function enhance(b) {
    if (b.classList.contains('rb') || b.disabled || b.getAttribute('aria-disabled') === 'true') return;
    var text = b.textContent.replace(/\s+/g, ' ').trim();
    if (!text || b.querySelector('svg, img')) return;
    var cs = getComputedStyle(b);
    var label = document.createElement('span');
    label.className = 'rb-label';
    while (b.firstChild) label.appendChild(b.firstChild);
    b.appendChild(label);
    var fill = document.createElement('span');
    fill.className = 'rb-fill'; fill.setAttribute('aria-hidden', 'true');
    fill.appendChild(label.cloneNode(true));
    fill.style.padding = cs.padding;
    fill.style.justifyContent = cs.justifyContent === 'normal' ? 'center' : cs.justifyContent;
    /* The fill takes the button's own dark text colour (spec default #292A29).
       Ghost buttons on dark heroes (light text) get the inverse: a white
       circle, dark label and a light muted tone for the uncovered part. */
    var c = (cs.color.match(/\d+(\.\d+)?/g) || []).map(Number);
    var lum = c.length >= 3 ? (c[0] + c[1] + c[2]) / 3 : 0;
    if (lum > 180) {
      b.classList.add('rb-inverse');
      fill.style.setProperty('--rb-fill', '#FFFFFF');
    } else {
      fill.style.setProperty('--rb-fill', lum < 80 ? cs.color : '#292A29');
    }
    b.appendChild(fill);
    b.classList.add('rb');
    setPoint(b, b.clientWidth / 2, b.clientHeight / 2);

    var mouse = false;
    b.addEventListener('pointerenter', function (e) {
      mouse = true;
      var p = local(b, e); setPoint(b, p[0], p[1]);
      b.classList.add('is-active');
    });
    b.addEventListener('pointermove', function (e) {
      if (!b.classList.contains('is-active')) return;
      var p = local(b, e); setPoint(b, p[0], p[1]);
    });
    b.addEventListener('pointerleave', function (e) {
      mouse = false;
      var p = local(b, e); setPoint(b, p[0], p[1]);
      if (!b.matches(':focus-visible')) b.classList.remove('is-active');
    });
    b.addEventListener('focus', function () {
      if (mouse || !b.matches(':focus-visible')) return;
      setPoint(b, b.clientWidth / 2, b.clientHeight / 2);
      b.classList.add('is-active');
    });
    b.addEventListener('blur', function () { if (!mouse) b.classList.remove('is-active'); });
  }

  function run(root) { (root || document).querySelectorAll(SEL).forEach(enhance); }
  window.dokanRadial = run;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { run(); });
  else run();
})();


/* ══════════ Shared footer — the home page footer on every page ══════════
   One source of truth, like the header: each page's own <footer> is swapped
   for this markup once the page's scripts have run (some of them still fill
   the old footer, so swapping later keeps them error-free). Links route to
   the pages that exist; everything else stays "#". It uses the page's own
   .wrap, so it lines up with that page's content. */
(function () {
  var ROUTES = { 'Modules':'modules.html', 'Blogs':'blog.html', 'Testimonials':'testimonials.html',
    'Compatible Themes':'themes.html', 'Dokan WordPress Plugin':'demo.html', 'View All':'demo.html',
    'Success Stories':'testimonials.html', 'Otel Theme':'themes.html' };
  var COLS = [
    [['@logo'], ['', 'About Us|Brand Assets|Changelog|Contact Us|Career'], ['Use Cases', 'Fashion|Furniture|Print on demand|Electronics|Auction|Booking|View All'], ["Demo's", 'Dokan WordPress Plugin|Dokan Mobile App|Delivery Driver App|Otel Theme']],
    [['Resources', 'Blogs|Documentation|FAQs|Video Tutorials|Webinars'], ['Policies', 'Privacy Policy|Terms of Sevice|Support Policy|Affiliate Policy|Refund Policy'], ['Support &amp;<br />Success Stories', 'Success Stories|Testimonials|Support']],
    [['Important Links', 'Modules|Features|Payment Integrations|Compatible Plugins|Compatible Themes|Compare'], ['Solutions', 'Marketplace (Hosted by you)|eCommerce Shop (Hosted by us)|Marketplace (Hosted by us)|Mobile App|Delivery Driver App|Otel Theme|Dokan Care|wePOS|StoreGrowth|weLab']],
    [['Partnership<br />&amp; Affiliate', 'Partner with Us|Join Our Affiliate Program|Affiliate Policy|Affiliate|Influencer Program'], ['Guide to Build a<br />Marketplace Like', 'Etsy|Amazon|eBay|Alibaba|Airbnb|More Examples']]
  ];
  var WORDMARK = '<svg class="sf-wordmark" viewBox="67.57 13.65 163.43 35.7" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Dokan"> <defs> <linearGradient id="sfWm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".085"/><stop offset=".9" stop-color="#fff" stop-opacity="0"/></linearGradient> </defs> <path d="M227.151 23.0724C225.964 21.8939 224.563 20.9604 222.98 20.3023C221.396 19.6238 219.688 19.282 217.902 19.282C216.246 19.282 214.626 19.5779 213.095 20.1696C211.58 20.741 210.205 21.5725 209.002 22.6438L208.606 22.9959L205.846 19.8687H204.721V45.4831C204.721 47.3043 206.236 48.7889 208.095 48.7889C209.955 48.7889 211.47 47.3043 211.47 45.4831V32.1887C211.47 31.3367 211.637 30.5256 211.97 29.7757C212.298 29.0156 212.757 28.3371 213.335 27.7708C213.913 27.2046 214.6 26.7556 215.387 26.4291C216.173 26.1077 217.017 25.9394 217.902 25.9394C218.766 25.9394 219.595 26.1026 220.365 26.4291C221.126 26.7505 221.808 27.2046 222.381 27.7657C222.959 28.332 223.417 29.0054 223.75 29.7757C224.079 30.5256 224.25 31.3367 224.25 32.1836V45.4831C224.25 47.3043 225.766 48.7889 227.625 48.7889C229.484 48.7889 231 47.3043 231 45.4831V32.1887C231 30.4236 230.651 28.7401 229.958 27.1944C229.276 25.6129 228.333 24.2304 227.151 23.0724Z" fill="url(#sfWm)"/><path d="M190.685 21.5062C189.894 20.945 189.045 20.4553 188.165 20.037C187.285 19.6238 186.368 19.2973 185.436 19.0626C184.514 18.833 183.566 18.7157 182.624 18.7157C180.551 18.7157 178.577 19.0983 176.744 19.8482C174.931 20.5828 173.317 21.6388 171.942 22.9805C170.588 24.3222 169.505 25.9598 168.718 27.8473C167.927 29.7145 167.531 31.8061 167.531 34.0558C167.531 36.4739 167.932 38.6573 168.718 40.5449C169.505 42.4273 170.588 44.0445 171.942 45.3505C173.307 46.636 174.921 47.6359 176.728 48.3144C178.561 48.998 180.546 49.3449 182.624 49.3449C183.561 49.3449 184.498 49.2276 185.405 48.998C186.337 48.7633 187.259 48.4471 188.144 48.0491C189.024 47.6359 189.868 47.1513 190.659 46.6105C191.477 46.0494 192.253 45.4423 192.977 44.8046L193.409 44.4271L196.617 48.7837H197.716V19.9196H196.596L193.373 23.7049L192.972 23.3325C192.263 22.6795 191.498 22.0623 190.685 21.5062ZM190.238 37.3003C189.816 38.3206 189.227 39.244 188.488 40.05C187.743 40.8408 186.852 41.4886 185.853 41.9835C184.847 42.463 183.764 42.7079 182.624 42.7079C181.499 42.7079 180.421 42.5191 179.41 42.1416C178.41 41.7641 177.525 41.1979 176.77 40.4582C176.036 39.7184 175.447 38.8053 175.025 37.7391C174.603 36.6576 174.39 35.423 174.39 34.0609C174.39 32.6988 174.603 31.4694 175.025 30.4083C175.447 29.3267 176.03 28.4034 176.765 27.6637C177.52 26.924 178.41 26.3577 179.405 25.9802C180.415 25.6027 181.493 25.4139 182.618 25.4139C183.764 25.4139 184.853 25.669 185.853 26.1689C186.852 26.6383 187.738 27.2913 188.488 28.0973C189.227 28.8778 189.816 29.8063 190.243 30.8521C190.68 31.8724 190.909 32.9539 190.909 34.0609C190.904 35.1679 190.68 36.2596 190.238 37.3003Z" fill="url(#sfWm)"/><path d="M156.068 31.8317L161.896 24.659C162.615 23.7764 162.75 22.5929 162.25 21.5726C161.75 20.5523 160.719 19.9197 159.563 19.9197C158.646 19.9197 157.792 20.3227 157.224 21.0318L145.73 35.3058V16.9864C145.73 15.1499 144.205 13.65 142.324 13.65C140.444 13.65 138.918 15.1448 138.918 16.9864V46.1923C138.918 47.6258 140.106 48.7889 141.569 48.7889C142.371 48.7889 143.126 48.4369 143.632 47.8247L145.84 45.1465L151.735 37.4892L157.209 47.1003C157.802 48.141 158.927 48.7889 160.146 48.7889C161.359 48.7889 162.443 48.1768 163.052 47.1514C163.661 46.126 163.667 44.8965 163.068 43.866L156.068 31.8317Z" fill="url(#sfWm)"/><path d="M128.846 22.9295C127.492 21.5878 125.883 20.542 124.055 19.8278C122.238 19.0932 120.259 18.7157 118.17 18.7157C116.103 18.7157 114.124 19.1085 112.296 19.8788C110.483 20.6492 108.869 21.7307 107.494 23.0979C106.14 24.4446 105.051 26.072 104.265 27.9392C103.479 29.8063 103.078 31.8673 103.078 34.0609C103.078 36.2188 103.479 38.2594 104.265 40.1266C105.051 41.9784 106.14 43.6058 107.499 44.973C108.869 46.3146 110.489 47.4012 112.306 48.1869C114.129 48.9572 116.108 49.3449 118.175 49.3449C120.264 49.3449 122.238 48.9521 124.05 48.1818C125.883 47.391 127.498 46.3095 128.852 44.9627C130.206 43.6007 131.294 41.9733 132.081 40.1215C132.867 38.2543 133.268 36.2137 133.268 34.0558C133.268 31.7499 132.867 29.6328 132.081 27.7657C131.284 25.8833 130.201 24.2559 128.846 22.9295ZM125.789 37.5809C125.368 38.642 124.774 39.5654 124.024 40.3204C123.274 41.0754 122.378 41.6672 121.368 42.0855C120.378 42.5038 119.3 42.713 118.17 42.713C117.035 42.713 115.946 42.4936 114.936 42.0549C113.941 41.5958 113.061 40.9734 112.311 40.2031C111.582 39.4277 110.999 38.5094 110.577 37.4687C110.155 36.428 109.942 35.2802 109.942 34.066C109.942 32.7753 110.155 31.5918 110.577 30.5511C110.999 29.49 111.582 28.5666 112.311 27.8167C113.061 27.0413 113.952 26.4444 114.947 26.0465C116.962 25.215 119.384 25.215 121.373 26.0516C122.378 26.4444 123.274 27.0413 124.029 27.8167C124.774 28.5666 125.368 29.49 125.795 30.5562C126.232 31.5918 126.456 32.7753 126.456 34.0711C126.456 35.3312 126.232 36.5147 125.789 37.5809Z" fill="url(#sfWm)"/><path d="M94.349 13.65C92.4742 13.65 90.943 15.1448 90.943 16.9864V23.0673L89.9952 21.7154C89.615 21.1747 89.1411 20.7105 88.589 20.338C88.0214 19.9554 87.4016 19.6442 86.7402 19.4198C86.0788 19.1698 85.3966 18.9913 84.6935 18.8841C84.0009 18.777 83.3134 18.7209 82.6624 18.7209C80.5949 18.7209 78.6158 19.1137 76.7879 19.884C74.9755 20.6543 73.361 21.7359 71.9862 23.103C70.6321 24.4651 69.5436 26.1027 68.7572 27.9698C67.9708 29.8319 67.5698 31.8827 67.5698 34.061C67.5698 36.2546 67.9708 38.3156 68.7572 40.1828C69.5488 42.0346 70.6321 43.662 71.9914 45.0292C73.361 46.3708 74.9807 47.4472 76.7931 48.2176C78.6211 48.9675 80.5949 49.3501 82.6676 49.3501C83.6103 49.3501 84.5425 49.2328 85.4487 49.0032C86.3861 48.7685 87.3079 48.4522 88.188 48.0543C89.0682 47.6411 89.9171 47.1565 90.7035 46.6157C91.5159 46.0545 92.2971 45.4475 93.021 44.8098L93.4532 44.4323L96.6613 48.7889H97.7602V16.9864C97.755 15.1448 96.2291 13.65 94.349 13.65ZM90.2816 37.3055C89.8598 38.3258 89.2713 39.2492 88.5317 40.0552C87.787 40.8459 86.8965 41.4938 85.8965 41.9887C84.8914 42.4682 83.8082 42.7131 82.6676 42.7131C81.5323 42.7131 80.4386 42.4784 79.4231 42.0244C78.4336 41.5704 77.5534 40.9378 76.8035 40.147C76.0744 39.3563 75.4963 38.4279 75.0745 37.3872C74.6526 36.3414 74.4391 35.2241 74.4391 34.0661C74.4391 32.7397 74.6526 31.5307 75.0745 30.4696C75.4963 29.4034 76.0848 28.4902 76.8139 27.7556C77.5638 27.0006 78.4492 26.4139 79.4439 26.016C80.4542 25.6181 81.5375 25.4191 82.6676 25.4191C83.8134 25.4191 84.9018 25.6742 85.9017 26.1741C86.9017 26.6435 87.787 27.2913 88.537 28.1025C89.2765 28.8881 89.8702 29.8166 90.292 30.8573C90.7347 31.8776 90.9586 32.9591 90.9586 34.0661C90.9482 35.168 90.7243 36.2597 90.2816 37.3055Z" fill="url(#sfWm)"/> </svg>';
  function links(list) {
    return '<ul class="sf-links">' + list.split('|').map(function (t) {
      return '<li><a href="' + (ROUTES[t] || '#') + '">' + t + '</a></li>';
    }).join('') + '</ul>';
  }
  function col(groups) {
    return '<div class="sf-col">' + groups.map(function (g) {
      if (g[0] === '@logo') return '<a href="index.html" class="sf-logo"><img src="Media/Dokan%20Logos/Dokan%20Logo-Dark%20Footer.svg" alt="Dokan" width="139" height="38" /></a>';
      return (g[0] ? '<h5 class="sf-h">' + g[0] + '</h5>' : '') + links(g[1]);
    }).join('') + '</div>';
  }
  var S = 'Media/footer/';
  var HTML =
    '<div class="wrap sf-inner">' +
      '<div class="sf-grid">' + COLS.map(col).join('') + '</div>' +
      '<div class="sf-news">' +
        '<div><h5 class="sf-news-title">Keep Updated</h5>' +
          '<form class="sf-form" onsubmit="return false" aria-label="Newsletter">' +
            '<svg class="sf-at" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"/></svg>' +
            '<label class="sr-only" for="sf-email">Email address</label>' +
            '<input id="sf-email" type="email" placeholder="Enter your email..." autocomplete="email" />' +
            '<button type="submit">Stay Updated</button>' +
          '</form></div>' +
        '<div class="sf-trust"><div class="sf-social">' +
          [['facebook.png?v=2', 'Facebook'], ['x.png', 'X (Twitter)'], ['youtube.png', 'YouTube'], ['linkedin.png', 'LinkedIn'], ['medium.png', 'Medium']].map(function (s) {
            return '<a href="#" aria-label="Dokan on ' + s[1] + '"><img src="' + S + 'social-' + s[0] + '" alt="" width="41" height="41" loading="lazy" /></a>';
          }).join('') +
          '</div><img class="sf-pay" src="' + S + 'image%2067.png" alt="GDPR compliant, secure payment with Stripe and PayPal" width="384" height="32" loading="lazy" /></div>' +
      '</div>' +
      WORDMARK +
      '<div class="sf-bottom">' +
        '<span class="sf-by">A <img src="' + S + 'weDevs%20Logo%20Big%20Size.png" alt="weDevs" width="136" height="30" loading="lazy" /> Product</span>' +
        '<span class="sf-copy">&copy; 2025, Dokan. All Rights Reserved.</span>' +
        '<button type="button" class="sf-lang">English <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '</div>' +
    '</div>';

  function swap() {
    var old = document.querySelector('body > footer, footer');
    if (!old || old.classList.contains('site-footer')) return;
    var f = document.createElement('footer');
    f.className = 'site-footer';
    f.innerHTML = HTML;
    old.parentNode.replaceChild(f, old);
    if (window.ScrollTrigger) { try { ScrollTrigger.refresh(); } catch (e) {} }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', swap);
  else swap();
})();

/* ══════════ Featured logos marquee (.fw-row): append a hidden copy so the strip loops seamlessly ══════════ */
(function () {
  function init() {
    document.querySelectorAll('.fw-row:not([data-fw])').forEach(function (row) {
      row.setAttribute('data-fw', '');
      [].slice.call(row.children).forEach(function (li) {
        var c = li.cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        var img = c.querySelector('img'); if (img) img.alt = '';
        row.appendChild(c);
      });
      function speed() { row.style.setProperty('--fw-dur', Math.max(12, row.scrollWidth / 2 / 40) + 's'); }   /* ~40px/s */
      speed(); window.addEventListener('load', speed);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

/* ══════════ Primary buttons with an icon — label roll + arrow swap on hover ══════════
   The label and the arrow are each duplicated inside their own overflow:hidden
   mask: the label rolls up (copy in from below) while the arrow leaves the
   circle to the right (copy in from the left); leaving reverses it. Only
   transforms move, so the button's size, colours and the circle are untouched.
   Add a selector here, or mark a button with data-primary-icon. */
(function () {
  var SEL = '[data-primary-icon], .btn-primary, .dd-b1, .mdh-buy .b1, .mh-b1, .ai-b1, .btn-dl, .cta-btn, .th-cta-btn, .btn-nudge, .iface-demo, .menu-pricing';

  function enhance(b) {
    if (b.classList.contains('pb')) return;
    /* the icon holder is .circle on most buttons, *-circle on a few; a button
       without one (the nav's Pricing pill) just gets the label roll */
    var icon = b.querySelector('.circle, [class$="-circle"]');
    var svg = icon && icon.querySelector('svg');
    if (icon && !svg) return;

    /* label = everything in the button that is not the icon */
    var text = '';
    [].slice.call(b.childNodes).forEach(function (n) {
      if (icon && (n === icon || n.contains && n.contains(icon))) return;
      if (n.nodeType === 3) { text += n.textContent; b.removeChild(n); }
      else if (n.nodeType === 1) { text += n.textContent; b.removeChild(n); }
    });
    text = text.replace(/\s+/g, ' ').trim();
    if (!text) return;
    var label = document.createElement('span'), mask = document.createElement('span');
    label.className = 'pb-label'; mask.className = 'pb-mask';
    var t1 = document.createElement('span'), t2 = document.createElement('span');
    t1.className = 'pb-t'; t2.className = 'pb-t pb-clone';
    t1.textContent = t2.textContent = text;
    t2.setAttribute('aria-hidden', 'true');
    mask.appendChild(t1); mask.appendChild(t2); label.appendChild(mask);
    if (icon) b.insertBefore(label, icon); else b.appendChild(label);

    /* arrow: swap inside the circle. The masks sit against the circle, so only
       promote it when it is static — a circle the page positions itself stays put. */
    if (!icon) { finish(); return; }
    if (getComputedStyle(icon).position === 'static') icon.style.position = 'relative';
    var box = document.createElement('span'), i1 = document.createElement('span'), i2 = document.createElement('span');
    box.className = 'pb-ico'; i1.className = 'pb-i'; i2.className = 'pb-i pb-clone';
    i2.setAttribute('aria-hidden', 'true');
    icon.insertBefore(box, svg);
    i1.appendChild(svg); i2.appendChild(svg.cloneNode(true));
    box.appendChild(i1); box.appendChild(i2);

    finish();

    function finish() {
      if (!b.getAttribute('aria-label')) b.setAttribute('aria-label', text);
      b.classList.add('pb');
    }
  }

  function run(root) { (root || document).querySelectorAll(SEL).forEach(enhance); }
  window.dokanPrimaryIcon = run;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { run(); });
  else run();
})();
