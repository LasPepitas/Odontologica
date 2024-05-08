import dayjs from 'dayjs';
import { es } from 'dayjs/locale/es';

dayjs.locale('es');

export function getDaysMonth(month = dayjs().month()) {
    // Redondea el mes al valor entero más cercano
    month = Math.floor(month);
    const currentYear = dayjs().year();
    const firstDay = dayjs(new Date(currentYear, month, 1)).day();
    let currentMonth = 0 - firstDay;

    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonth++;
            // Crea un objeto dayjs para representar cada día del mes
            return dayjs(new Date(currentYear, month, currentMonth));
        });
    });

    return daysMatrix;
}
