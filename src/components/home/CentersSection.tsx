"use client";

import { useState } from "react";
import CentersMap from "./CentersMap";
import Centers from "./Centers";

export default function CentersSection() {
  const [selectedCenterIndex, setSelectedCenterIndex] = useState<number | null>(null);

  return (
    <>
      <CentersMap selectedCenterIndex={selectedCenterIndex} />
      <Centers 
        selectedCenterIndex={selectedCenterIndex} 
        setSelectedCenterIndex={setSelectedCenterIndex} 
      />
    </>
  );
}
