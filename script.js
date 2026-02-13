document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Map
    // Centered on Mediterranean to show most points initially
    const map = L.map('map', {
        zoomControl: false // We relocate it or style it
    }).setView([42.0, 12.0], 4);

    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // 2. Add Tile Layer (Clean and minimal look)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // 3. Data: Memories and Locations
    const recuerdos = [
        {
            coords: [41.3851, 2.1734],
            foto: "fotos/Barcelona.jpeg",
            texto: "Barcelona ❤️",
            id: "barcelona"
        },
        {
            coords: [30.0444, 31.2357],
            foto: "fotos/Egipto.jpeg",
            texto: "Aventura en Egipto 🐪",
            id: "egipto"
        },
        {
            coords: [51.5074, -0.1278],
            foto: "fotos/Londres.jpeg",
            texto: "Londres 🇬🇧",
            id: "londres"
        },
        {
            coords: [39.6953, 3.0176],
            foto: "fotos/Mallorca.jpeg",
            texto: "Relax en Mallorca 🌊",
            id: "mallorca"
        },
        {
            coords: [41.0082, 28.9784],
            foto: "fotos/Turquia.jpeg",
            texto: "Magia en Turquía 🇹🇷",
            id: "turquia"
        }
    ];

    const markers = {};
    const locationList = document.getElementById('location-list');

    // 4. Create Markers and List Items
    recuerdos.forEach(lugar => {
        // Create Custom Icon
        const heartIcon = L.divIcon({
            className: 'custom-div-icon',
            html: "<div class='heart-icon'>❤️</div>",
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -10]
        });

        // Add Marker to Map
        const marker = L.marker(lugar.coords, { icon: heartIcon }).addTo(map);
        
        // Create Popup Content
        const popupContent = `
            <div class="popup-content-container">
                <img src="${lugar.foto}" class="popup-img" alt="${lugar.texto}" onerror="this.src='https://via.placeholder.com/220x150?text=No+Image'">
                <div class="popup-content">
                    <div class="popup-text">${lugar.texto}</div>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        markers[lugar.id] = marker;

        // Create List Item
        const li = document.createElement('li');
        li.className = 'location-item';
        li.innerHTML = `
            <span class="location-icon">❤️</span>
            <span>${lugar.texto}</span>
        `;
        
        li.addEventListener('click', () => {
            // Remove active class from all
            document.querySelectorAll('.location-item').forEach(item => item.classList.remove('active'));
            // Add active class to clicked
            li.classList.add('active');

            // Fly to location
            map.flyTo(lugar.coords, 10, {
                animate: true,
                duration: 1.5
            });

            // Open Popup after animation
            marker.openPopup();

            // On mobile, close sidebar after selection
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('open');
            }
        });

        locationList.appendChild(li);
    });

    // 5. Sidebar Toggle Logic for Mobile
    const toggleBtn = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking on map (mobile)
    map.on('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });

    // Adjust map on resize
    window.addEventListener('resize', () => {
        map.invalidateSize();
    });
});
