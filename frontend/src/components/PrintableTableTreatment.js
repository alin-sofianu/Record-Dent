// PrintableTable.js
import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintableTableTreatment = () => {
    const [tableData, setTableData] = useState([
        { id: 1, no: '', date: '', tooth:'', trat: '', obs:'' },
        { id: 2, no: '', date: '', tooth:'', trat: '', obs:'' },
        { id: 3, no: '', date: '', tooth:'', trat: '', obs:'' },
        { id: 4, no: '', date: '', tooth:'', trat: '', obs:'' },
        { id: 5, no: '', date: '', tooth:'', trat: '', obs:'' },
        // Add more rows as needed
    ]);

    const handleInputChange = (rowIndex, field, value) => {
        const updatedData = [...tableData];
        updatedData[rowIndex][field] = value;
        setTableData(updatedData);
    };

    const printRef = React.createRef();

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    return (
        <div>
            <table ref={printRef}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Data</th>
                        <th>Dintele</th>
                        <th>Trat.</th>
                        <th>Observatii.</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>
                                <input
                                    type="text"
                                    value={row.date}
                                    onChange={(e) => handleInputChange(rowIndex, 'date', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.tooth}
                                    onChange={(e) => handleInputChange(rowIndex, 'tooth', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.trat}
                                    onChange={(e) => handleInputChange(rowIndex, 'trat', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.obs}
                                    onChange={(e) => handleInputChange(rowIndex, 'obs', e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={handlePrint}>Print</button>
        </div>
    );
};

export default PrintableTableTreatment;
