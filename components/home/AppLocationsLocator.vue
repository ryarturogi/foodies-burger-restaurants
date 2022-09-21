<template>
  <div class="container l-locator row no-gutters p-0">
    <div class="c-locator col-md-12 col-lg-6 px-5">
      <h3 class="c-location__heading" data-aos="flip-up" data-aos-delay="300">
        Estamos para ti
      </h3>
      <div class="c-type-selector">
        <button
          class="c-type-selector__option"
          :class="{
            'c-type-selector__option--active': type === 'takeaway',
          }"
          @click="setTypeHandler('takeaway')"
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
          @click="setTypeHandler('delivery')"
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
          />
        </div>
      </div>
      <transition-group name="list" mode="out-in">
        <transition-group
          v-if="filteredLocations && filteredLocations.length > 0"
          key="1"
          name="fade"
          tag="nav"
          class="c-results"
          mode="out-in"
        >
          <li
            v-for="location in filteredLocations"
            :key="location.id"
            class="c-results__item"
          >
            <button
              class="c-results-item__action"
              :class="{
                'c-results-item__action--selected':
                  selectedLocation === location.id,
              }"
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
        <div
          v-else-if="!filteredLocations.length"
          key="2"
          class="c-results c-results__empty"
        >
          <img
            class="c-results-empty__image"
            src="@/assets/img/SVG/location-not-found.svg"
            title="¡No hemos encontrado lo que buscas!"
          />
          <h2 class="c-results-empty__title">
            ¡No hemos encontrado lo que buscas!
          </h2>
        </div>
      </transition-group>
    </div>
    <div id="map" class="l-map-locator col-md-12 col-lg-6 p-0"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { removeAccents } from "@/utils";

const locationsApi = `${process.env.ELANIIN_API_PATH}/locations`;

export default {
  data() {
    return {
      search: "",
      type: "takeaway",
      locations: [],
      selectedLocation: null,
      map: {},
    };
  },
  computed: {
    filteredLocations() {
      return this.filterLocationsByName(
        this.filterLocationsByType(this.locations)
      );
    },
  },
  mounted() {
    this.getLocations();
    this.createMap();
  },
  methods: {
    async getLocations() {
      const res = await this.$axios.$get(locationsApi, {
        params: { type: this.type, query: this.search },
      });
      this.locations = res.data;
    },
    createMap() {
      mapboxgl.accessToken = process.env.MAPBOXAPI;

      try {
        this.map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          zoom: 9,
          center: [-88.916663, 13.83333],
        });
      } catch (e) {
        console.log(e.message);
      }
    },
    filterLocationsByType(items) {
      return items.filter((item) => !item.type.indexOf(this.type));
    },

    filterLocationsByName(items) {
      return items.filter((item) => {
        const value = removeAccents(item.name).toLowerCase();
        return value.includes(this.search.toLowerCase());
      });
    },
    setTypeHandler(type) {
      this.type = type;
      this.search = "";
      this.getLocations();
    },
    setSearchHandler(searchVal) {
      this.search = searchVal.toLowerCase();
      this.search = "";
    },
    setLocation(loc) {
      this.selectedLocation = loc.id;
      this.search = "";

      const LngLat = [Number(loc.longitude), Number(loc.latitude)];
      new mapboxgl.Marker().setLngLat(LngLat).addTo(this.map);

      this.map.flyTo({
        center: LngLat,
        zoom: 12,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/abstracts/variables.scss";
@import "@/assets/scss/base/breakpoints.scss";
@import "@/assets/scss/base/typography.scss";
@import "@/assets/scss/base/utilities.scss";

.l-locator {
  width: 100%;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
  min-height: 75vh;

  @include m {
    min-height: 58rem;
  }
}

.c-locator {
}

.c-location__heading {
  margin: 0 0 3.2rem;
  font-family: $font-stack-heading;
  font-size: $text-3xl;
  font-weight: $bold;
  line-height: 2.8rem;
  width: min-content;

  @include s {
    width: auto;
  }

  @include m {
    padding: 0 1.8rem;
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
  @include l {
    font-size: $text-6xl;
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
  font-family: $font-stack-subheading;
  font-size: $text-base;
  font-weight: $bolder;
  line-height: 1.8rem;
  filter: invert(0);
  color: $color-black;
  background: $color-white;
  outline: 0;
  transition: ease all 0.3s;

  @include m {
    font-size: $text-xl;
  }
  @include l {
    font-size: $text-xl;
  }
  @include xl {
    font-size: $text-2xl;
  }

  &--active {
    filter: invert(1);
  }

  &:focus {
    border-color: $color-gray-600;
  }
}
.c-type-selector__icon {
  margin: 0 1rem 0 0;
  display: flex;
  align-items: center;
  height: auto;
  width: 3rem;
  height: 3rem;

  @include l {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 1.25rem 0 0;
  }

  @include xl {
    width: 4rem;
    height: 4rem;
    margin: 0 2.5rem 0 0;
  }

  img {
    width: 3rem;
    height: 3rem;
    max-width: 100%;

    @include m {
      width: 4rem;
      height: 4rem;
    }
  }
}

.c-search-bar {
  width: 100%;
  height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $color-gray-500;
}

.c-search-bar__field {
  width: 30rem;
  height: fit-content;
  max-width: 100%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  outline: none;
  font-size: 1.8rem;
  font-weight: $bold;

  @include l {
    font-size: 1.8rem;
    font-weight: $bold;
  }

  &::placeholder {
    font-family: $font-stack-base;
    font-size: $text-base;
    font-weight: $bold;
    line-height: 1.8rem;
    text-transform: uppercase;
    color: $color-gray-500;

    @include l {
      font-size: 1.8rem;
      font-weight: $bold;
      line-height: 2.5rem;
    }
  }
}

.c-search-bar-field__icon {
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 1rem 0 0;

  @include l {
    margin: 0 2.4rem 0 0;
  }
}

.c-results {
  width: 100%;
  list-style: none;
}

.c-results__item {
  margin: 1.5rem auto;
}

.c-results-item__heading {
  font-family: $font-stack-subheading;
  font-size: $text-xl;
  font-weight: $bold;
  line-height: 2.4rem;
}

.c-results-item__info {
  font-family: $font-stack-base;
  font-size: $text-base;
  line-height: 1.8rem;

  @include m {
    font-size: $text-lg;
    line-height: 2rem;
  }
}

.c-results-item__action {
  min-height: 10.2rem;
  width: 100%;
  max-width: 100%;
  padding: 1.5rem 2.2rem;
  border: 1px solid $color-black;
  border-radius: 4px;
  text-align: left;
  color: $color-black;
  background: $color-white;
  transition: ease all 0.3s;

  &:hover {
    background: $color-yellow-300;
    border-color: $color-yellow-300;
  }

  &--selected {
    background: $color-yellow-400;
    border-color: $color-yellow-400;
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

.c-results__empty {
  width: 100%;
  height: 34.1rem;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.c-results-empty__image {
  width: 21.597rem;
  max-width: 100%;
  height: 15.996rem;
  max-height: 100%;
  margin: 0 auto 2.1rem;
}

.c-results-empty__title {
  margin: 0 auto 1.7rem;
  font-family: $font-stack-subheading;
  font-size: $text-xl;
  font-weight: $bold;
  line-height: 2.4rem;
  text-align: center;
}
</style>
