// @ts-nocheck
// src/App.tsx

import { createElement, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function App() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [121.5645, 25.0330],
      zoom: 15,
    });

    return () => map.remove();
  }, []);

  return createElement("div", {
    ref: mapRef,
    style: {
      width: "100vw",
      height: "100vh",
    },
  });
}