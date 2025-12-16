# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.5] - 2025-12-17

### Fixed
- Fixed a critical UX issue on mobile browsers (specifically Opera GX Mobile and iOS Safari) where the popup would close unexpectedly when the address bar resized.
- Fixed scroll chaining issues in the time picker using CSS `overscroll-behavior` and `touch-action`, ensuring the background page stays static while scrolling values.

### Changed
- Reverted the body scroll locking mechanism introduced in v1.0.4 to avoid potential UX conflicts, relying on CSS solutions instead.

*Note: v1.0.4 was skipped due to an internal registry conflict.*

## [1.0.3] - 2025-12-16

### 🐛 Fixed
- **Mobile UX Improvement:** Fixed an issue where the virtual keyboard remained open when clicking the calendar or clock icons. The input is now automatically blurred to force-close the keyboard on mobile devices.
- **Time Picker Scrolling:** Resolved unwanted horizontal scrolling and "rubber-banding" effects on time picker columns. Added `touch-action: pan-y` and `overscroll-behavior` to ensure smooth vertical-only scrolling on touch screens (iOS & Android).

## [1.0.2] - 2025-12-15

### Fixed
- **NPM Documentation:** Fixed broken image links and relative path issues on the NPM registry page. Images are now served via absolute GitHub raw URLs.
- **Link Navigation:** Fixed navigation links between English and Turkish documentation to correctly redirect to the GitHub repository.

### Changed
- **Package Optimization:** Excluded the `img` folder from the NPM package to reduce bundle size.
- **Documentation:** Updated `README.md` and `README.tr.md` structures for better compatibility with NPM's viewer.

## [1.0.1] - 2025-12-15

### Fixed
- **NPM Documentation:** Added `img` folder into NPM registry page to fix `README.md` issues.

## [1.0.0] - 2025-12-14

### Initial Release
- **Core:** Released the first stable version of Tuncxys DatePicker.
- **Features:**
  - Zero dependencies (Vanilla JS).
  - Multi-language support (20+ languages included).
  - Advanced Theme System (`default`, `dark`, and `custom` via generic colors).
  - Responsive design with smart positioning.
  - Date & Time selection modes (`enableTime`, `enableDate`).
  - Validation and Input Masking support.