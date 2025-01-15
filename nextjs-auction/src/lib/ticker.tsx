import { timeRemaining } from "./types";

export function countdownTimer(end: string, now: string) {
    const difference = Date.parse(end) - Date.parse(now);
    const time: timeRemaining = {
        seconds: Math.floor((difference / 1000) % 60),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    };
    if (time.days > 0) {
        return `${time.days + 1} Days`;
    } else if (Object.values(time).every(x => x == 0)){
        return "Sold"
    }
    else {

        return `${time.hours}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`;
    }
}
