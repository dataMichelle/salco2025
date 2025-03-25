import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Define business locations with coordinates
const locations = [
  { name: "India", coordinates: [20.5937, 78.9629] },
  { name: "Latin America", coordinates: [-34.6118, -58.4173] },
  { name: "Middle East", coordinates: [25.276987, 55.296249] },
  { name: "Europe", coordinates: [51.1657, 10.4515] },
  { name: "Asia Pacific", coordinates: [-0.7893, 113.7633] },
  { name: "Colombia", coordinates: [4.5709, -74.2973] },
  { name: "Mexico", coordinates: [23.6345, -102.5528] },
  { name: "Peru", coordinates: [-9.19, -75.0152] },
  { name: "Guatemala", coordinates: [15.7835, -90.2308] },
  { name: "Brazil", coordinates: [-14.235, -51.9253] },
];

const GlobalPresence = () => {
  return (
    <section className="container mx-auto py-12 px-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Global Presence
      </h2>
      <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
        Our business spans multiple regions, leveraging localized insights and
        strategic partnerships to drive international growth.
      </p>

      {/* Interactive World Map */}
      <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={[20, 0]} zoom={2} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {/* Markers for each location */}
          {locations.map((location, index) => (
            <Marker key={index} position={location.coordinates}>
              <Popup>
                <h3 className="text-lg font-semibold">{location.name}</h3>
                <p>We operate in this region.</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default GlobalPresence;
