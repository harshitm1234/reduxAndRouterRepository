import React, { useState } from "react";
import arrChunks from "../chunkHelper";
import Grid from "../components/Grid";

import "./pages.css";

/**
 * Component to display different pages
 * @param {*} param0 
 */
function Page({ title, data, constants }) {
	/**
	 * Create pagination chunks
	 */
	const [pages] = useState(arrChunks(data));
	const [pageNum, setPageNum] = useState(0);

	/**
	 * Function to map single grid rowItem
	 * @param {*} item 
	 */
	const handleEdit = (item) => item;
	return (
		<div>
			<center>
				<h1>{title}</h1>
			</center>
			<Grid cols={constants(handleEdit)} data={pages[pageNum]} />
			<div className="pagination">
				{pageNum !== 0 && (
					<button className="page-btn" onClick={() => setPageNum((prev) => prev - 1)}>
						-
					</button>
				)}
				{pages.map((page, index) => (
					<p
						key={index}
						className={` page-num-btn ${index === pageNum && `active`}`}
						onClick={() => setPageNum(index)}
					>
						{index}
					</p>
				))}
				{pageNum !== pages.length - 1 && (
					<button className="page-btn" onClick={() => setPageNum((prev) => prev + 1)}>
						+
					</button>
				)}
			</div>
		</div>
	);
}

export default Page;
