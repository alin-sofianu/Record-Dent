// PrintableTable.js
import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintableTableDiagnostic = () => {
    const [tableData, setTableData] = useState([
        { id: 1, name: '', age: '', email: '' },
        { id: 2, name: '', age: '', email: '' },
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
                        <th>Dinte</th>
                        <th>Diagnostic</th>
                        <th>Tratat/Netratat</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>
                                <input
                                    type="text"
                                    value={row.name}
                                    onChange={(e) => handleInputChange(rowIndex, 'name', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.age}
                                    onChange={(e) => handleInputChange(rowIndex, 'age', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.email}
                                    onChange={(e) => handleInputChange(rowIndex, 'email', e.target.value)}
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

export default PrintableTableDiagnostic;
