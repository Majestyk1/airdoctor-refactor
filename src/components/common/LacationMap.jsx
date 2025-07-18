import { GoogleMap, Marker, Circle, useJsApiLoader } from '@react-google-maps/api'
import { mapLocations, mapConfig } from '../../constants'

const containerStyle = {
  width: '100%',
  height: '350px',
  borderRadius: '1rem',
  boxShadow: '0 4px 24px 0 rgba(30,30,40,0.15)'
}

function LocationMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: 'weekly'
  })

  return isLoaded ? (
    <div className="location-map relative rounded-2xl overflow-hidden shadow-lg border border-[#178582]/40 bg-[#1A2332]">
      {/* Themed overlay */}
      <div className="location-map__overlay absolute inset-0 bg-gradient-to-br from-[#0A1828]/20 via-[#178582]/10 to-[#1A2332]/30 pointer-events-none z-10 rounded-2xl"></div>
      
      {/* Border glow effect */}
      <div className="location-map__glow absolute -inset-1 bg-gradient-to-r from-[#178582]/40 via-[#178582]/20 to-[#178582]/40 rounded-2xl blur-sm opacity-60"></div>
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapLocations.center}
        zoom={mapConfig.zoom}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: [
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#000000' }]
            },
            {
              featureType: 'all',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#ffffff' }, { lightness: 13 }]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#000000' }]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#ffffff' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }]
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.fill',
              stylers: [{ color: '#000000' }]
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#444444' }, { lightness: 14 }, { weight: 1.4 }]
            },
            {
              featureType: 'landscape',
              elementType: 'all',
              stylers: [{ color: '#2c5aa0' }]
            },
            {
              featureType: 'poi',
              elementType: 'all',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'transit',
              elementType: 'all',
              stylers: [{ color: '#ffffff' }]
            },
            {
              featureType: 'water',
              elementType: 'all',
              stylers: [{ color: '#0A1828' }]
            }
          ]
        }}
      >
        {/* Markers */}
        <Marker position={mapLocations.sanAntonio} label="San Antonio" />
        <Marker position={mapLocations.austin} label="Austin" />

        {/* Circles for service area (about 50 mile radius) */}
        <Circle
          center={mapLocations.sanAntonio}
          radius={80000} // meters (~50 miles)
          options={{
            fillColor: '#17858255', // semi-transparent brand teal
            strokeColor: '#178582',
            strokeWeight: 2,
          }}
        />
        <Circle
          center={mapLocations.austin}
          radius={80000}
          options={{
            fillColor: '#17858233',
            strokeColor: '#178582',
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
      
      {/* Service area label overlay */}
      <div className="location-map__label absolute top-4 left-4 bg-[#178582]/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg border border-[#178582]/40">
        Service Area
      </div>
    </div>
  ) : (
    <div className="location-map__loading text-center py-12 text-[#178582] bg-[#1A2332] rounded-2xl border border-[#178582]/40">Loading map…</div>
  )
}

export default LocationMap