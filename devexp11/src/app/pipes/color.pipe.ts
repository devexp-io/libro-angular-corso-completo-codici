import {Pipe} from "@angular/core";


export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : {r: 255, g: 255, b: 255};
}

export function rgba2rgb(rgba) {
  var alpha = rgba.a;
  var rgb = {r: 255, g: 255, b: 255}

  return {
    r: (1 - alpha) * rgb.r + alpha * rgba.r,
    g: (1 - alpha) * rgb.g + alpha * rgba.g,
    b: (1 - alpha) * rgb.b + alpha * rgba.b
  }
}
export function darkenHex(hex, amount?:number) {
  let rgba = hexToRgb(hex) as any
  if(amount)
    rgba.a = amount
  return rgbToHex(darken(rgba))
}


export function darken(rgba) {
  var alpha = rgba.a || .5;
  var rgb = {r: 10, g: 10, b: 10}

  return {
    r: (1 - alpha) * rgb.r + alpha * rgba.r,
    g: (1 - alpha) * rgb.g + alpha * rgba.g,
    b: (1 - alpha) * rgb.b + alpha * rgba.b
  }
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}



function rgbToHex(rgb) {
  return "#" + componentToHex(Math.round(rgb.r)) + componentToHex(Math.round(rgb.g)) + componentToHex(Math.round(rgb.b));
}

export function lightenHex(hex,percentage) {
  let rgba = hexToRgb(hex)
  var alpha = percentage || .5;
  var rgb = {r: 255, g: 255, b: 255}

  return rgbToHex({
    r: (1 - alpha) * rgb.r + alpha * rgba.r,
    g: (1 - alpha) * rgb.g + alpha * rgba.g,
    b: (1 - alpha) * rgb.b + alpha * rgba.b
  })
}

@Pipe({
  name: 'transparent'
})
export class TransparentColorPipe {

  transform(color, percentage?: number) {
    color = color || "#ffffff"
    percentage = percentage || .1
    let c = hexToRgb(color) || {r: 255, g: 255, b: 255}
    return `rgba(${c.r},${c.g},${c.b},${percentage})`
  }

}

@Pipe({
  name: 'luminance'
})
export class LuminanceColorPipe {

  transform(color, percentage?: number) {
    color = color || "#ffffff"
    percentage = percentage || .1
    return this.luminance(color, percentage)
  }

  private luminance(hex, lum) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }

    return rgb;
  }

}

@Pipe({
  name: 'tone'
})
export class ToneColorPipe {

  transform(color, percentage?: number) {
    let rgba = hexToRgb(color) as any
    rgba.a = percentage
    let rgb = rgba2rgb(rgba)
    return `rgb(${Math.round(rgb.r)},${Math.round(rgb.g)},${Math.round(rgb.b)})`
  }

}
@Pipe({
  name: 'darken'
})
export class DarkenColorPipe {

  transform(color, percentage?: number) {
    let rgba = hexToRgb(color) as any
    rgba.a = percentage
    let rgb = darken(rgba)
    return `rgb(${Math.round(rgb.r)},${Math.round(rgb.g)},${Math.round(rgb.b)})`
  }

}



@Pipe({
  name: 'lighten'
})
export class LightenColorPipe {

  transform(color, percentage?: number) {
    return lightenHex(color, percentage)
  }

}
