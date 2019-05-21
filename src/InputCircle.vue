 <template>
  <v-flex xs6 md4 class="circle-wrapper" :class="calcOffset">
    <svg viewBox="-52 -52 104 104" width="100%" :preserveAspectRatio="preserveAspectRatio">
      <path class="segment" v-for="n in 12" :key="n" :d="arcPath()" :stroke-opacity="strokeOpacity(n)" stroke-width="1" :fill="fillColor(n)" @click="selectSegment(n)" :class="{selected: selected==n}" :style="setSegCss(n)"/>
      <text v-show="selected > 0" class="circle-value" x="0" y="0">{{ selected }}</text>
    </svg>
  </v-flex>
</template>
<script>
  export default {
  props: ['id','value'],
  data: () => {
    return {
      selected: 0
    }
  },
  computed: {
    preserveAspectRatio: function({id}) {
      return (id % 2 === 0 ? "xMaxYMid" : "xMinYMid") + " meet";
    },
    calcOffset: function({id}) {
      return (id %2 === 0 ? "" : "offset-md1");
    }
  },
  methods: {
    angleX: function(index) {
      return Math.sin(Math.PI*index/6);
    },
    angleY: function(index) {
      return -Math.cos(Math.PI*index/6);
    },
    arcPath: function() {
      const {angleX, angleY} = this;
      const r = 50;
      const ao = 0.47;
      const ai = 0.45
      return `M ${r * angleX(-ao)} ${r * angleY(-ao)} A ${r} ${r} 0 0 1 ${r*angleX(ao)} ${r*angleY(ao)} L ${r/2 * angleX(ai)} ${r/2 * angleY(ai)} A ${r/2} ${r/2} 0 0 0 ${r/2 * angleX(-ai)} ${r/2 * angleY(-ai)} Z`;
    },
    fillColor: function(n) {
      return n === this.selected ? "rgba(255/2,255/2,0,1)" : "cyan";
    },
    strokeOpacity: function(n) {
      return n === this.selected ? 1 : 1;
    },
    selectSegment: function(n) {
      if(n !== this.selected) {
        this.selected = n;
        this.$emit('input', n)
      }
    },
    setSegCss: function(n) {
      return `--n:${n}`;
    },
  },
  watch: {
    value: function(val) {
      this.selected = val;
    }
  }
}
</script>
<style lang="scss">
  .circle-wrapper {
    position: relative;
  }
  .circle-value {
    text-anchor: middle;
    alignment-baseline: central;
  }
</style>
