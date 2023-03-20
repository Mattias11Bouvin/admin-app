import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';

const ScatterPlot = ({ data }) => {
  return (
    <ResponsiveScatterPlot
      data={data}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      xScale={{ type: 'linear', min: 0, max: 'auto' }}
      yScale={{ type: 'linear', min: 0, max: 'auto' }}
      blendMode="multiply"
      colors={{ scheme: 'nivo' }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'X Axis',
        legendPosition: 'middle',
        legendOffset: 46,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Y Axis',
        legendPosition: 'middle',
        legendOffset: -60,
      }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 130,
          translateY: 0,
          itemsSpacing: 2,
          itemDirection: 'left-to-right',
          itemWidth: 100,
          itemHeight: 12,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
        },
      ]}
      tooltip={({ node }) => (
        <div
          style={{
            background: 'white',
            padding: '10px',
            border: '1px solid #ccc',
          }}
        >
          <div>{`${node.serieId} - ${node.id}`}</div>
          <div>{`x: ${node.data.x}, y: ${node.data.y}`}</div>
        </div>
      )}
    />
  );
};

export default ScatterPlot;
