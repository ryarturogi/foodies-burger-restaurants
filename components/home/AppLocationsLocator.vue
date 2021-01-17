<template>
  <div class="l-locator row no-gutters">
    <div class="c-locator col-md-6">
      <h3 class="c-location__heading" data-aos="flip-up" data-aos-delay="300">
        Estamos para ti
      </h3>
      <div class="c-type-selector">
        <button
          class="c-type-selector__option"
          :class="{
            'c-type-selector__option--active': type === 'takeaway',
          }"
          @click="setType('takeaway')"
        >
          <div class="c-type-selector__icon">
            <img src="@/assets/img/SVG/takeaway-icon.svg" alt="takeaway" />
          </div>
          Takeaway
        </button>
        <button
          class="c-type-selector__option"
          :class="{
            'c-type-selector__option--active': type === 'delivery',
          }"
          @click="setType('delivery')"
        >
          <div class="c-type-selector__icon">
            <img src="@/assets/img/SVG/delivery-icon.svg" alt="delivery" />
          </div>
          Delivery
        </button>
      </div>
      <div class="l-search-bar">
        <div class="c-search-bar">
          <img
            src="@/assets/img/SVG/search-icon.svg"
            alt="search-icon"
            class="c-search-bar-field__icon"
          />
          <input
            v-model="search"
            class="c-search-bar__field"
            type="text"
            placeholder="Buscar nombre o dirección"
            @change="showResults = true"
            @keyup.enter="getLocations"
          />
        </div>
        <transition-group name="fade" tag="nav" class="c-results">
          <li
            v-for="location in locations"
            :key="location.id"
            class="c-results__item"
          >
            <button
              class="c-results-item__action"
              @click="setLocation(location)"
            >
              <h4 class="c-results-item__heading">{{ location.name }}</h4>
              <span class="c-results-item__info">
                Abierto de {{ location.opening_time }} -
                {{ location.closing_time }} <br />
                {{ location.address }}
              </span>
            </button>
          </li>
        </transition-group>
      </div>

      <!-- <nav v-if="locations.length && !showResults" class="c-locations__list">
        <li
          v-for="location in locations"
          :key="location.id"
          class="c-locations-list__item"
        >
          {{ location.name }} - {{ location.address }}
        </li>
      </nav> -->
    </div>
    <div id="map" class="l-map-locator col-md-6"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

const locationsApi = "https://api.elaniin.dev/api/locations";

export default {
  data() {
    return {
      search: "",
      type: "takeaway",
      locations: [],
      showResults: false,
      map: {},
    };
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css",
      },
    ],
  },
  mounted() {
    this.getLocations();
    this.createMap();
  },
  methods: {
    async getLocations() {
      const locations = await this.$axios.$get(locationsApi, {
        params: { type: this.type, query: this.search },
      });
      this.locations = locations.data;
      this.search = "";
      this.showResults = true;
    },
    setLocation(loc) {
      this.locations = this.locations.filter(
        (loc) =>
          loc.name.indexOf(this.search.toLowerCase()) &&
          loc.type.indexOf(this.type)
      );
      this.locations = location.data;
      this.search = "";
      this.showResults = false;

      const LngLat = [Number(loc.longitude), Number(loc.latitude)];
      new mapboxgl.Marker().setLngLat(LngLat).addTo(this.map);
      this.map.flyTo({
        center: LngLat,
        zoom: 12,
      });
    },
    setType(type) {
      this.type = type;
      this.showResults = false;
      this.search = "";
    },
    createMap() {
      mapboxgl.accessToken = process.env.MAPBOXAPI;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 9,
        center: [-88.916663, 13.83333],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";
@import "@/assets/scss/base/utilities.scss";

.l-locator {
  width: 100%;
  margin: 5rem auto;
  display: flex;
  justify-content: center;

  @include m {
    min-height: fit-content;
  }
}

.c-locator {
  padding: 1rem;
}

.c-location__heading {
  margin: 0 auto 3.2rem;
  padding: 0 2rem;
  font-family: Druk Text Wide;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 2.8rem;

  @include s {
    padding: 0 5.3rem;
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
  @include m {
    font-size: 4rem;
    line-height: 4rem;
  }
}

.c-type-selector {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.c-type-selector__option {
  width: 100%;
  height: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $color-gray-500;
  font-family: Syne;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.8rem;
  filter: invert(0);
  color: $color-black;
  background: $color-white;
  outline: 0;

  @include m {
    font-size: 2.5rem;
  }

  &--active {
    filter: invert(1);
  }

  &:focus {
    border-color: $color-gray-600;
  }
}
.c-type-selector__icon {
  margin: 0 1.5rem 0 0;
  display: flex;
  align-items: center;

  @include m {
    margin: 0 2.5rem 0 0;
  }

  img {
    height: 2.5rem;
    max-width: 100%;
  }
}

.c-search-bar {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $color-gray-500;
}

.c-search-bar__field {
  width: 30rem;
  height: fit-content;
  min-height: 4.5rem;
  max-width: 100%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  outline: none;
  font-size: 1.8rem;
  font-weight: 700;

  &::placeholder {
    font-family: Open Sans;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-transform: uppercase;
    color: $color-gray-500;
  }
}

.c-search-bar-field__icon {
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 2.4rem 0 0;
}

.c-results {
  width: 100%;
  list-style: none;
}

.c-results__item {
  margin: 1.5rem auto;
}

.c-results-item__heading {
  font-family: Syne;
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4rem;
}

.c-results-item__info {
  font-family: Open Sans;
  font-size: 1.6rem;
  line-height: 2.2rem;
}

.c-results-item__action {
  min-height: 10.2rem;
  width: 100%;
  max-width: 100%;
  padding: 1.5rem 2.2rem;
  border-radius: 4px;
  text-align: left;
  color: $color-black;
  background: $color-white;

  &:hover {
    background: $color-yellow-300;
  }
}

// .c-locations__list {
// }

// .c-locations-list__item {
// }

.l-map-locator {
  display: none;

  @include m {
    height: 60.9rem;
    display: block;
  }
}

#map {
  width: 100%;
  height: 50rem;
  min-height: max-content;
}
</style>
