import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { es } from 'dayjs/locale/es';

dayjs.locale('es');

export const getNextSevenDays = () => {
    const days = new Array(7).fill(null).map((_, index) => {
        return dayjs().add(index, 'day');
    });
    return days;
};

export const getDaysForWeek = (week = dayjs().week()) => {
    dayjs.extend(weekOfYear);
    const currentYear = dayjs().year();
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            return dayjs().week(week).year(currentYear);
        });
    });

    return daysMatrix;
};
