enum MediaQueryWidth {
    xs = 576,
    sm = 768,
    md = 992,
    lg = 1200,
    xl = 140,
}

function mediaQuery(q: MediaQueryWidth, css:string){
 return `@media (max-width: ${q}px) {
    ${css}
  }`
}

export {MediaQueryWidth, mediaQuery}