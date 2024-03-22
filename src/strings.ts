export const KEYS = {
    INITIAL_COUNT: 'INITIAL_COUNT',
    INCREMENT_STEP: 'INCREMENT_STEP',
    MAX_COUNT: 'MAX_COUNT',
    COUNT: 'COUNT',
} as const

export const DEFAULT = {
    INITIAL_COUNT: 0,
    INCREMENT_STEP: 1,
    MAX_COUNT: 5,
} as const

export const STATE = {
    NORMAL: 'NORMAL',
    EDIT: 'EDIT',
    ERROR: 'ERROR',
} as const

export const TEXT = {
    START_VALUE: 'Start value',
    MAX_VALUE: 'Max value',
    SET: 'set',
    INC: 'inc',
    RESET: 'reset',
    SET_VALUES: 'enter values and press \'set\'',
    INCORRECT_VALUE: 'Incorrect value!',
} as const