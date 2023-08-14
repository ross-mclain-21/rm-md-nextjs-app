import { Unity, useUnityContext } from 'react-unity-webgl';
import PageLink from '../components/common/PageLink';
import React from 'react';

const TheosCelebration = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/celebrationAtTheos/build/WEBGLBUILD12.loader.js",
    dataUrl: "/unity/celebrationAtTheos/build/webgl.data",
    frameworkUrl: "/unity/celebrationAtTheos/build/build.framework.js",
    codeUrl: "/unity/celebrationAtTheos/build/build.wasm",
  });
  return (
    <div className="flex-fill d-flex align-items-center justify-content-center p-3">
       <Unity unityProvider={unityProvider} style={{width:"100%", height:"85vh",borderRadius:"1rem"}} />
    </div>
  );
};

export default TheosCelebration;
