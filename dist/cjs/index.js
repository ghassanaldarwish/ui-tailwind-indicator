"use strict";function e(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(d){if("default"!==d){var l=Object.getOwnPropertyDescriptor(e,d);Object.defineProperty(t,d,l.get?l:{enumerable:!0,get:function(){return e[d]}})}})),t.default=e,Object.freeze(t)}var t=e(require("react"));exports.TailwindIndicator=function(){return t.createElement("div",{className:"fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white"},t.createElement("div",{className:"block sm:hidden"},"xs"),t.createElement("div",{className:"hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"},"sm"),t.createElement("div",{className:"hidden md:block lg:hidden xl:hidden 2xl:hidden"},"md"),t.createElement("div",{className:"hidden lg:block xl:hidden 2xl:hidden"},"lg"),t.createElement("div",{className:"hidden xl:block 2xl:hidden"},"xl"),t.createElement("div",{className:"hidden 2xl:block"},"2xl"))};
//# sourceMappingURL=index.js.map