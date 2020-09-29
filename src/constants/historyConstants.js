import React from "react";

/**
 * History Constants to map data in table
 * @param {|} handleEdit 
 */
const historyConstants = (handleEdit) => {
	return [
		{
			title: "ID",
			render: (rowData) => {
				return <span>{rowData.id}</span>;
			},
		},
		{
			title: "Flight_Number",
			render: (rowData) => {
				return <span>{rowData.flight_number}</span>;
			},
		},
		{
			title: "Details",
			render: (rowData) => {
				return <span>{rowData.details}</span>;
			},
		},
		{
			title: "wiki",
			render: (rowData) => {
				return <span>{rowData.links?.wikipedia}</span>;
			},
		},
		{
			title: "Article",
			render: (rowData) => {
				return <span>{rowData.links?.article}</span>;
			},
		},
	];
};

export default historyConstants;
