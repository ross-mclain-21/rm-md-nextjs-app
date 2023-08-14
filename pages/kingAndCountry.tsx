import { Unity, useUnityContext } from 'react-unity-webgl';
import PageLink from '../components/common/PageLink';
import React from 'react';

const KingAndCountry = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/kingCountry/build/Build.loader.js",
    dataUrl: "/unity/kingCountry/build/webgl.data",
    frameworkUrl: "/unity/kingCountry/build/build.framework.js",
    codeUrl: "/unity/kingCountry/build/build.wasm",
  });
  return (
    <div className="flex-fill d-flex align-items-center justify-content-center p-3">
       <Unity unityProvider={unityProvider} style={{width:"100%", height:"85vh",borderRadius:"1rem"}} />
    </div>
  );
};

export default KingAndCountry;
