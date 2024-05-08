import { getDaysMonth } from '../../../utilities';
const HorariosTable = () => {
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Domingo</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miércoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                    </tr>
                </thead>
                <tbody>
                    {getDaysMonth(1).map((week, index) => (
                        <tr key={index}>
                            {week.map((day, index) => (
                                <td key={index}>{day.format('D')}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default HorariosTable;
