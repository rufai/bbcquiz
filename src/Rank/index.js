import React, { useState } from "react";

function Table() {
  const [data, setData] = useState([
    { rank: 1, hint: "Country in Southeast Asia", answer: "Indonesia" },
    { rank: 2, hint: "Home of the Eiffel Tower", answer: "France" },
    { rank: 3, hint: "Largest state in the United States", answer: "Alaska" },
    //... add more rows here
  ]);

  const updateData = (rowIndex, columnIndex, value) => {
    const updatedData = [...data];
    updatedData[rowIndex][columnIndex] = value;
    setData(updatedData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Hint</th>
          <th>Answers</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>
              <input
                type="number"
                value={row.rank}
                onChange={(e) =>
                  updateData(rowIndex, 0, parseInt(e.target.value))
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={row.hint}
                onChange={(e) => updateData(rowIndex, 1, e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={row.answer}
                onChange={(e) => updateData(rowIndex, 2, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
