import _D from './lib/core';
import initEvent from './event';

function dt(){
  this._init();
}

initEvent(dt);

window["Dt"] = dt;