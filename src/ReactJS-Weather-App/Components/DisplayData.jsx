export const DisplayData = ({value}) => {
    const {
        coord,
        main
    } = value;
    const fahrenheitToCelsius = main && ((main.temp - 32) * 5 / 9)
    
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
                            coord && coord.lat 
                        }
                    </td>
                    <td>
                        {
                            coord && coord.lon
                        }
                    </td>
                    <td>
                        {
                            fahrenheitToCelsius && fahrenheitToCelsius.toFixed()
                        }
                    </td>
                </tr>
            </tbody>
        </table>}
        </>
    )
}