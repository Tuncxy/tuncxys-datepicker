// Type definitions for Tuncxys DatePicker
// Project: Tuncxys DatePicker

/**
 * Interface defining the customizable color palette for the 'custom' theme.
 * These correspond to the CSS variables used in the library.
 */
export interface DatePickerColors {
    /** Main background color (Popup and Input) */
    background?: string;
    /** Border color for Input and Popup */
    border?: string;
    /** Border color when the input is focused */
    borderFocus?: string;
    /** General text color (Numbers, main text) */
    text?: string;
    /** Placeholder text color when input is empty */
    placeholder?: string;
    
    /** Color of the calendar and clock icons */
    icon?: string;
    /** Background color when hovering over the icon button */
    iconHoverBg?: string;

    /** Background color when selecting text inside the input */
    selectionBg?: string;
    /** Text color when selecting text inside the input */
    selectionText?: string;

    /** Weekday headers color (Mon, Tue...) */
    weekDayText?: string;
    /** Color of days belonging to other months (faded) */
    passiveText?: string;
    /** Background color when hovering over a day */
    hoverBg?: string;
    
    /** Background color of the selected day */
    selectedBg?: string;
    /** Text color of the selected day */
    selectedText?: string;
    
    /** Background color of the "Today" indicator */
    todayBg?: string;
    /** Text color of the "Today" indicator */
    todayText?: string;

    /** Text color for restricted/disabled days */
    restricted?: string;
    /** Color for the shake effect and error border */
    error?: string;
    
    /** Background color of the error toast message */
    toastBg?: string;
    /** Text color of the error toast message */
    toastText?: string;

    /** Color of Hour/Minute/Second headers */
    timeHeader?: string;
    /** Color of inactive time numbers */
    timeNum?: string;
    /** Color of the active (centered) time number */
    timeNumActive?: string;
    /** Color of the separator lines in time picker */
    timeSeparator?: string;
    /** Gradient start color for time scroller (usually same as background with opacity 1) */
    timeGradStart?: string;
    /** Gradient end color for time scroller (usually same as background with opacity 0) */
    timeGradEnd?: string;
}

/**
 * Configuration options for initializing TuncxysDatePicker.
 */
export interface DatePickerOptions {
    /**
     * Language code for localization.
     * @default 'en'
     * @example 'tr', 'en', 'de', 'fr', 'zh', 'ja'...
     */
    lang?: string;

    /**
     * Width of the datepicker input container.
     * @default '300px'
     * @example '100%', '300px', '20rem'
     */
    width?: string;

    /**
     * The 'name' attribute for the hidden input field (useful for form submission).
     * @default 'date_output'
     */
    submitName?: string;

    /**
     * Theme selection.
     * @default 'default'
     */
    theme?: 'default' | 'dark' | 'custom';

    /**
     * Custom color configuration object.
     * Only active when theme is set to 'custom'.
     */
    colors?: DatePickerColors;

    /** * Enable or disable the date picker functionality.
     * @default true 
     */
    enableDate?: boolean;
    
    /** * Enable or disable the time picker functionality.
     * @default true 
     */
    enableTime?: boolean;

    /** * Array of days to disable (0: Sunday, 1: Monday, ...).
     * @example [0, 6] // Disables weekends
     */
    disableWeekDays?: number[];

    /** * Array of specific dates to disable.
     * @format YYYY-MM-DD
     * @example ['2025-12-31', '2026-01-01']
     */
    disableDates?: string[];

    /** * Limits the calendar range to +/- 6 months from today.
     * @default false 
     */
    enableLimit?: boolean;

    /** * Enables detailed day-based offset limits (minOffset/maxOffset works as days).
     * @default false 
     */
    enableDayLimit?: boolean;

    /** * How many days/years back from today are allowed?
     * @default 100
     */
    minOffset?: number;

    /** * How many days/years forward from today are allowed?
     * @default 100
     */
    maxOffset?: number;

    /** * Absolute lower date limit.
     * @format YYYY-MM-DD 
     */
    dateLowerLimit?: string;

    /** * Absolute upper date limit.
     * @format YYYY-MM-DD 
     */
    dateUpperLimit?: string;

    /**
     * Callback function triggered when the date/time changes.
     * @param dateObj The selected date as a JavaScript Date object (or null).
     * @param dateStr The formatted date string.
     * @param instance The current TuncxysDatePicker instance.
     */
    onChange?: (dateObj: Date | null, dateStr: string, instance: TuncxysDatePicker) => void;
}

/**
 * TuncxysDatePicker Class
 * A lightweight, dependency-free date and time picker.
 */
export default class TuncxysDatePicker {
    /**
     * Creates a new instance of TuncxysDatePicker.
     * @param selector CSS selector for the container element (e.g., '#my-datepicker').
     * @param options Configuration options.
     */
    constructor(selector: string, options?: DatePickerOptions);

    /**
     * Completely removes the datepicker from the DOM and cleans up event listeners.
     */
    destroy(): void;

    /**
     * Manually updates the hidden input value based on current selection.
     */
    updateHiddenInput(): void;
}