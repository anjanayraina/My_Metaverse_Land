class KeyInput{

    constructor(){

    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return; // Do nothing if the event was already processed
        }
      
        switch (event.key) {
          case "ArrowDown":
          
            console.log("KeyDown");
    
            break;
          case "ArrowUp":
            
            console.log("KeyUp");
            break;
          case "ArrowLeft":

            console.log("KeyLeft");
            break;
          case "ArrowRight":
     
            console.log("KeyRight");
            break;
          default:
            return; // Quit when this doesn't handle the key event.
        }
      
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
      }, true);

    }
      // the last option dispatches the event to the listener first,
      // then dispatches event to window

}

const keyInput = new KeyInput();
export default keyInput;
//export default is used to return references in from one module to another

