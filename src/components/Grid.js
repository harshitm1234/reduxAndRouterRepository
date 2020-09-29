import React from "react";
import "./Grid.css";

/**
 * Grid to map and display data 
 * @param {1} param0 
 */
function Grid({ cols, data }) {
	return (
		<table>
			<thead>
				<tr>
					{cols.map((headerItem, index) => (
						<th key={index}>{headerItem.title}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={index}>
						{cols.map((col, key) => (
							<td key={key}>{col.render(item)}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Grid;
