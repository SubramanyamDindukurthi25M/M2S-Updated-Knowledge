export const DisplayData = ({value}) => {
    const {
        coord,
        main
    } = value;
    const fahrenheitToCelsius = (main.temp - 32) * 5 / 9;
    return (
        <>
            {value && <table className="table table-sm text-center">
            <thead>
                <tr>
                    <th scope="col">
                        # 
                    </th>
                    <th scope="col">
                        Latitude 
                    </th>
                    <th scope="col">
                        Longitude
                    </th>
                    <th scope="col">
                        Temparature(in <sup>o</sup>C)
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {
                            value.id
                        }
                    </td>
                    <td>
                        {
                            coord.lat
                        }
                    </td>
                    <td>
                        {
                            coord.lon
                        }
                    </td>
                    <td>
                        {
                            fahrenheitToCelsius.toFixed()
                        }
                    </td>
                </tr>
            </tbody>
        </table>}
        </>
    )
}