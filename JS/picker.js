document.addEventListener("DOMContentLoaded", () =>{
 
// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/Dequecca/serviceworker.js')
    .then(() => { console.log('Service Worker Registered'); });
}
// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});


  document.getElementById('foreground-picker').addEventListener('click', () => {
      const resultElement = document.getElementById('color');
    
      if (!window.EyeDropper) {
        resultElement.textContent = 'Your browser does not support the EyeDropper API';
        return;
      }
    
      const eyeDropper = new EyeDropper();
    
      eyeDropper.open().then((result) => {
       
        resultElement.value = "";
        resultElement.focus();
        resultElement.value = (result.sRGBHex).includes('#') ? result.sRGBHex : rgb2hex(result.sRGBHex ) ;
        //resultElement.dispatchEvent(new Event('input', { bubbles: true }));
        //resultElement.dispatchEvent(new Event('change', { bubbles: true }));
        resultElement.dispatchEvent(new Event('keyup', { bubbles: true }));
        
      }).catch((e) => {
       // resultElement.textContent = e;
      });
    });
    
    
    document.getElementById('background-picker').addEventListener('click', () => {
      const resultElement = document.getElementById('bgcolor');
    
      if (!window.EyeDropper) {
        resultElement.textContent = 'Your browser does not support the EyeDropper API';
        return;
      }
    
      const eyeDropper = new EyeDropper();
    
      eyeDropper.open().then((result) => {
        resultElement.value = "";
        resultElement.focus();
        resultElement.value = (result.sRGBHex).includes('#') ? result.sRGBHex : rgb2hex(result.sRGBHex ) ;
       // resultElement.dispatchEvent(new Event('input', { bubbles: true }));
       // resultElement.dispatchEvent(new Event('change', { bubbles: true }));
        resultElement.dispatchEvent(new Event('keyup', { bubbles: true }));
       
      }).catch((e) => {
        resultElement.textContent = e;
      });
    });
  
    function rgb2hex(orig){
      var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
      return (rgb && rgb.length === 4) ? "#" +
       ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
     }
     
  
  });
  
