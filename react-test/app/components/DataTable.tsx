import React from 'react';

interface DataTableProps <T> {
    data : T[]
    caption? : String
}

const DataTable = <T extends object>({ data, caption }: DataTableProps<T>) => {
  // Check if the array is empty
  if (!data || data.length === 0) {
    return <p>No data available to display.</p>;
  }

  // Get the keys (property names) from the FIRST object in the array.
  // These keys will be used as the table column headers.
  const headers = Object.keys(data[0]);

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      {caption && <caption>{caption}</caption>}
      
      {/* Table Header (<thead>) */}
      <thead>
        <tr>
          {/* Map through the keys to create one <th> for each property */}
          {headers.map((key) => (
            // The key prop is important for React list rendering
            <th 
              key={key} 
              style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}
            >
              {/* Capitalize the first letter of the key for a nice header */}
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      
      {/* Table Body (<tbody>) */}
      <tbody>
        {/* Map through the entire DATA array to create one <tr> for each object */}
        {data.map((item, index) => (
          // Use the array index as the row key
          <tr key={index} style={{ border: '1px solid #ddd' }}>
            {/* Map through the HEADERS array to get the value for each cell */}
            {headers.map((key) => (
              <td 
                key={key} 
                style={{ border: '1px solid #ddd', padding: '8px' }}
              >
                {/* Access the dynamic property value using bracket notation: item[key] */}
                {String(item[key as keyof T])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;