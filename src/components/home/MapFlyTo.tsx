"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface MapFlyToProps {
  lat: number;
  lng: number;
}

export default function MapFlyTo({ lat, lng }: MapFlyToProps) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([lat, lng], 14, {
      duration: 1.5
    });
  }, [lat, lng, map]);

  return null;
}
