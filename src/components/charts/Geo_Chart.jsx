import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";

const Geo_Chart = () => {
  const coloredCountries = [
    "India",
    "United States of America",
    "South Africa",
    "Russia",
  ];

  const colorScale = scaleQuantize().domain([0, 1]).range(["#ddd", "skyblue"]);

  return (
    <ComposableMap projection="geoMercator">
      <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
        {({ geographies }) =>
          geographies.map((geo) => {
            const isColored = coloredCountries.includes(geo.properties.name);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={colorScale(isColored ? 1 : 0)}
                stroke="#EAEAEC"
                strokeWidth={0.5}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Geo_Chart;
