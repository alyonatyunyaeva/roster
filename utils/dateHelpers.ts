import {
    formatDuration,
    intervalToDuration,
    differenceInYears,
    isAfter,
} from "date-fns";

export const calculateExperience = (value: string) => {
    const interval = {
        start: new Date(value),
        end: Date.now(),
    };
    const duration = intervalToDuration(interval);
    return formatDuration(duration, {
        format: ["years", "months", "days"],
        zero: false,
    });
};

export const calculateDifInYears = (value: string) => {
    const date = new Date(value);
    const today = new Date();
    return differenceInYears(today, date);
};

export const isFutureDate = (time: Date) => {
    return isAfter(time, new Date());
};
