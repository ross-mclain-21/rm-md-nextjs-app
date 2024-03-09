import { Unity, useUnityContext } from 'react-unity-webgl';
import PageLink from '../components/common/PageLink';
import React, { useEffect, useState } from 'react';

const NinjaRunnerFe841c4899a447d2B9ccFecb75e6c88f = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/ninjaRunner/build/Builds.loader.js",
    dataUrl: "/unity/ninjaRunner/build/Builds.data",
    frameworkUrl: "/unity/ninjaRunner/build/Builds.framework.js",
    codeUrl: "/unity/ninjaRunner/build/Builds.wasm",
  });
  
  // We'll use a state to store the device pixel ratio.
  const [devicePixelRatio, setDevicePixelRatio] = useState<number |undefined>();
  
   useEffect(
    () => {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = () => {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return () => {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );
  
  return (
    <div className="flex-fill d-flex align-items-center justify-content-center p-3">
       <Unity unityProvider={unityProvider} style={{width:"100%", height:"85vh",borderRadius:"1rem"}} devicePixelRatio={devicePixelRatio} />
    </div>
  );
};

export default NinjaRunnerFe841c4899a447d2B9ccFecb75e6c88f;
