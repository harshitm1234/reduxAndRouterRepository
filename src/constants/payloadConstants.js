import React from "react";

/**
 * Payload Constants to map data in table
 * @param {*} handleEdit 
 */
export const payloadConstants = (handleEdit) => {
	return [
		{
			title: "Payload_Id",
			render: (rowData) => {
				return <span>{rowData.payload_id}</span>;
			},
		},
		{
			title: "Payload_Mass",
			render: (rowData) => {
				return <span>{rowData.payload_mass_kg}</span>;
			},
		},
		{
			title: "Payload_Type",
			render: (rowData) => {
				return <span>{rowData.payload_type}</span>;
			},
		},
		{
			title: "Manufacturer",
			render: (rowData) => {
				return <span>{rowData.manufacturer}</span>;
			},
		},
		{
			title: "Customers",
			render: (rowData) => {
				const customer = rowData.customers?.join(",");
				return <span>{customer}</span>;
			},
		},
	];
};

export default payloadConstants;
