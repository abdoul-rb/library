function Pilote(name)
{
   this.name = name
   const props =  {}
   const prevProps =  {}

   this.receiveData() = function (data) {
      prevProps = Object.assign({}, props)
      props.state = data.state
      props.origin = data.origin
      props.position = data.position
   }

   this.getState = () => { props.state }

   this.speak = function () {
      switch(props.state) {
         case 'ready':
            return `Here we go ! I'm ${this.name}`
         case 'happy':
            return 'Let\'s have so fun !'
         case 'sad':
            return `Oups ! Damm ${props.origin}`
         case 'normal':
            return ''
         case 'finish':
            switch(props.position) {
               case 1:
                  return 'I\'m the best !'
               case 2:
                  return 'Could be the best !'
               default:
                  return 'Will be better next time'
            }
      }
   }

   this.needUpdate = () => {
      JSON.stringify(prevProps) !== JSON.stringify(prevProps)
   }
}

const pilote = new Pilote("Mario");

pilote.receiveData({ state: "ready" });

if (pilote.needUpdate()) console.log("Speak ready", pilote.speak());
pilote.receiveData({ state: "normal" });

if (pilote.needUpdate()) console.log("Speak normal", pilote.speak());
pilote.receiveData({ state: "normal" });

if (pilote.needUpdate()) console.log("Speak normal", pilote.speak());
pilote.receiveData({ state: "happy" });

if (pilote.needUpdate()) console.log("Speak happy", pilote.speak());
pilote.receiveData({ state: "sad", origin: "Luigi" });

if (pilote.needUpdate()) console.log("Speak sad", pilote.speak());
pilote.receiveData({ state: "finish", position: 1 });

if (pilote.needUpdate()) console.log("Speak finish", pilote.speak());
pilote.receiveData({ state: "finish", position: 1 });

if (pilote.needUpdate()) console.log("Speak finish", pilote.speak());