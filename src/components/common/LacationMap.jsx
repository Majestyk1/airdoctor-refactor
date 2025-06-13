import { GoogleMap, Marker, Circle, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '350px',
  borderRadius: '1rem',
  boxShadow: '0 4px 24px 0 rgba(30,30,40,0.15)'
}

// City coordinates
const sanAntonio = { lat: 29.4241, lng: -98.4936 }
const austin = { lat: 30.2672, lng: -97.7431 }

function LocationMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  })

  return isLoaded ? (
    <div className="location-map rounded-2xl overflow-hidden shadow-lg border border-blue-200/40">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 29.845, lng: -98.118 }} // Center between the two cities
        zoom={8}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        {/* Markers */}
        <Marker position={sanAntonio} label="San Antonio" />
        <Marker position={austin} label="Austin" />

        {/* Circles for service area (about 50 mile radius) */}
        <Circle
          center={sanAntonio}
          radius={80000} // meters (~50 miles)
          options={{
            fillColor: '#2563eb55', // semi-transparent Dodgers blue
            strokeColor: '#2563eb',
            strokeWeight: 2,
          }}
        />
        <Circle
          center={austin}
          radius={80000}
          options={{
            fillColor: '#2563eb33',
            strokeColor: '#2563eb',
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    </div>
  ) : (
    <div className="location-map__loading text-center py-12 text-blue-400">Loading map…</div>
  )
}

export default LocationMap