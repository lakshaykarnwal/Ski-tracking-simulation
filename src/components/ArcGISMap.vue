<template>
  <div>
    <div id="viewDiv" style="height: 100vh;"></div>
    <button id="recenterBtn" @click="recenterMap">Re-center</button>
    <div v-if="selectedTrail" class="trail-info-box">
      <button class="close-btn" @click="closeInfoBox">×</button>
      <h3>{{ selectedTrail.Ski_Name }}</h3>
      <ul>
        <li><strong>Trail Type:</strong> {{ selectedTrail.TRL_TYPE || 'N/A' }}</li>
        <li><strong>Ski Type:</strong> {{ selectedTrail.Ski_Type || 'N/A' }}</li>
        <li><strong>Trail Length:</strong> {{ selectedTrail.Miles ? `${selectedTrail.Miles.toFixed(2)} miles` : 'N/A' }}</li>
        <li><strong>Trail Width:</strong> {{ selectedTrail.Width || 'N/A' }}</li>
        <li><strong>Surface:</strong> {{ selectedTrail.Surface || 'N/A' }}</li>
        <li><strong>Comments:</strong> {{ selectedTrail.Comments || 'N/A' }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { loadModules } from 'esri-loader';

export default {
    data() {
        return{
            view: null,
            currentPoint: null,
            trailsUrl: "https://services3.arcgis.com/Jdnp1TjADvSDxMAX/ArcGIS/rest/services/open_Trails/FeatureServer/4/query?outFields=*&where=1%3D1&f=geojson",
            selectedTrail: null,
        };     
    },
    mounted(){
        this.initializeMap();
    },
    methods: {
        initializeMap(){
            loadModules([
                "esri/widgets/Track",
                "esri/views/MapView",
                "esri/Map",
                "esri/layers/GeoJSONLayer",
                "esri/Graphic",
                "esri/geometry/Point",
                "esri/widgets/Zoom"
            ]).then(([Track, MapView, Map, GeoJSONLayer, Graphic, Point, Zoom]) => {
                this.Graphic = Graphic;
                this.Point = Point;
                
                const map = new Map({
                    basemap: "topo-vector" 
                });

                const trailsLayer = new GeoJSONLayer({
                    url: this.trailsUrl,
                    renderer: {
                        type: "simple",
                        symbol: {
                        type: "simple-line",
                        color: "red",
                        width: 2
                        }
                    },
                    outFields: ["*"]
                });

                map.add(trailsLayer);

                this.view = new MapView({
                    map: map,
                    container: "viewDiv",
                    zoom: 7,
                    center: [-86.34, 43.25],
                });

                const zoom = new Zoom({view: this.view});
                this.view.ui.add(zoom, "top-left");

                const track = new Track({view: this.view, goToLocationEnabled: false});
                this.view.ui.add(track, "top-left");

                this.view.when(() => {
                    this.fetchGeoJSONData();
                });

                this.view.on("click", (event) => {
                    this.view.hitTest(event).then((response) => {
                        const feature = response.results.find(result => result.graphic.layer === trailsLayer)
                        if(feature){
                            this.selectedTrail = feature.graphic.attributes;
                        }
                    });
                });
            }).catch(err => {
                console.log('ArcGIS modules failed to load: ', err);
            });
        },
        
        fetchGeoJSONData(){
            fetch(this.trailsUrl)
                .then(response => response.json())
                .then(data => {
                    const longestTrail = this.findLongestTrail(data);
                    const initialCoordinate = longestTrail.coordinates[0];
                    this.view.center = [initialCoordinate[0], initialCoordinate[1]];
                    this.animateAlongTrail(longestTrail.coordinates);
                })
                .catch(error => {
                    console.error('Error fetching GeoJSON data: ', error);
                });
        },

        findLongestTrail(geojson) {
            let longestTrail = null;
            let maxLength = 0;
            geojson.features.forEach(feature => {
                if (feature.geometry.type === "LineString") {
                const length = feature.geometry.coordinates.length;
                if (length > maxLength) {
                    maxLength = length;
                    longestTrail = feature.geometry;
                    }
                }
            });
            return longestTrail;
        },

        animateAlongTrail(coordinates){
            let currentIndex = 0;
            const pointSymbol = {
                type: "simple-marker",
                style: "circle",
                color: "blue",
                size: "12px"
            };
            const pointGraphic = new this.Graphic({ symbol: pointSymbol });
            this.view.graphics.add(pointGraphic);

            const updatePoint = () => {
                if (currentIndex >= coordinates.length) {
                currentIndex = 0;
                }
                const coord = coordinates[currentIndex];
                this.currentPoint = new this.Point({ longitude: coord[0], latitude: coord[1] });
                pointGraphic.geometry = this.currentPoint;
                currentIndex++;
                setTimeout(updatePoint, 1000);
            };
            updatePoint();
        },
        recenterMap() {
            if (this.currentPoint) {
                this.view.goTo({ target: this.currentPoint, zoom: 18 });
            }
        },
        closeInfoBox() {
        this.selectedTrail = null;
        }
    }
};
</script>

<style scoped>
#recenterBtn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 50;
  background-color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

#recenterBtn:hover {
  background-color: rgb(121, 121, 121);
}

.trail-info-box {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  z-index: 1000;
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
}

.trail-info-box h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.trail-info-box ul {
  list-style-type: none;
  padding: 0;
}

.trail-info-box li {
  margin-bottom: 5px;
}
</style>