import Mapbox from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";

const center = [111.67051428221805, 40.82877806019658];
Mapbox.accessToken = "pk.eyJ1IjoicmVueGlvbmdodWkiLCJhIjoiY2w0Yms4c2c5MW4yeDNlbnN0eGszZTExZSJ9.UNq7x8E0CxG3Qc9CN77EGQ";

const useMap = (container = "map",style = "mapbox://styles/mapbox/streets-v11") => {

    const map = new Mapbox.Map({
        container,
        style,
        center,
        zoom: 12,
        antialias: true
    });
    const language = new MapboxLanguage({ defaultLanguage: "zh-Hans" });
    map.addControl(language);
    document.querySelector(".mapboxgl-ctrl-bottom-left").style.display = "none";
    document.querySelector(".mapboxgl-ctrl-bottom-right").style.display = "none";

    return map;
}

export { useMap }