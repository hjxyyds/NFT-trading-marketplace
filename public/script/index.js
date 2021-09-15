
const initialize = () => {
    //You will start here 
    //const onboardButton = document.getElementById('connectButton');
    const isMetaMaskInstalled = () => {
      const { ethereum } = window;
      return Boolean(ethereum && ethereum.isMetaMask);
    };
  
    const MetaMaskClientCheck = () => {
      if (!isMetaMaskInstalled()) {
        //onboardButton.innerText = 'Click here to install MetaMask!';
        // when the button is clicked we call this function
        //onboardButton.onclick = onClickInstall;
        // This button now is disabled
        //onboardButton.disabled = false;
        alert ("no metaMask");
        console.log("No metamask");
      }else {
        //If it is installed we change our button text
        //onboardButton.innerText = 'Connect';
        // when the button was clicked we call this function to connect metamask
        //onboardButton.onclick = onClickConnect;
        //onboardButton.disabled = false;
        console.log("success to connect metamask");
        onConnect();
      };
  
    }
    MetaMaskClientCheck();
  };
  
  const onConnect = async () => {
    try {
      // will open the metamask ui
      await ethereum.request({ method: 'eth_requestAccounts' });
    }catch (error){
      console.error(error);
    }
  }
  window.addEventListener('DOMContentLoaded', initialize)