import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '350px',
  borderRadius: '1rem',
  boxShadow: '0 4px 24px 0 rgba(30,30,40,0.15)'
}

const center = {
  lat: 29.4241, // Example: San Antonio, TX
  lng: -98.4936
}

function LocationMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY // Store your key in .env
  })

  return isLoaded ? (
    <div className="location-map rounded-2xl overflow-hidden shadow-lg border border-blue-200/40">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: [/* Optional: custom map styles for glassy look */]
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  ) : (
    <div className="location-map__loading text-center py-12 text-blue-400">Loading map…</div>
  )
}

export default LocationMap