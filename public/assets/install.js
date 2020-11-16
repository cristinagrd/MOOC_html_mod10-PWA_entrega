'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById("butInstall");
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEven);

function saveBeforeInstallPromptEven (evt) {

    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt){

    deferredInstallPrompt.prompt(evt);
    evt.srcElement.setAttribute('hidden', true);
    deferredInstallPrompt.userChoice.then((choice) => {
        if (choice.outcome === 'accepted'){
            console.log('Aceptado');            
        }else{
            console.log('No aceptado'); 
        }
        deferredInstallPrompt = null;
    })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){

    console.log('Shooter instalada app');
}