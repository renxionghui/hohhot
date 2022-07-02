import Mapbox from "mapbox-gl";

const usePopup = (option) => {
    return new Mapbox.Popup(option)
}

export { usePopup }