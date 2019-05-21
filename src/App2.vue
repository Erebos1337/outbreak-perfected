<template>
  <v-container grid-list-xl>
    <v-card>
      <v-card-title primary-title>
        <v-layout justify-center>
          <v-flex xs12>
            <h1>
              <v-icon medium>sync</v-icon>Connection
            </h1>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm4 md3>
            <v-text-field
              prepend-icon="home"
              v-model="channel"
              label="Channel"
              :disabled="connected"
              hide-details
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-text-field
              prepend-icon="room"
              v-model="room"
              label="Room"
              :disabled="connected"
              hide-details
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm4 md3>
            <v-text-field
              prepend-icon="face"
              v-model="name"
              :disabled="connected"
              hide-details
              label="Name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn
              :color="connected ? 'error' : 'success'"
              @click="connect"
              :disabled="!connected && !canConnect"
            >
              <v-icon medium left>{{ !connected ? 'link' : 'link_off'}}</v-icon>
              {{ !connected ? 'Connect' : 'Disconnect' }}
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>

    <!-- <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
    ></v-checkbox>-->

    <v-card class="mt-3">
      <v-card-title primary-title>
        <v-layout justify-center>
          <v-flex xs12>
            <h1>
              <v-icon medium>list_alt</v-icon>Protocol
            </h1>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text class="grey lighten-3" id="protocolcontainer">
        <v-text-field
          class="px-0 py-0 mx-0"
          v-model="message"
          @keyup.enter="sendMessage"
          :disabled="!connected"
          prepend-inner-icon="send"
          hide-details
        />
        <v-container
          ref="protocol"
          id="protocol"
          class="grey lighten-3 px-0 pt-0 text-xs-left scroll-y"
        >
          <p v-for="(msg,idx) in protocol" :key="idx">{{ msg }}</p>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card class="mt-3">
      <v-card-title>
        <v-layout justify-center>
          <v-flex xs12>
            <h1>
              <v-icon medium>extension</v-icon>Puzzle
            </h1>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-container>
        <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox v-model="smartMode" label="Smart"></v-checkbox>
          </v-flex>
          <v-flex xs6>
            <v-select
              v-model="element"
              :items="['void','arc','solar']"
              :rules="[v => !!v || 'Item is required']"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs6>
            <v-btn block @click="triggerResetSolutions">Clear All</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn block @click="triggerResetInputs">Clear Input</v-btn>
          </v-flex>
          <v-flex x12>
            <p class="progress">{{ countLocked + '/49' }}</p>
          </v-flex>
          <v-flex xs12>
            <div id="solutionbox" :class="solutionDisplay.class" @click="triggerLockSolution">
              <p id="solutiontext"><span>{{solutionDisplay.text}}</span></p>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <input-circle
            v-for="(n,i) in 6"
            :id="i"
            v-model="inputData[i]"
            :key="i"
            @input="sendInput(i,$event)"
          />
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import InputCircle from "./InputCircle.vue";
import configurations from "./configurations";

export default {
  name: "app",
  components: { InputCircle },
  data: () => ({
    connected: false,
    channel: "yasg",
    name: "",
    room: "1337",
    socket: null,
    message: "",
    protocol: [],
    inputData: [0, 0, 0, 0, 0, 0],
    configurations: configurations,
    element: "arc",
    smartMode: true,
    lockedSolutions: {}
  }),
  methods: {
    connect: function() {
      if (!this.connected) {
        let websocketurl = `wss://connect.websocket.in/${
          this.channel
        }?room_id=${this.room}`;
        this.socket = new WebSocket(websocketurl);
        if (!this.name) this.name = `Guest${Math.floor(Math.random() * 10000)}`;
        if (this.socket) {
          this.connected = true;
          Object.assign(this.socket, this.socketListeners);
        }
      } else {
        this.sendStatus("disconnected");
        this.socket.close();
        this.connected = false;
      }
    },
    sendMessage: function() {
      if (this.connected && this.socket && this.message) {
        const data = {
          type: "message",
          content: this.message,
          name: this.name
        };
        this.showMessage(data);
        this.socket.send(JSON.stringify(data));
        this.message = "";
      }
    },
    sendStatus: function(status) {
      if (this.connected && this.socket && status) {
        const data = {
          type: "status",
          content: status,
          name: this.name
        };
        this.showStatus(data);
        this.socket.send(JSON.stringify(data));
      }
    },
    sendInput: function(id, value) {
      if (this.connected && this.socket) {
        const msg = {
          type: "input",
          content: {
            id,
            value
          },
          name: this.name
        };
        this.socket.send(JSON.stringify(msg));
      }
    },
    sendControl: function(eventType) {
      if (this.connected && this.socket) {
        const msg = {
          type: "control",
          content: {
            event: eventType
          },
          name: this.name
        };
        this.socket.send(JSON.stringify(msg));
      }
    },
    showStatus: function({ content, name }) {
      this.protocol.push(`> ${name} ${content}`);
    },
    showMessage: function({ content, name }) {
      if (content && name) {
        if (name && name === this.name) {
          this.protocol.push(`me: ${content}`);
        } else {
          this.protocol.push(`${name}: ${content}`);
        }
        // this.elem = document.getElementById ( "scrolled-content" )
        // this.container = document.getElementById ( "scroll-target" )
        this.$refs.protocol.scrollTop = Math.floor(
          this.$refs.protocol.scrollHeight
        );
      }
    },
    processWsEvent: function(data) {
      switch (data.type) {
        case "message":
          this.showMessage(data);
          break;
        case "status":
          this.showStatus(data);
          break;
        case "input":
          this.processInput(data);
          break;
        case "control":
          this.processControl(data);
          break;
      }
    },
    processInput: function({ content }) {
      const { id, value } = content;
      if (
        id !== undefined &&
        id >= 0 &&
        id < 6 &&
        value &&
        value > 0 &&
        value <= 12
      ) {
        this.inputData.splice(id, 1, value);
      }
    },
    processControl: function({ content }) {
      const { event } = content;
      switch (event) {
        case "resetInputs":
          this.resetInputs();
          break;
        case "resetAll":
          this.resetSolutions();
          break;
        case "lockSolution":
          this.lockSolution();
          break;
      }
    },
    triggerResetInputs: function() {
      this.resetInputs();
      this.sendControl("resetInputs");
    },
    resetInputs: function() {
      this.inputData.splice(0, 6, [0, 0, 0, 0, 0, 0]);
    },
    triggerResetSolutions: function() {
      this.resetSolutions();
      this.sendControl("resetAll");
    },
    resetSolutions: function() {
      this.lockedSolutions = {};
      this.resetInputs();
    },
    triggerLockSolution: function() {
      this.lockSolution();
      this.sendControl("lockSolution");
    },
    lockSolution: function() {
      if (this.solutions && this.solutions.length === 1) {
        const solution = this.solutions[0];
        const solutionName = solution[6] + solution[7];
        this.$set(this.lockedSolutions, solutionName, true);
        this.resetInputs();
      }
    },
    fullScreen: function() {
      // const docEl = document.getElementById("inputcontainer");
      // const fs =
      //   docEl.requestFullscreen ||
      //   docEl.mozRequestFullScreen ||
      //   docEl.webkitRequestFullScreen ||
      //   docEl.msRequestFullscreen;
      //fs.call(docEl);
    }
  },
  computed: {
    canConnect({ connected, channel, room }) {
      return !connected && channel && room;
    },
    socketListeners: function({ processWsEvent, sendStatus }) {
      return {
        onopen: function() {
          sendStatus("connected");
        },
        onclose: function() {
          sendStatus("disconnected");
        },
        onmessage: function(event) {
          if (event.type === "message") {
            const data = JSON.parse(event.data);
            processWsEvent(data);
          }
        }
      };
    },
    currConfig: function({ configurations, element }) {
      return configurations[element];
    },
    unlockedSolutions: function({ currConfig, smartMode, lockedSolutions }) {
      return !smartMode
        ? currConfig
        : currConfig.filter(s => {
            const name = s[6] + s[7];
            return !lockedSolutions.hasOwnProperty(name);
          });
    },
    solutions: function({ unlockedSolutions, inputData }) {
      const setInputs = inputData
        .map((v, k) => ({ k, v }))
        .filter(o => o.v > 0);
      if (setInputs.length === 0) return null;

      const candidates = unlockedSolutions.filter(config => {
        for (let input of setInputs) {
          if (config[input.k] !== input.v) return false;
        }
        return true;
      });
      return candidates;
    },
    solutionDisplay: function({ solutions }) {
      if (!solutions)
        return {
          text: "no inputs",
          class: "noinput"
        };
      if (solutions.length === 0)
        return {
          text: "no solution",
          class: "nosolution"
        };
      if (solutions.length === 1)
        return {
          text: solutions[0][6] + " " + solutions[0][7],
          class: solutions[0][6].toLowerCase()
        };
      if (solutions.length > 1)
        return {
          text: `multiple solutions: ${solutions.length}`,
          class: "multisolutions"
        };
      return "";
    },
    countLocked: function({ lockedSolutions }) {
      return Object.getOwnPropertyNames(lockedSolutions).length - 1;
    }
  },
  watch: {},
  mounted: function() {
    /* const urlParams = new URLSearchParams(top.location.search)
				if(urlParams.has('channel')) {
					this.channel = urlParams.get('channel');
				}
				if(urlParams.has('room')) {
					this.room = urlParams.get('room');
				} */
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}

#connection {
  padding: 1rem;
}

#protocolcontainer {
  & > #protocol {
    height: 160px;
  }
}

.canconnect {
  background-color: green;
}

.candisconnect {
  background-color: #ff5555;
}

#inputcontainer {
  height: 600px;
  width: 100%;
  position: relative;
  align-items: end;
}

#input1 {
  width: 100%;
  height: 100%;
}

.segment {
  fill: cyan;
  transform: rotate(calc(-15deg + 30deg * var(--n)));

  &:hover {
    fill: rgba(255, 255, 0, 0.4);
  }

  &.selected {
    fill: yellow;
    stroke: red;
  }
}

// svg {
//   width: 100%;
//   height: 100%;
// }

$solutionColors: (
  white: white,
  blue: blue,
  green: green,
  cyan: cyan,
  purple: purple,
  yellow: yellow,
  red: rgb(255, 40, 40)
);

#solutionbox {
  border: 1px solid rgb(180, 180, 180);
  text-align: center;
  padding: 0;
  border: 1px solid grey;

  @each $colorName, $colorValue in $solutionColors {
    &.#{$colorName} {
      background-color: $colorValue;

      & > p {
        font-weight: bold;
        position: relative;

        &:before,
        &:after {
          width: 15%;
          height: 50%;
          position: absolute;
          left: 100%;
          content: "";
        }

        &:before {
          top: 0px;
          background: linear-gradient(
            to right top,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 50%
          );
        }

        &:after {
          top: 50%;
          background: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 50%
          );
        }

        & > span {
          &:before,
          &:after {
            width: 15%;
            height: 50%;
            position: absolute;
            left: -15%;
            content: "";
          }

          &:before {
            top: 0px;
            background: linear-gradient(
              to left top,
              rgba(255, 255, 255, 0.8) 50%,
              transparent 50%
            );
          }

          &:after {
            top: 50%;
            background: linear-gradient(
              to left bottom,
              rgba(255, 255, 255, 0.8) 50%,
              transparent 50%
            );
          }
        }
      }
    }
  }
}

#solutiontext {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  display: inline-block;
  margin: 0;
  padding: 0.2rem 1rem;

  .noinput > & {
    color: rgb(150, 150, 150);
  }

  .nosolution > & {
    color: red;
  }

  .multisolutions > & {
    color: orange;
  }
}
</style>
