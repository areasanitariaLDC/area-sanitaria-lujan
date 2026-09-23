"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import centros from "@/data/centros.json";
import "leaflet/dist/leaflet.css";

// We need to dynamically import the map components because Leaflet only works on the client-side
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// Component to handle map flyTo when selectedCenterIndex changes
const MapFlyTo = dynamic(
  () => import("./MapFlyTo"),
  { ssr: false }
);

interface CentersMapProps {
  selectedCenterIndex: number | null;
}

export default function CentersMap({ selectedCenterIndex }: CentersMapProps) {
  const [mounted, setMounted] = useState(false);
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    
    // Fix Leaflet's default icon issue with Next.js/Webpack
    import("leaflet").then((leaflet) => {
      setL(leaflet);
      delete (leaflet.Icon.Default.prototype as any)._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    });
  }, []);

  if (!mounted || !L) return <div className="w-full h-[500px] bg-slate-100 animate-pulse rounded-2xl" />;

  // Create custom red icon
  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const defaultIcon = new L.Icon.Default();

  // Center of Luján de Cuyo
  const centerPosition: [number, number] = [-33.0382276, -68.8882553]; 

  return (
    <section id="mapa" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mendoza-blue-dark mb-4">
            Mapa de Cobertura
          </h2>
          <p className="text-lg text-slate-600">
            Encontrá el centro de salud o posta sanitaria más cercano a tu domicilio.
          </p>
        </div>

        <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 z-0">
          <MapContainer 
            center={centerPosition} 
            zoom={11} 
            scrollWheelZoom={true}
            className="w-full h-full z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {centros.map((centro, idx) => (
              <Marker 
                key={idx} 
                position={[centro.lat, centro.lng]}
                icon={selectedCenterIndex === idx ? redIcon : defaultIcon}
                zIndexOffset={selectedCenterIndex === idx ? 1000 : 0}
              >
                <Popup>
                  <div className="p-1 max-w-[200px]">
                    <h3 className="font-bold text-sm mb-1">{centro.name}</h3>
                    <p className="text-xs text-slate-600 mb-1">{centro.type}</p>
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2">{centro.address || "Dirección no disponible"}</p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${centro.lat},${centro.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Abrir en Google Maps
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
            
            {/* Component to fly map to selected center */}
            {selectedCenterIndex !== null && (
               <MapFlyTo lat={centros[selectedCenterIndex].lat} lng={centros[selectedCenterIndex].lng} />
            )}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
