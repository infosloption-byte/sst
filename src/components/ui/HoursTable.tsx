import { HOURS_ROWS } from '@/config/site'

export function HoursTable() {
  return (
    <table className="hours-table">
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {HOURS_ROWS.map((row) => (
          <tr key={row.days}>
            <th scope="row">{row.days}</th>
            <td>{row.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
