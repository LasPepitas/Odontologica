import WeekCalendar from './WeekCalendar';

const HorariosTable = () => {
    return (
        <section className="h-full w-full flex flex-col">
            <h2 className="font-extrabold text-3xl mb-4">Horarios</h2>
            <WeekCalendar />
        </section>
    );
};

export default HorariosTable;
