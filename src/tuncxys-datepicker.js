/*!
 * Tuncxys DatePicker v1.0.0
 * Copyright (c) 2025 Tuncxy
 * Licensed under MIT (https://github.com/Tuncxy/tuncxys-datepicker)
 */

import './tuncxys-datepicker.css';

// --- 1. Localization Configuration 🌍 ---
import { locales } from './locales.js';

export default class TuncxysDatePicker {
    constructor(selector, options = {}) {
        this.options = options;
        this.lastSentValue = null;

        
        const inputLang = options.lang || 'en'; 
        
        this.selectedLang = locales[inputLang] ? inputLang : 'en';
        this.lang = locales[this.selectedLang];

        // --- 2. DOM Initialization ---
        this.container = document.querySelector(selector);
        if (!this.container) {
            console.error(this.lang.console.notFound.replace('{selector}', selector));
            return;
        }

        // --- 3. Global Event Listeners ---
        // Closes pickers when clicking outside the component or the detached popups.
        this.onDocumentClick = (e) => {
            const isInsideWrapper = this.dom && this.dom.wrapper && this.dom.wrapper.contains(e.target);
            const isInsideCalendar = this.dom && this.dom.calendarPopup && this.dom.calendarPopup.contains(e.target);
            const isInsideTime = this.dom && this.dom.timePopup && this.dom.timePopup.contains(e.target);

            if (!isInsideWrapper && !isInsideCalendar && !isInsideTime) {
                this.closePickers();
            }
        };

        this.onWindowResize = () => {
            if (this.resizeRequest) cancelAnimationFrame(this.resizeRequest);
    
            this.resizeRequest = requestAnimationFrame(() => {
                this.closePickers();
            });
        };

        // --- 4. Option Defaults & Setup ---
        this.submitName = options.submitName || "date_output";
        this.fixedWidth = options.width || "300px";

        this.theme = options.theme || 'default';
        this.colors = options.colors || {};

        this.enableDate = (options.enableDate !== undefined) ? options.enableDate : true;
        this.enableTime = (options.enableTime !== undefined) ? options.enableTime : true;
        if (!this.enableDate && !this.enableTime) { this.enableDate = true; }

        this.disableWeekDays = options.disableWeekDays || [];
        this.disableDates = options.disableDates || [];

        this.enableLimit = options.enableLimit || false;
        this.enableDayLimit = options.enableDayLimit || false;

        this.minOffset = (options.minOffset !== undefined) ? options.minOffset : 100;
        this.maxOffset = (options.maxOffset !== undefined) ? options.maxOffset : 100;

        this.container.style.width = this.fixedWidth;
        this.container.style.maxWidth = "100%";

        this.monthNames = this.lang.months;
        this.realToday = new Date();

        // --- 5. Date Limit Logic ---
        const parseLimitDate = (val) => {
            if (!val) return null;
            if (val instanceof Date) return isNaN(val.getTime()) ? null : new Date(val.setHours(0, 0, 0, 0));
            const formatRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (!formatRegex.test(val)) return null;
            const parts = val.split('-');
            const y = parseInt(parts[0], 10);
            const m = parseInt(parts[1], 10);
            const d = parseInt(parts[2], 10);
            if (m < 1 || m > 12) return null;
            const testDate = new Date(y, m - 1, d);
            if (testDate.getFullYear() !== y || testDate.getMonth() !== (m - 1) || testDate.getDate() !== d) return null;
            testDate.setHours(0, 0, 0, 0);
            return testDate;
        };

        const getDiffDays = (d1, d2) => Math.round((d1 - d2) / (1000 * 60 * 60 * 24));

        let dUpper = parseLimitDate(options.dateUpperLimit);
        let dLower = parseLimitDate(options.dateLowerLimit);

        if ((options.dateUpperLimit && !dUpper) || (options.dateLowerLimit && !dLower)) {
            console.warn(this.lang.console.limitWarning);
            this.enableLimit = false; this.enableDayLimit = false; this.minOffset = 100; this.maxOffset = 100; dUpper = null; dLower = null;
        }

        const todayZero = new Date(this.realToday.getFullYear(), this.realToday.getMonth(), this.realToday.getDate());

        if (this.enableDayLimit === true && (dUpper || dLower)) {
            if (dUpper && dLower && dUpper < dLower) { [dUpper, dLower] = [dLower, dUpper]; }
            if (dUpper && !dLower) { const diff = getDiffDays(dUpper, todayZero); this.maxOffset = diff; this.minOffset -= diff; }
            else if (!dUpper && dLower) { const diff = getDiffDays(todayZero, dLower); this.minOffset = diff; this.maxOffset += getDiffDays(dLower, todayZero); }
            else { this.maxOffset = getDiffDays(dUpper, todayZero); this.minOffset = getDiffDays(todayZero, dLower); }
        }

        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();

        this.selectedDay = null; this.selectedMonth = null; this.selectedYear = null;
        this.selectedHour = '03'; this.selectedMinute = '00'; this.selectedSecond = '00';

        this.inputBuffer = "";
        this.activeSegmentIndex = 0;

        // --- 6. Input Segmentation ---
        this.SEGMENTS = [];
        let cursor = 0;

        if (this.enableDate) {
            this.SEGMENTS.push(
                { type: 'day', start: 0, end: 2, maxLen: 2, min: 1, max: 31 },
                { type: 'month', start: 3, end: 5, maxLen: 2, min: 1, max: 12 },
                { type: 'year', start: 6, end: 10, maxLen: 4, min: 1900, max: 2100 }
            );
            cursor = 11;
        }

        if (this.enableTime) {
            this.SEGMENTS.push(
                { type: 'hour', start: cursor, end: cursor + 2, maxLen: 2, min: 0, max: 23 },
                { type: 'minute', start: cursor + 3, end: cursor + 5, maxLen: 2, min: 0, max: 59 },
                { type: 'second', start: cursor + 6, end: cursor + 8, maxLen: 2, min: 0, max: 59 }
            );
        }

        this.calculateLimits();
        if (this.enableLimit || this.enableDayLimit) { this.currentMonth = this.minDate.getMonth(); this.currentYear = this.minDate.getFullYear(); }
        this.init();
    }

    calculateLimits() {
        if (this.enableLimit) {
            this.minDate = new Date(this.realToday.getFullYear(), this.realToday.getMonth() - 6, 1);
            this.minDate.setHours(0, 0, 0, 0);
            this.maxDate = new Date(this.realToday.getFullYear(), this.realToday.getMonth() + 6 + 1, 0);
            this.maxDate.setHours(23, 59, 59, 999);
        } else {
            if (this.enableDayLimit) {
                this.minDate = new Date(this.realToday); this.minDate.setDate(this.realToday.getDate() - this.minOffset); this.minDate.setHours(0, 0, 0, 0);
                this.maxDate = new Date(this.realToday); this.maxDate.setDate(this.realToday.getDate() + this.maxOffset); this.maxDate.setHours(23, 59, 59, 999);
            } else {
                this.minDate = new Date(this.realToday.getFullYear() - this.minOffset, 0, 1);
                this.maxDate = new Date(this.realToday.getFullYear() + this.maxOffset, 11, 31);
            }
        }
        const yearSeg = this.SEGMENTS.find(s => s.type === 'year');
        if (yearSeg) { yearSeg.min = this.minDate.getFullYear(); yearSeg.max = this.maxDate.getFullYear(); }
    }

    init() {
        this.buildHTML();
        this.cacheDOM();
        this.bindEvents();

        if (this.enableDate && this.dom.calendarPopup) { document.body.appendChild(this.dom.calendarPopup); }
        if (this.enableTime && this.dom.timePopup) { document.body.appendChild(this.dom.timePopup); }
        
        if (this.dom.warningMsg) { document.body.appendChild(this.dom.warningMsg); }

        this.applyTheme();

        if (this.enableDate) { this.renderCalendar(this.currentMonth, this.currentYear); }

        if (this.enableTime) {
            this.populateTimeColumn(this.dom.hourCol, 24, 'hour');
            this.populateTimeColumn(this.dom.minuteCol, 60, 'minute');
            this.populateTimeColumn(this.dom.secondCol, 60, 'second');
            this.scrollToValues(this.selectedHour, this.selectedMinute, this.selectedSecond);
        }

        let startParts = [];
        if (this.enableDate) startParts.push(this.lang.placeholderDate);
        if (this.enableTime) startParts.push("03:00:00");

        this.dom.input.value = startParts.join(" ");
        this.dom.hiddenInput.value = "";

        this.observer = new MutationObserver((mutations) => {
            if (!document.body.contains(this.container)) {
                this.destroy();
            }
        });
        
        // Container'ın babasını (parent) izlemeye başlıyoruz
        if (this.container.parentNode) {
            this.observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    // --- Smart Positioning Logic (Absolute) ---
    // Calculates position relative to the document body.
    setPopupPosition(popupEl) {
        if (!popupEl || !this.dom.inputGroup) return;

        const rect = this.dom.inputGroup.getBoundingClientRect();
        const sTop = window.scrollY || document.documentElement.scrollTop;
        const sLeft = window.scrollX || document.documentElement.scrollLeft;

        popupEl.style.width = `${rect.width}px`;

        const pW = popupEl.offsetWidth;
        const pH = popupEl.offsetHeight || 350;

        let top = rect.bottom + sTop + 8;
        const spaceBelow = window.innerHeight - rect.bottom;
        if (spaceBelow < pH && rect.top > pH) {
            top = rect.top + sTop - pH - 8;
        }

        let left = (rect.left + sLeft) + (rect.width / 2) - (pW / 2);

        popupEl.style.top = `${top}px`;
        popupEl.style.left = `${left}px`;
    }

    applyTheme() {
        // Generates CSS styles and applies them to Wrapper and Popups
        let customStyleString = "";
        let themeClassName = "";

        if (this.theme === 'custom' && this.colors) {
            const map = {
                background: '--txydp-bg', border: '--txydp-border', borderFocus: '--txydp-border-focus',
                text: '--txydp-text', placeholder: '--txydp-placeholder', icon: '--txydp-icon',
                iconHoverBg: '--txydp-icon-bg-hover', hoverBg: '--txydp-day-hover-bg',
                selectedBg: '--txydp-selected-bg', selectedText: '--txydp-selected-text',
                todayBg: '--txydp-today-bg', todayText: '--txydp-today-text',
                weekDayText: '--txydp-weekday-text', passiveText: '--txydp-day-other-month',
                restricted: '--txydp-restricted-color', error: '--txydp-error-color',
                toastBg: '--txydp-toast-bg', toastText: '--txydp-toast-text',
                timeHeader: '--txydp-time-header', timeNum: '--txydp-time-text',
                timeNumActive: '--txydp-time-text-active', timeSeparator: '--txydp-time-separator',
                timeGradStart: '--txydp-time-grad-start', timeGradEnd: '--txydp-time-grad-end',
                selectionBg: '--txydp-selection-bg', selectionText: '--txydp-selection-text'
            };
            const styles = [];
            for (const [key, cssVar] of Object.entries(map)) {
                if (this.colors[key]) styles.push(`${cssVar}: ${this.colors[key]}`);
            }
            customStyleString = styles.join(';');
        } else if (this.theme === 'dark') {
            themeClassName = 'theme-dark';
        }

        // Apply to Wrapper
        if (themeClassName) this.dom.wrapper.classList.add(themeClassName);
        if (customStyleString) this.dom.wrapper.style.cssText = customStyleString;

        // Apply to Popups (since they are detached)
        [this.dom.calendarPopup, this.dom.timePopup, this.dom.warningMsg].forEach(el => {
            if (el) {
                // Önce eski temaları temizleyelim ki çakışma olmasın
                el.classList.remove('theme-dark'); 
                
                if (themeClassName) el.classList.add(themeClassName);
                if (customStyleString) el.style.cssText = customStyleString;
            }
        });
    }

    buildHTML() {
        let phParts = [];
        if (this.enableDate) phParts.push(this.lang.placeholderDate);
        if (this.enableTime) phParts.push("SS:DD:nn");
        const phText = phParts.join(" ");

        const weekDaysHTML = this.lang.weekdays.map(day => `<div>${day}</div>`).join('');

        const calendarBtnHTML = this.enableDate ? `<div class="txydp-btn txydp-calendar-btn"><svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" /></svg></div>` : '';
        const clockBtnHTML = this.enableTime ? `<div class="txydp-btn txydp-clock-btn"><svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg></div>` : '';

        // Note: Popups are created here but moved to body in init()
        const calendarPopupHTML = this.enableDate ? `
        <div class="txydp-popup txydp-calendar-popup">
            <div class="txydp-calendar-header">
                <div class="txydp-nav-btn txydp-prev-month"><svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg></div>
                <div class="txydp-month-year"></div>
                <div class="txydp-nav-btn txydp-next-month"><svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg></div>
            </div>
            <div class="txydp-calendar-grid-view"><div class="txydp-weekdays">${weekDaysHTML}</div><div class="txydp-days"></div></div>
            <div class="txydp-year-picker"></div>
        </div>` : '';

        const timePopupHTML = this.enableTime ? `
        <div class="txydp-popup txydp-time-popup">
            <div class="txydp-time-labels"><div class="txydp-time-label">${this.lang.timeHeaders[0]}</div><div class="txydp-time-label">${this.lang.timeHeaders[1]}</div><div class="txydp-time-label">${this.lang.timeHeaders[2]}</div></div>
            <div class="txydp-time-container"><div class="txydp-highlight"></div><div class="txydp-time-col txydp-hour-col"></div><div class="txydp-time-col txydp-minute-col"></div><div class="txydp-time-col txydp-second-col"></div></div>
            <div class="txydp-time-controls">
                <div class="txydp-control-group"><div class="txydp-control-btn" data-unit="hour" data-dir="down"><svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg></div><div class="txydp-control-btn" data-unit="hour" data-dir="up"><svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" /></svg></div></div>
                <div class="txydp-control-group"><div class="txydp-control-btn" data-unit="minute" data-dir="down"><svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg></div><div class="txydp-control-btn" data-unit="minute" data-dir="up"><svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" /></svg></div></div>
                <div class="txydp-control-group"><div class="txydp-control-btn" data-unit="second" data-dir="down"><svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg></div><div class="txydp-control-btn" data-unit="second" data-dir="up"><svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" /></svg></div></div>
            </div>
        </div>` : '';

        this.container.innerHTML = `
    <div class="txydp-wrapper">
        <input type="hidden" class="txydp-hidden-iso-input" name="${this.submitName}">
        <div class="txydp-warning-message"></div>
        <div class="txydp-input-group">
            <input type="text" name="${this.submitName}_display" inputmode="numeric" class="txydp-date-input" placeholder="${phText}" spellcheck="false" autocomplete="off">
            <div class="txydp-icons">${calendarBtnHTML}${clockBtnHTML}</div>
        </div>
        ${calendarPopupHTML}
        ${timePopupHTML}
    </div>`;
    }

    cacheDOM() {
        const root = this.container;
        this.dom = {
            wrapper: root.querySelector('.txydp-wrapper'),
            inputGroup: root.querySelector('.txydp-input-group'),
            warningMsg: root.querySelector('.txydp-warning-message'),
            input: root.querySelector('.txydp-date-input'),
            hiddenInput: root.querySelector('.txydp-hidden-iso-input'),
            calendarBtn: root.querySelector('.txydp-calendar-btn'),
            clockBtn: root.querySelector('.txydp-clock-btn'),
            // These might be moved to body later
            timePopup: root.querySelector('.txydp-time-popup'),
            calendarPopup: root.querySelector('.txydp-calendar-popup'),
            monthYearDisplay: root.querySelector('.txydp-month-year'),
            prevBtn: root.querySelector('.txydp-prev-month'),
            nextBtn: root.querySelector('.txydp-next-month'),
            calendarDays: root.querySelector('.txydp-days'),
            calendarGridView: root.querySelector('.txydp-calendar-grid-view'),
            yearPickerView: root.querySelector('.txydp-year-picker'),
            hourCol: root.querySelector('.txydp-hour-col'),
            minuteCol: root.querySelector('.txydp-minute-col'),
            secondCol: root.querySelector('.txydp-second-col'),
            controlBtns: root.querySelectorAll('.txydp-control-btn')
        };
    }

    bindEvents() {
        const { input, calendarBtn, clockBtn, prevBtn, nextBtn, monthYearDisplay, controlBtns } = this.dom;

        document.addEventListener('click', this.onDocumentClick);
        window.addEventListener('resize', this.onWindowResize);
        window.addEventListener('scroll', this.onWindowResize); // Close on scroll to prevent float

        if (controlBtns && controlBtns.length > 0) {
            controlBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
                    const unit = btn.dataset.unit; const dir = btn.dataset.dir;
                    this.scrollTimeButton(unit, dir);
                });
                btn.addEventListener('mousedown', (e) => { e.preventDefault(); e.stopPropagation(); });
            });
        }

        input.addEventListener('dragstart', (e) => e.preventDefault());
        input.addEventListener('drop', (e) => e.preventDefault());

        input.addEventListener('blur', () => {
            if (this.inputBuffer.length > 0) this.finalizeInput(this.activeSegmentIndex, true);
            let vals = this.getParsedDateFromInput();
            if (this.enableDate && !isNaN(vals.y)) {
                this.validateDayCountInMonth();
                this.updateInputValue('year', vals.y.toString().padStart(4, '0'), true, true);
            }
            this.inputBuffer = "";
        });

        input.addEventListener('click', () => {
            const cursor = input.selectionStart;
            for (let i = 0; i < this.SEGMENTS.length; i++) {
                if (cursor >= this.SEGMENTS[i].start && cursor <= this.SEGMENTS[i].end) {
                    if (this.inputBuffer.length > 0 && this.activeSegmentIndex !== i) { this.finalizeInput(this.activeSegmentIndex); }
                    this.activeSegmentIndex = i; this.selectSegment(i); break;
                }
            }
        });

        input.addEventListener('keydown', (e) => this.handleKeydown(e));

        const stopAll = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        };

        if (calendarBtn) {
            calendarBtn.addEventListener('click', (e) => {
                stopAll(e);
                this.toggleCalendar();
            });
            calendarBtn.addEventListener('mousedown', stopAll);
            calendarBtn.addEventListener('mouseup', stopAll);
        }

        if (clockBtn) {
            clockBtn.addEventListener('click', (e) => {
                stopAll(e);
                this.toggleClock();
            });
            clockBtn.addEventListener('mousedown', stopAll);
            clockBtn.addEventListener('mouseup', stopAll);
        }

        if (this.enableDate) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation(); if (prevBtn.classList.contains('disabled')) return;
                this.currentMonth--; if (this.currentMonth < 0) { this.currentMonth = 11; this.currentYear--; }
                this.renderCalendar(this.currentMonth, this.currentYear);
            });
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation(); if (nextBtn.classList.contains('disabled')) return;
                this.currentMonth++; if (this.currentMonth > 11) { this.currentMonth = 0; this.currentYear++; }
                this.renderCalendar(this.currentMonth, this.currentYear);
            });

            if (!this.enableLimit) {
                monthYearDisplay.classList.add('interactive');
                monthYearDisplay.addEventListener('click', (e) => this.toggleYearView(e));
            }

            // Using DOM delegation but DOM elements might be in Body now, reference holds true.
            this.dom.calendarDays.addEventListener('click', (e) => {
                const dayEl = e.target.closest('.txydp-day');
                if (!dayEl || dayEl.style.visibility === 'hidden' || dayEl.style.pointerEvents === 'none') return;
                e.stopPropagation();
                const dayNum = parseInt(dayEl.innerText);

                if (dayEl.classList.contains('other-month')) {
                    if (dayNum > 15) { this.currentMonth--; if (this.currentMonth < 0) { this.currentMonth = 11; this.currentYear--; } }
                    else { this.currentMonth++; if (this.currentMonth > 11) { this.currentMonth = 0; this.currentYear++; } }
                }
                this.selectedDay = dayNum; this.selectedMonth = this.currentMonth; this.selectedYear = this.currentYear;
                this.renderCalendar(this.currentMonth, this.currentYear);
                this.updateFullInputString();
            });
        }
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        
        document.removeEventListener('click', this.onDocumentClick);
        window.removeEventListener('resize', this.onWindowResize);
        window.removeEventListener('scroll', this.onWindowResize);

        if (this.dom.calendarPopup && this.dom.calendarPopup.parentNode === document.body) { document.body.removeChild(this.dom.calendarPopup); }
        if (this.dom.timePopup && this.dom.timePopup.parentNode === document.body) { document.body.removeChild(this.dom.timePopup); }
        
        if (this.dom.warningMsg && this.dom.warningMsg.parentNode === document.body) { document.body.removeChild(this.dom.warningMsg); }

        this.container.innerHTML = "";
        this.dom = null;
    }

    // ... (Existing helper methods like updateHiddenInput, scrollTimeButton, etc. remain unchanged) ...
    updateHiddenInput() {
        if (this.enableDate && (this.selectedYear === null || this.selectedMonth === null || this.selectedDay === null)) return;
        if (this.enableDate) {
            let maxDays = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
            if (this.selectedDay > maxDays) return;
            if (this.isDateRestricted(new Date(this.selectedYear, this.selectedMonth, this.selectedDay))) return;
        }

        let parts = [];
        if (this.enableDate) {
            let y = this.selectedYear.toString().padStart(4, '0'); let m = (this.selectedMonth + 1).toString().padStart(2, '0'); let d = this.selectedDay.toString().padStart(2, '0');
            parts.push(`${y}-${m}-${d}`);
        }
        if (this.enableTime) { parts.push(`${this.selectedHour}:${this.selectedMinute}:${this.selectedSecond}`); }
        const finalValue = parts.join(" ");

        if (this.lastSentValue === finalValue) return;
        this.lastSentValue = finalValue;
        this.dom.hiddenInput.value = finalValue;

        if (this.options.onChange && typeof this.options.onChange === 'function') {
            let dateObj = null;
            if (this.enableDate) {
                dateObj = new Date(this.selectedYear, this.selectedMonth, this.selectedDay);
                if (this.enableTime) dateObj.setHours(parseInt(this.selectedHour), parseInt(this.selectedMinute), parseInt(this.selectedSecond));
            }
            this.options.onChange(dateObj, finalValue, this);
        }
    }

    scrollTimeButton(type, direction) {
        if (!this.enableTime) return;
        let element; if (type === 'hour') element = this.dom.hourCol; else if (type === 'minute') element = this.dom.minuteCol; else if (type === 'second') element = this.dom.secondCol;
        const cellHeight = 32; const currentScroll = element.scrollTop;
        if (direction === 'down') { element.scrollTo({ top: currentScroll + cellHeight, behavior: 'smooth' }); } else { element.scrollTo({ top: currentScroll - cellHeight, behavior: 'smooth' }); }
    }

    getParsedDateFromInput() {
        if (!this.enableDate) return { d: this.realToday.getDate(), m: this.realToday.getMonth(), y: this.realToday.getFullYear() };
        let val = this.dom.input.value;
        const dSeg = this.SEGMENTS.find(s => s.type === 'day'); const mSeg = this.SEGMENTS.find(s => s.type === 'month'); const ySeg = this.SEGMENTS.find(s => s.type === 'year');
        let d = parseInt(val.substring(dSeg.start, dSeg.end)); let m = parseInt(val.substring(mSeg.start, mSeg.end)) - 1; let y = parseInt(val.substring(ySeg.start, ySeg.end));
        return { d, m, y };
    }

    handleKeydown(e) {
        if (['ArrowRight', 'Tab', 'Enter'].includes(e.key)) {
            e.preventDefault(); if (this.inputBuffer.length > 0) this.finalizeInput(this.activeSegmentIndex);
            if (e.key === 'Enter') { this.dom.input.blur(); this.closePickers(); return; }
            this.activeSegmentIndex = (this.activeSegmentIndex + 1) % this.SEGMENTS.length; this.selectSegment(this.activeSegmentIndex); this.inputBuffer = ""; return;
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault(); if (this.inputBuffer.length > 0) this.finalizeInput(this.activeSegmentIndex);
            this.activeSegmentIndex = (this.activeSegmentIndex - 1 + this.SEGMENTS.length) % this.SEGMENTS.length; this.selectSegment(this.activeSegmentIndex); this.inputBuffer = ""; return;
        }
        if (e.key === 'Backspace') {
            e.preventDefault(); this.inputBuffer = "";
            const seg = this.SEGMENTS[this.activeSegmentIndex];
            this.updateInputValue(seg.type, "0".repeat(seg.maxLen), true, false);
            this.selectSegment(this.activeSegmentIndex); return;
        }
        if (/^\d$/.test(e.key)) { e.preventDefault(); this.handleNumberInput(e.key); } else { e.preventDefault(); }
    }

    selectSegment(index) { const seg = this.SEGMENTS[index]; this.dom.input.setSelectionRange(seg.start, seg.end); }
    handleNumberInput(num) {
        const seg = this.SEGMENTS[this.activeSegmentIndex]; this.inputBuffer += num; let val = parseInt(this.inputBuffer);
        if (seg.type === 'day' && val > 31) this.inputBuffer = "31";
        if (seg.type === 'month' && val > 12) this.inputBuffer = "12";
        if (!['day', 'month', 'year'].includes(seg.type)) { if (seg.max && val > seg.max) this.inputBuffer = seg.max.toString(); }
        if (this.inputBuffer.length >= seg.maxLen) {
            this.finalizeInput(this.activeSegmentIndex); if (this.activeSegmentIndex < this.SEGMENTS.length - 1) { this.activeSegmentIndex++; }
            this.selectSegment(this.activeSegmentIndex); this.inputBuffer = "";
        } else {
            let displayVal = this.inputBuffer.padStart(seg.maxLen, '0'); this.updateInputValue(seg.type, displayVal, false, false); this.dom.input.setSelectionRange(seg.start, seg.end);
        }
    }

    finalizeInput(index, isBlur = false) {
        const seg = this.SEGMENTS[index];
        if (!this.inputBuffer && !isBlur) return;
        let val = this.inputBuffer ? parseInt(this.inputBuffer) : parseInt(this.dom.input.value.substring(seg.start, seg.end));
        if (seg.type === 'year' && this.inputBuffer.length === 2) val = parseInt("20" + this.inputBuffer);
        let originalVal = val;
        if (seg.type === 'year' && this.inputBuffer.length > 0 && this.inputBuffer.length !== 4 && this.inputBuffer.length !== 2) val = seg.min;
        if (val < seg.min) val = seg.min; if (seg.max && val > seg.max) val = seg.max;

        if (val !== originalVal) {
            this.triggerErrorEffect();
            let msg = seg.type === 'year' ? this.lang.warnings.invalidYear.replace('{year}', val) : this.lang.warnings.invalidDate.replace('{date}', val);
            this.showWarningMessage(msg);
        }
        let newValStr = val.toString().padStart(seg.maxLen, '0');
        this.updateInputValue(seg.type, newValStr, true, true, isBlur);
        if (seg.type === 'year' || isBlur) { this.validateDayCountInMonth(); }
        this.inputBuffer = "";
    }

    validateDayCountInMonth() {
        if (!this.enableDate) return;
        let currentVals = this.getParsedDateFromInput();
        if (isNaN(currentVals.d) || isNaN(currentVals.m) || isNaN(currentVals.y)) return;
        let maxDays = new Date(currentVals.y, currentVals.m + 1, 0).getDate();
        if (currentVals.d > maxDays) {
            this.triggerErrorEffect();
            let safeDate = new Date(currentVals.y, currentVals.m, maxDays);
            if (this.isDateRestricted(safeDate)) { safeDate = this.findNearestValidDate(safeDate); }
            let fixedDay = safeDate.getDate().toString().padStart(2, '0'); let fixedM = (safeDate.getMonth() + 1).toString().padStart(2, '0'); let fixedY = safeDate.getFullYear().toString().padStart(4, '0');
            let dateStr = `${fixedDay}/${fixedM}/${fixedY}`;
            let msg = this.lang.warnings.invalidDate.replace('{date}', `<strong>${dateStr}</strong>`);
            this.showWarningMessage(msg);

            let currentInputVal = this.dom.input.value; let newDatePart = `${fixedDay}/${fixedM}/${fixedY}`;
            let finalVal = newDatePart; if (this.enableTime && currentInputVal.length > 10) { finalVal += currentInputVal.substring(10); }
            this.dom.input.value = finalVal;
            this.selectedDay = safeDate.getDate(); this.selectedMonth = safeDate.getMonth(); this.selectedYear = safeDate.getFullYear();
            this.renderCalendar(this.selectedMonth, this.selectedYear); this.updateHiddenInput();
        }
    }

    updateInputValue(type, value, updateUI = false, checkGlobalLimits = true, checkRestricted = true) {
        let currentStr = this.dom.input.value; const seg = this.SEGMENTS.find(s => s.type === type); if (!seg) return;
        let newStr = currentStr.substring(0, seg.start) + value + currentStr.substring(seg.end);
        this.dom.input.value = newStr;

        if (!updateUI && !checkGlobalLimits) return;

        if (this.enableTime) {
            const hSeg = this.SEGMENTS.find(s => s.type === 'hour'); const mSeg = this.SEGMENTS.find(s => s.type === 'minute'); const sSeg = this.SEGMENTS.find(s => s.type === 'second');
            let parsedHStr = newStr.substring(hSeg.start, hSeg.end); let parsedMiStr = newStr.substring(mSeg.start, mSeg.end); let parsedSStr = newStr.substring(sSeg.start, sSeg.end);
            if (!isNaN(parseInt(parsedHStr))) this.selectedHour = parsedHStr; if (!isNaN(parseInt(parsedMiStr))) this.selectedMinute = parsedMiStr; if (!isNaN(parseInt(parsedSStr))) this.selectedSecond = parsedSStr;
            if (['hour', 'minute', 'second'].includes(type)) { this.scrollToValues(this.selectedHour, this.selectedMinute, this.selectedSecond); }
        }

        if (this.enableDate) {
            let parsedD = parseInt(newStr.substring(this.SEGMENTS.find(s => s.type === 'day').start, this.SEGMENTS.find(s => s.type === 'day').end));
            let parsedM = parseInt(newStr.substring(this.SEGMENTS.find(s => s.type === 'month').start, this.SEGMENTS.find(s => s.type === 'month').end)) - 1;
            let parsedY = parseInt(newStr.substring(this.SEGMENTS.find(s => s.type === 'year').start, this.SEGMENTS.find(s => s.type === 'year').end));

            if (!isNaN(parsedD) && !isNaN(parsedM) && !isNaN(parsedY)) {
                this.selectedDay = parsedD; this.selectedMonth = parsedM; this.selectedYear = parsedY;
                if (['day', 'month', 'year'].includes(type)) {
                    let checkDate = new Date(this.selectedYear, this.selectedMonth, this.selectedDay);
                    let minCheck = new Date(this.minDate); minCheck.setHours(0, 0, 0, 0); let maxCheck = new Date(this.maxDate); maxCheck.setHours(0, 0, 0, 0);
                    let isValidDate = true;
                    if (checkDate < minCheck) { if (checkGlobalLimits) { this.selectedYear = this.minDate.getFullYear(); this.selectedMonth = this.minDate.getMonth(); this.selectedDay = this.minDate.getDate(); } else isValidDate = false; }
                    if (checkDate > maxCheck) { if (checkGlobalLimits) { this.selectedYear = this.maxDate.getFullYear(); this.selectedMonth = this.maxDate.getMonth(); this.selectedDay = this.maxDate.getDate(); } else isValidDate = false; }

                    if (checkGlobalLimits && (checkDate < minCheck || checkDate > maxCheck)) {
                        this.triggerErrorEffect();
                        let targetDate = (checkDate < minCheck) ? minCheck : maxCheck;
                        let dateStr = `${targetDate.getDate().toString().padStart(2, '0')}/${(targetDate.getMonth() + 1).toString().padStart(2, '0')}/${targetDate.getFullYear()}`;
                        let msg = this.lang.warnings.invalidDate.replace('{date}', dateStr);
                        this.showWarningMessage(msg);
                        let finalD = this.selectedDay.toString().padStart(2, '0'); let finalM = (this.selectedMonth + 1).toString().padStart(2, '0'); let finalY = this.selectedYear.toString().padStart(4, '0');
                        this.dom.input.value = this.enableTime ? `${finalD}/${finalM}/${finalY} ${newStr.substring(11)}` : `${finalD}/${finalM}/${finalY}`;
                    }

                    if (isValidDate || checkGlobalLimits) {
                        this.currentYear = this.selectedYear; this.currentMonth = this.selectedMonth; this.renderCalendar(this.currentMonth, this.currentYear);
                        if (checkGlobalLimits && checkRestricted) {
                            let candidateDate = new Date(this.selectedYear, this.selectedMonth, this.selectedDay);
                            if (this.isDateRestricted(candidateDate)) {
                                this.triggerErrorEffect();
                                const safeDate = this.findNearestValidDate(candidateDate);
                                let dateStr = `${safeDate.getDate().toString().padStart(2, '0')}/${(safeDate.getMonth() + 1).toString().padStart(2, '0')}/${safeDate.getFullYear()}`;
                                let msg = this.lang.warnings.restrictedDate.replace('{date}', dateStr);
                                this.showWarningMessage(msg);
                                this.selectedYear = safeDate.getFullYear(); this.selectedMonth = safeDate.getMonth(); this.selectedDay = safeDate.getDate();
                                this.currentYear = this.selectedYear; this.currentMonth = this.selectedMonth;
                                let finalD = this.selectedDay.toString().padStart(2, '0'); let finalM = (this.selectedMonth + 1).toString().padStart(2, '0'); let finalY = this.selectedYear.toString().padStart(4, '0');
                                this.dom.input.value = this.enableTime ? `${finalD}/${finalM}/${finalY} ${this.dom.input.value.substring(11)}` : `${finalD}/${finalM}/${finalY}`;
                                this.renderCalendar(this.currentMonth, this.currentYear);
                            }
                        }
                    }
                }
            }
        }
        this.updateHiddenInput();
    }

    toggleCalendar() {
        if (!this.enableDate) return;
        if (this.dom.timePopup) this.dom.timePopup.classList.remove('active');
        this.dom.calendarPopup.classList.toggle('active');

        if (this.dom.calendarPopup.classList.contains('active')) {
            if (this.selectedDay === null) {
                let targetStart;
                const todayTime = new Date(this.realToday).setHours(0, 0, 0, 0);
                const minTime = this.minDate.getTime();
                const maxTime = this.maxDate.getTime();
                if (todayTime >= minTime && todayTime <= maxTime) targetStart = this.realToday; else targetStart = this.minDate;
                this.currentMonth = targetStart.getMonth(); this.currentYear = targetStart.getFullYear();
                this.renderCalendar(this.currentMonth, this.currentYear);
            }
            this.showCalendarView();
            // Calculates position relative to Body
            this.setPopupPosition(this.dom.calendarPopup);
        }
    }

    toggleClock() {
        if (!this.enableTime) return;
        if (this.dom.calendarPopup) this.dom.calendarPopup.classList.remove('active');
        this.dom.timePopup.classList.toggle('active');

        if (this.dom.timePopup.classList.contains('active')) {
            this.setPopupPosition(this.dom.timePopup);
            setTimeout(() => { this.scrollToValues(this.selectedHour, this.selectedMinute, this.selectedSecond); }, 10);
        }
    }

    closePickers() {
        if (this.dom.calendarPopup) this.dom.calendarPopup.classList.remove('active');
        if (this.dom.timePopup) this.dom.timePopup.classList.remove('active');
    }

    populateTimeColumn(element, count, type) {
        const topSpacer = document.createElement('div'); topSpacer.className = 'txydp-spacer'; element.appendChild(topSpacer);
        for (let i = 0; i < count; i++) { const num = i.toString().padStart(2, '0'); const cell = document.createElement('div'); cell.className = 'txydp-time-cell'; cell.innerText = num; cell.dataset.val = num; element.appendChild(cell); }
        const bottomSpacer = document.createElement('div'); bottomSpacer.className = 'txydp-spacer'; element.appendChild(bottomSpacer);
        element.addEventListener('scroll', () => { this.handleScroll(element, type); });
        element.addEventListener('wheel', (e) => {
            e.preventDefault(); const cellHeight = 32; const direction = e.deltaY > 0 ? 1 : -1;
            const targetScroll = element.scrollTop + (direction * cellHeight); element.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }, { passive: false });
    }

    handleScroll(element, type) {
        const cellHeight = 32; const scrollTop = element.scrollTop; const index = Math.round(scrollTop / cellHeight);
        const cells = element.querySelectorAll('.txydp-time-cell'); cells.forEach(c => c.classList.remove('active'));
        if (cells[index]) {
            cells[index].classList.add('active'); const val = cells[index].dataset.val;
            if (type === 'hour') this.selectedHour = val; if (type === 'minute') this.selectedMinute = val; if (type === 'second') this.selectedSecond = val;
            this.updateFullInputString();
        }
    }

    scrollToValues(h, m, s) {
        const cellHeight = 32; const sync = (el, val) => { const valInt = parseInt(val); el.scrollTop = valInt * cellHeight; const cells = el.querySelectorAll('.txydp-time-cell'); cells.forEach(c => c.classList.remove('active')); if (cells[valInt]) cells[valInt].classList.add('active'); };
        sync(this.dom.hourCol, h); sync(this.dom.minuteCol, m); sync(this.dom.secondCol, s);
    }

    updateFullInputString() {
        let parts = [];
        if (this.enableDate) {
            if (this.selectedDay !== null && this.selectedMonth !== null && this.selectedYear !== null) {
                parts.push(`${this.selectedDay.toString().padStart(2, '0')}/${(this.selectedMonth + 1).toString().padStart(2, '0')}/${this.selectedYear.toString().padStart(4, '0')}`);
            } else { parts.push(this.lang.placeholderDate); }
        }
        if (this.enableTime) { parts.push(`${this.selectedHour}:${this.selectedMinute}:${this.selectedSecond}`); }
        this.dom.input.value = parts.join(" ");
        this.updateHiddenInput();
    }

    showCalendarView() { this.dom.yearPickerView.classList.remove('active'); this.dom.calendarGridView.style.display = 'block'; this.dom.prevBtn.style.visibility = 'visible'; this.dom.nextBtn.style.visibility = 'visible'; }
    toggleYearView(e) { e.stopPropagation(); if (this.dom.yearPickerView.classList.contains('active')) this.showCalendarView(); else this.showYearPicker(); }

    showYearPicker() {
        const h = this.dom.calendarGridView.offsetHeight;
        this.dom.calendarGridView.style.display = 'none'; this.dom.yearPickerView.classList.add('active'); this.dom.yearPickerView.style.height = h + 'px';
        this.dom.prevBtn.style.visibility = 'hidden'; this.dom.nextBtn.style.visibility = 'hidden'; this.renderYearPicker();
    }

    renderYearPicker() {
        this.dom.yearPickerView.innerHTML = "";
        const realCurrentYear = this.realToday.getFullYear();
        let targetScrollElement = null;
        for (let y = this.minDate.getFullYear(); y <= this.maxDate.getFullYear(); y++) {
            const yearDiv = document.createElement('div'); yearDiv.classList.add('txydp-year-item'); yearDiv.innerText = y;
            if (y === this.currentYear) { yearDiv.classList.add('selected'); targetScrollElement = yearDiv; }
            if (y === realCurrentYear) yearDiv.classList.add('current-year');
            yearDiv.addEventListener('click', (e) => {
                e.stopPropagation(); this.currentYear = y;
                if (this.currentYear === this.minDate.getFullYear() && this.currentMonth < this.minDate.getMonth()) this.currentMonth = this.minDate.getMonth();
                if (this.currentYear === this.maxDate.getFullYear() && this.currentMonth > this.maxDate.getMonth()) this.currentMonth = this.maxDate.getMonth();
                this.renderCalendar(this.currentMonth, this.currentYear); this.showCalendarView();
            });
            this.dom.yearPickerView.appendChild(yearDiv);
        }
        if (targetScrollElement) { setTimeout(() => targetScrollElement.scrollIntoView({ block: "center", behavior: "auto" }), 0); }
    }

    isDateRestricted(dateObj) {
        if (!dateObj) return false;
        if (this.disableWeekDays.includes(dateObj.getDay())) return true;
        const isoDate = `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')}`;
        return this.disableDates.includes(isoDate);
    }

    findNearestValidDate(targetDate) {
        if (!this.isDateRestricted(targetDate)) return targetDate;
        let searchRange = 1; const maxSearch = 365; const baseTime = targetDate.getTime();
        while (searchRange < maxSearch) {
            const nextDate = new Date(baseTime); nextDate.setDate(nextDate.getDate() + searchRange); if (!this.isDateRestricted(nextDate)) return nextDate;
            const prevDate = new Date(baseTime); prevDate.setDate(prevDate.getDate() - searchRange); if (!this.isDateRestricted(prevDate)) return prevDate;
            searchRange++;
        }
        return targetDate;
    }

    triggerErrorEffect() {
        const group = this.dom.wrapper.querySelector('.txydp-input-group');
        group.classList.remove('input-error'); void group.offsetWidth; group.classList.add('input-error');
        setTimeout(() => { group.classList.remove('input-error'); }, 400);
    }

    showWarningMessage(msg) {
        const toast = this.dom.warningMsg; 
        if (!toast || !this.dom.inputGroup) return;

        toast.innerHTML = msg; 
        
        const rect = this.dom.inputGroup.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

        const centerX = rect.left + scrollLeft + (rect.width / 2);
        const topY = rect.top + scrollTop - 10;

        toast.style.left = `${centerX}px`;
        toast.style.top = `${topY}px`;
        
        toast.classList.add('visible');
        
        if (this.warningTimeout) clearTimeout(this.warningTimeout);
        this.warningTimeout = setTimeout(() => { toast.classList.remove('visible'); }, 4000);
    }

    renderCalendar(month, year) {
        if (!this.enableDate) return;
        this.dom.calendarDays.innerHTML = ""; this.dom.monthYearDisplay.innerText = `${this.monthNames[month]} ${year}`;
        let minCheck = new Date(this.minDate); minCheck.setHours(0, 0, 0, 0); let maxCheck = new Date(this.maxDate); maxCheck.setHours(0, 0, 0, 0);
        let prevMonthDate = new Date(year, month - 1, 1); let nextMonthDate = new Date(year, month + 1, 1);

        if (prevMonthDate < minCheck && prevMonthDate.getMonth() !== minCheck.getMonth()) this.dom.prevBtn.classList.add('disabled'); else this.dom.prevBtn.classList.remove('disabled');
        if (nextMonthDate > maxCheck && nextMonthDate.getMonth() !== maxCheck.getMonth()) this.dom.nextBtn.classList.add('disabled'); else this.dom.nextBtn.classList.remove('disabled');

        let firstDay = new Date(year, month, 1).getDay(); let adjustedFirstDay = (firstDay === 0 ? 6 : firstDay - 1);
        let daysInMonth = new Date(year, month + 1, 0).getDate(); let prevMonthLastDate = new Date(year, month, 0).getDate();

        for (let i = 0; i < adjustedFirstDay; i++) {
            const dayNum = prevMonthLastDate - adjustedFirstDay + 1 + i; const prevDiv = document.createElement('div'); prevDiv.classList.add('txydp-day', 'other-month'); prevDiv.innerText = dayNum;
            let prevDateFull = new Date(year, month - 1, dayNum);
            if (prevDateFull < minCheck) { prevDiv.style.visibility = 'hidden'; prevDiv.style.pointerEvents = 'none'; }
            if (this.isDateRestricted(prevDateFull)) prevDiv.style.pointerEvents = 'none';
            this.dom.calendarDays.appendChild(prevDiv);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div'); dayDiv.classList.add('txydp-day'); dayDiv.innerText = i;
            let currentDateFull = new Date(year, month, i);
            if (currentDateFull < minCheck || currentDateFull > maxCheck) { dayDiv.style.visibility = 'hidden'; dayDiv.style.pointerEvents = 'none'; }
            else if (this.isDateRestricted(currentDateFull)) dayDiv.classList.add('restricted-day');
            if (this.selectedDay !== null && i === this.selectedDay && month === this.selectedMonth && year === this.selectedYear && !dayDiv.classList.contains('restricted-day')) dayDiv.classList.add('selected');
            if (i === this.realToday.getDate() && month === this.realToday.getMonth() && year === this.realToday.getFullYear()) dayDiv.classList.add('today');
            this.dom.calendarDays.appendChild(dayDiv);
        }

        const usedSlots = adjustedFirstDay + daysInMonth;
        for (let j = 1; j <= (42 - usedSlots); j++) {
            const nextDiv = document.createElement('div'); nextDiv.classList.add('txydp-day', 'other-month'); nextDiv.innerText = j;
            let nextDateFull = new Date(year, month + 1, j);
            if (nextDateFull > maxCheck) { nextDiv.style.visibility = 'hidden'; nextDiv.style.pointerEvents = 'none'; }
            if (this.isDateRestricted(nextDateFull)) nextDiv.style.pointerEvents = 'none';
            this.dom.calendarDays.appendChild(nextDiv);
        }
    }
}
window.TuncxysDatePicker = TuncxysDatePicker;