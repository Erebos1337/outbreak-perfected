import './style.scss';
import Vue from 'vue';
import InputCircle from './InputCircle';
import configurations from './configurations';

new Vue({
  el: "#app",
  components: {InputCircle},
  data: {
  	connected: false,
    channel: "yasg",
		name: "",
    room: "1337",
    socket: null,
    message: "",
    protocol: [],
		inputData: [0,0,0,0,0,0],
		configurations: configurations,
    element: 'arc',
    smartMode: true,
    lockedSolutions: {},
  },
  methods: {
  	connect: function() {
			if(!this.connected) {
				let websocketurl = `wss://connect.websocket.in/${this.channel}?room_id=${this.room}`;
    		this.socket = new WebSocket(websocketurl);
				if(!this.name) this.name = `Guest${Math.floor(Math.random() * 10000)}`
				if(this.socket) {
					this.connected = true;
					Object.assign(this.socket,this.socketListeners);
				}
			} else {
				this.sendStatus('disconnected');
				this.socket.close();
				this.connected = false;
			}
    },
		sendMessage: function() {
			if(this.connected && this.socket && this.message) {
				const data = {
					type: "message",
					content: this.message,
					name: this.name
				}
      	this.showMessage(data);
				this.socket.send(JSON.stringify(data));
				this.message = "";
			}
		},
		sendStatus: function(status) {
			if(this.connected && this.socket && status) {
				const data = {
					type: "status",
					content: status,
					name: this.name
				}
				this.showStatus(data);
				this.socket.send(JSON.stringify(data));
			}
		},
    sendInput: function(id,value) {
      if(this.connected && this.socket) {
        const msg = {
          type: 'input',
          content: {
            id,
            value
          },
          name: this.name
        }
        console.log('sent change event:' + msg)
        this.socket.send(JSON.stringify(msg));
      }
    },
    sendControl: function(eventType) {
      if(this.connected && this.socket) {
        const msg = {
          type: 'control',
          content: {
            event: eventType
          },
          name: this.name
        }
        console.log('sent change event:' + msg)
        this.socket.send(JSON.stringify(msg));
      }
    },
		showStatus: function({content,name}) {
			this.protocol.push(`> ${name} ${content}`)
		},
		showMessage: function({content,name}) {
			if(content && name) {
				if(name && name === this.name) {
					this.protocol.push(`me: ${content}`);
				} else {
					this.protocol.push(`${name}: ${content}`)
				}
			}
		},
		processWsEvent: function(data) {
			switch(data.type) {
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
    processInput: function({content,name}) {
    	const {id,value} = content;
      if(id !== undefined && id >= 0 && id < 6 && value && value > 0 && value <=12) {
        console.log('received: id='+id+', value='+value)
      	this.inputData.splice(id,1,value);
      }
    },
    processControl: function({content,name}) {
    	const {event} = content;
      switch(event) {
        case 'resetInputs':
          this.resetInputs();
          break;
        case 'resetAll':
          this.resetSolutions();
          break;
        case 'lockSolution':
          this.lockSolution();
          break;
      }
    },
    triggerResetInputs: function() {
      this.resetInputs();
      this.sendControl('resetInputs');
    },
    resetInputs: function() {
      this.inputData.splice(0,6,[0,0,0,0,0,0]);
    },
    triggerResetSolutions: function() {
      this.resetSolutions();
      this.sendControl('resetAll');
    },
    resetSolutions: function() {
      this.lockedSolutions = {};
      this.resetInputs();
    },
    triggerLockSolution: function() {
      this.lockSolution();
      this.sendControl('lockSolution')
    },
    lockSolution: function() {
      if(this.solutions && this.solutions.length === 1) {
        const solution = this.solutions[0];
        const solutionName = solution[6] + solution[7];
        this.$set(this.lockedSolutions,solutionName,true);
        this.resetInputs();
      }
    },
    fullScreen: function() {
      const docEl = document.getElementById('inputcontainer');
      const fs = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen
      //fs.call(docEl);
    },
  },
  computed: {
  	canConnect({connected,channel,room}) {
    	return !connected && channel && room;
    },
		socketListeners: function({processWsEvent, sendStatus}) {
			return {
				onopen: function() {
					sendStatus('connected');
				},
				onclose: function() {
					sendStatus('disconnected');
				},
				onmessage: function(event) {
					if(event.type === "message") {
						const data = JSON.parse(event.data);
						processWsEvent(data);
					}
				}
			}
		},
    currConfig: function({configurations,element}) {
      console.log('triggered')
      return configurations[element];
    },
    unlockedSolutions: function({currConfig,smartMode,lockedSolutions}) {
      return !smartMode ? currConfig : currConfig.filter(s => {
        const name = s[6]+s[7];
        return !lockedSolutions.hasOwnProperty(name);
      })
    },
    solutions: function({unlockedSolutions,inputData}) {
      const setInputs = inputData.map((v,k) => ({k,v})).filter(o => o.v > 0)
      if(setInputs.length === 0) return null;

      const candidates = unlockedSolutions.filter(config => {
        for(let input of setInputs) {
          if(config[input.k] !== input.v) return false;
        }
        return true;
      })
      return candidates;
    },
    solutionDisplay: function({solutions}) {
      if(!solutions) return {
        text: 'no inputs',
        class: 'noinput'
      }
      if(solutions.length === 0) return {
        text: 'no solution',
        class: 'nosolution'
      }
      if(solutions.length === 1) return {
        text: solutions[0][6] + ' ' + solutions[0][7],
        class: solutions[0][6].toLowerCase()
      }
      if(solutions.length > 1) return {
        text: `multiple solutions: ${solutions.length}`,
        class: 'multisolutions'
      }
    },
    countLocked: function({lockedSolutions}) {
      return Object.getOwnPropertyNames(lockedSolutions).length - 1;
    }
  },
  watch: {
  },
  mounted: function() {
  	/* const urlParams = new URLSearchParams(top.location.search)
  	    if(urlParams.has('channel')) {
  	      this.channel = urlParams.get('channel');
  	    }
  	    if(urlParams.has('room')) {
  	      this.room = urlParams.get('room');
  	    } */
  }
})