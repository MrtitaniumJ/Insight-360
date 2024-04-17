import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const D3Chart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current);

    // Example D3 chart code
    svg
      .append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", 20)
      .style("fill", "blue");
  }, []);

  return <svg ref={chartRef} width="100%" height="100%" />;
};

export default D3Chart;
