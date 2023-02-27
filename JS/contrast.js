'use strict';

/*
let language_config = {};
let params = {};


function getParams() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}


//params['lang'] = getCookie('cultureKey') || 'en';
//params['lang'] = cultureKey || 'en';

 
function process_api(url) {
 return new Promise(function (resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(xhttp.responseText);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  })


  return $.ajax({
    type: "POST",
    url: url,
    cache: false
  })
}*/

/*process_api('/deque-api/getactivelanguage').then(function (result) {
  params['lang'] = (JSON.parse(result).cultureKey) || 'en';
  var paramsFromUrl = getParams();
  if (paramsFromUrl['lang']) {
    params['lang'] = paramsFromUrl['lang'];
    process_api('/deque-api/getactivelanguage?lang=' + params['lang']).then(function (result) {
      console.log(result);
    });
  }

  process_api('/deque-api/getactivelanguage?keywordsJson=' + params['lang']).then(function (result) {
    language_config = JSON.parse(result);
    initilizeWidget();
  });
});*/


/*function readJsonFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        language_config = JSON.parse(rawFile.responseText);
      } else if (rawFile.status == 404) {
        params['lang'] = 'en';
        var json_file = "assets/js/_lang/" + params['lang'] + "/ruleHelp/ruleHelpAxe.lang.js";
        readJsonFile(json_file);
      }
    }
  }
  rawFile.send(null);
}*/
initilizeWidget();
function initilizeWidget() {

  var $hexField, imgHeight, imgWidth, newHeight, newWidth, canvasWidth, imgX, imgY, offsetX, offsetY, oldZoom, ratio, idPrefix,
    img = new Image(),
    orup = [['or', 'Original'], ['up', 'Updated']],
    foreback = ['Fore', 'Back'];

  $(function () {

    //var json_file = "assets/js/_lang/" + params['lang'] + "/ruleHelp/ruleHelpAxe.lang.js";
    //readJsonFile(json_file);

    var canvas = $('canvas')[0],
      ctx = canvas.getContext('2d'),
      color = [['F0F8FF', 'aliceblue', ''], ['FAEBD7', 'antiquewhite', ''], ['00FFFF', 'aqua', ''], ['7FFFD4', 'aquamarine', ''], ['F0FFFF', 'azure', ''], ['F5F5DC', 'beige', ''], ['FFE4C4', 'bisque', ''], ['000000', 'black', 'white'], ['FFEBCD', 'blanchedalmond', ''], ['0000FF', 'blue', 'white'], ['8A2BE2', 'blueviolet', 'white'], ['A52A2A', 'brown', 'white'], ['DEB887', 'burlywood', ''], ['5F9EA0', 'cadetblue', ''], ['7FFF00', 'chartreuse', ''], ['D2691E', 'chocolate', ''], ['FF7F50', 'coral', ''], ['6495ED', 'cornflowerblue', ''], ['FFF8DC', 'cornsilk', ''], ['DC143C', 'crimson', 'white'], ['00FFFF', 'cyan', ''], ['00008B', 'darkblue', 'white'], ['008B8B', 'darkcyan', ''], ['B8860B', 'darkgoldenrod', ''], ['A9A9A9', 'darkgray', ''], ['006400', 'darkgreen', 'white'], ['BDB76B', 'darkkhaki', ''], ['8B008B', 'darkmagenta', 'white'], ['556B2F', 'darkolivegreen', 'white'], ['FF8C00', 'darkorange', ''], ['9932CC', 'darkorchid', 'white'], ['8B0000', 'darkred', 'white'], ['E9967A', 'darksalmon', ''], ['8FBC8F', 'darkseagreen', ''], ['483D8B', 'darkslateblue', 'white'], ['2F4F4F', 'darkslategray', 'white'], ['00CED1', 'darkturquoise', ''], ['9400D3', 'darkviolet', 'white'], ['FF1493', 'deeppink', ''], ['00BFFF', 'deepskyblue', ''], ['696969', 'dimgray', 'white'], ['1E90FF', 'dodgerblue', ''], ['B22222', 'firebrick', 'white'], ['FFFAF0', 'floralwhite', ''], ['228B22', 'forestgreen', ''], ['FF00FF', 'fuchsia', ''], ['DCDCDC', 'gainsboro', ''], ['F8F8FF', 'ghostwhite', ''], ['FFD700', 'gold', ''], ['DAA520', 'goldenrod', ''], ['808080', 'gray', ''], ['008000', 'green', 'white'], ['ADFF2F', 'greenyellow', ''], ['F0FFF0', 'honeydew', ''], ['FF69B4', 'hotpink', ''], ['CD5C5C', 'indianred', ''], ['4B0082', 'indigo', 'white'], ['FFFFF0', 'ivory', ''], ['F0E68C', 'khaki', ''], ['E6E6FA', 'lavender', ''], ['FFF0F5', 'lavenderblush', ''], ['7CFC00', 'lawngreen', ''], ['FFFACD', 'lemonchiffon', ''], ['ADD8E6', 'lightblue', ''], ['F08080', 'lightcoral', ''], ['E0FFFF', 'lightcyan', ''], ['FAFAD2', 'lightgoldenrodyellow', ''], ['D3D3D3', 'lightgray', ''], ['90EE90', 'lightgreen', ''], ['FFB6C1', 'lightpink', ''], ['FFA07A', 'lightsalmon', ''], ['20B2AA', 'lightseagreen', ''], ['87CEFA', 'lightskyblue', ''], ['778899', 'lightslategray', ''], ['B0C4DE', 'lightsteelblue', ''], ['FFFFE0', 'lightyellow', ''], ['00FF00', 'lime', ''], ['32CD32', 'limegreen', ''], ['FAF0E6', 'linen', ''], ['FF00FF', 'magenta', ''], ['800000', 'maroon', 'white'], ['66CDAA', 'mediumaquamarine', ''], ['0000CD', 'mediumblue', 'white'], ['BA55D3', 'mediumorchid', ''], ['9370DB', 'mediumpurple', ''], ['3CB371', 'mediumseagreen', ''], ['7B68EE', 'mediumslateblue', ''], ['00FA9A', 'mediumspringgreen', ''], ['48D1CC', 'mediumturquoise', ''], ['C71585', 'mediumvioletred', 'white'], ['191970', 'midnightblue', 'white'], ['F5FFFA', 'mintcream', ''], ['FFE4E1', 'mistyrose', ''], ['FFE4B5', 'moccasin', ''], ['FFDEAD', 'navajowhite', ''], ['000080', 'navy', 'white'], ['FDF5E6', 'oldlace', ''], ['808000', 'olive', ''], ['6B8E23', 'olivedrab', ''], ['FFA500', 'orange', ''], ['FF4500', 'orangered', ''], ['DA70D6', 'orchid', ''], ['EEE8AA', 'palegoldenrod', ''], ['98FB98', 'palegreen', ''], ['AFEEEE', 'paleturquoise', ''], ['DB7093', 'palevioletred', ''], ['FFEFD5', 'papayawhip', ''], ['FFDAB9', 'peachpuff', ''], ['CD853F', 'peru', ''], ['FFC0CB', 'pink', ''], ['DDA0DD', 'plum', ''], ['B0E0E6', 'powderblue', ''], ['800080', 'purple', 'white'], ['FF0000', 'red', ''], ['BC8F8F', 'rosybrown', ''], ['4169E1', 'royalblue', 'white'], ['8B4513', 'saddlebrown', 'white'], ['FA8072', 'salmon', ''], ['F4A460', 'sandybrown', ''], ['2E8B57', 'seagreen', ''], ['FFF5EE', 'seashell', ''], ['A0522D', 'sienna', 'white'], ['C0C0C0', 'silver', ''], ['87CEEB', 'skyblue', ''], ['6A5ACD', 'slateblue', 'white'], ['708090', 'slategray', ''], ['FFFAFA', 'snow', ''], ['00FF7F', 'springgreen', ''], ['4682B4', 'steelblue', ''], ['D2B48C', 'tan', ''], ['008080', 'teal', 'white'], ['D8BFD8', 'thistle', ''], ['FF6347', 'tomato', ''], ['40E0D0', 'turquoise', ''], ['EE82EE', 'violet', ''], ['F5DEB3', 'wheat', ''], ['FFFFFF', 'white', ''], ['F5F5F5', 'whitesmoke', ''], ['FFFF00', 'yellow', ''], ['9ACD32', 'yellowgreen']];
    let logo = `<span style="height: 1rem;width: 3.5rem;left: 170%;position: relative;display: block;top: 0.93rem;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 545.74 192.55" class="full-logo" role="presentation"><g><path d="M436.67,128.7c0,8-.29,13.61-.87,16.68a23.29,23.29,0,0,1-2.53,7.28,21.19,21.19,0,0,1-8.25,8,25.68,25.68,0,0,1-12.26,2.78c-8.19,0-13.78-2.07-17.11-6.34-3.53-4.54-5.33-12.85-5.33-24.69V77.81h-20.8v53.73c0,18.29,3.27,31.19,10,39.44s17.9,12.65,32.85,12.65a44.91,44.91,0,0,0,18.17-3.38,33.08,33.08,0,0,0,6.12-3.53V181h20.8V77.81h-20.8Z" transform="translate(-25.26 -28.55)" fill="#000"></path><path d="M223.29,146.74a31.57,31.57,0,0,1-10.51,11.59,30,30,0,0,1-16.79,4.8c-9,0-16.18-2.71-22.1-8.27a30.59,30.59,0,0,1-9.22-17.26h84.75v-5.28c0-16.7-4.92-30.52-14.62-41.07s-22.58-16.08-38-16.08c-15.65,0-28.72,5.17-38.85,15.38s-15.24,23.23-15.24,38.72a53.21,53.21,0,0,0,15.53,38.35,51.24,51.24,0,0,0,38.08,16,50.61,50.61,0,0,0,30-9.22c8.53-6.06,15.22-14.82,19.88-26l.69-1.65Zm-48.64-43.93c5.56-5,12.22-7.43,20.33-7.43,8.83,0,15.72,2.25,21.07,6.88,4.31,3.74,7.59,9.11,9.79,16H165.42A30.85,30.85,0,0,1,174.65,102.81Z" transform="translate(-25.26 -28.55)" fill="#000"></path><path d="M544.87,146.74a31.66,31.66,0,0,1-10.51,11.59,30,30,0,0,1-16.79,4.8c-9,0-16.18-2.71-22.1-8.27a30.55,30.55,0,0,1-9.21-17.26H571v-5.28c0-16.7-4.92-30.52-14.61-41.07s-22.59-16.08-38-16.08c-15.65,0-28.72,5.17-38.85,15.38s-15.24,23.23-15.24,38.72a53.21,53.21,0,0,0,15.53,38.35,51.27,51.27,0,0,0,38.08,16,50.59,50.59,0,0,0,30-9.22c8.53-6.06,15.22-14.82,19.88-26l.69-1.65Zm-48.64-43.93c5.57-5,12.22-7.43,20.33-7.43,8.83,0,15.73,2.25,21.07,6.88,4.31,3.75,7.59,9.12,9.79,16H487A30.92,30.92,0,0,1,496.23,102.81Z" transform="translate(-25.26 -28.55)" fill="#000"></path><g><circle cx="53" cy="101.65" r="19.36" fill="#000"></circle><path d="M133.78,129.34V28.55H107.26V83.23A54.28,54.28,0,1,0,94,182.08c.17,0,.32-.09.48-.13V160.53a13.58,13.58,0,0,1-2.8,1.72A31.59,31.59,0,0,1,78.11,165a32.66,32.66,0,0,1-24.33-10,34.1,34.1,0,0,1-9.7-24.61c0-9.86,3.33-18.23,9.91-24.89s14.93-10,24.78-10c5,0,15.14,1.33,21.35,6.22,5.71,4.51,11.83,11.09,11.63,28.38-.06,5.12,0,28.08.12,43.39a21.23,21.23,0,0,0,2.6-2.13,54.1,54.1,0,0,0,19.28-40h0v-.92c0-.17,0-.33,0-.5S133.78,129.51,133.78,129.34Z" transform="translate(-25.26 -28.55)" fill="#000"></path></g><path d="M362.14,218.52s0-3.4-.05-8.85l0-6.64v0c-.12-23.14-.32-64.92-.22-73.6.31-26.8-9.18-37-18-44-9.62-7.59-25.32-9.65-33.1-9.65-15.27,0-28.19,5.24-38.42,15.58s-15.38,23.29-15.38,38.58c0,15,5.07,27.88,15.05,38.17s22.72,15.55,37.72,15.55a48.89,48.89,0,0,0,21.11-4.24,23.37,23.37,0,0,0,9.06-7.43V221.1h22.31v-2.58Zm-52.62-55.61c-18.07,0-32.72-15-32.72-33.51s14.65-33.52,32.72-33.52,32.71,15,32.71,33.52S327.58,162.91,309.52,162.91Z" transform="translate(-25.26 -28.55)" fill="#000"></path></g></svg></span>`;
    // Create the form
    $.each(orup, function (i, orupVal) {
      $('#fieldsetContainer')
        .append('<fieldset id="' + orupVal[0] + '" class="columnswrap outer" ><legend> <span role="heading" level="1">' + logo + ' Color Contrast Analyzer </span> </legend></fieldset>');
      $.each(foreback, function (i, forebackVal) {
        $('#' + orupVal[0])
          .append(
            '<fieldset class="column inner"><legend>' + forebackVal + 'ground Color </legend>' +
            '<span><label for="' + orupVal[0] + forebackVal + 'Hex">Hex:</label><input type="text" id="' + orupVal[0] + forebackVal + 'Hex" maxlength="7" aria-describedby="errMsg"></span>' +
            '<span><label for="' + orupVal[0] + forebackVal + 'Rgb">RGB:</label><input type="text" id="' + orupVal[0] + forebackVal + 'Rgb" maxlength="13" aria-describedby="errMsg"></span>' +
            '<span class="inputColor"><label for="' + orupVal[0] + forebackVal + 'Choose"> Color: </label><input type="color" id="' + orupVal[0] + forebackVal + 'Choose" role="button" aria-label=" Choose ' + forebackVal.toLowerCase() + 'groundColor "> </span> <span style="padding:21px 1.5px 1.5px 1.5px"> <button class="pickerbtn" id="' + forebackVal.toLowerCase() + 'ground-picker" aria-label="' + forebackVal.toLowerCase() + 'ground color picker" title="' + forebackVal.toLowerCase() + 'ground color picker"><img src="images/eyedropper.png" alt="" style="height: 2rem;width:2rem"></button></span>' +
            '<span><label for="' + orupVal[0] + forebackVal + 'Name"> Name: </label><select id="' + orupVal[0] + forebackVal + 'Name"></select></span>' +

            '<button type="button" id="' + orupVal[0] + forebackVal + 'Pick" class="pick" aria-disabled="true" disabled title="Upload an image first.">Pick from image</button>' +
            '<span class="lightness"><label for="' + orupVal[0] + forebackVal + 'Lite" aria-live="assertive"> Adjust Lightness: </label><span><input type="range" id="' + orupVal[0] + forebackVal + 'Lite" min="0" max="100">' +
            '<span class="swatch"></span></span></span>' +
            '</fieldset>'
          );
      });
      $('#' + orupVal[0])
        .append(
          '<fieldset class="column inner"><legend> Result </legend>' +
          '<div id="' + orupVal[0] + 'Text" class="sample" aria-hidden="true"> Small sample text.<br><span class="sampleLarge">Large sample text.</span></div>' +
          '<table>' +
          '<caption role="region" aria-live="polite" aria-atomic="true"> Contrast Ratio  = <span id="' + orupVal[0] + 'Ratio"></span><div> <label for="copyCriteria">Criteria</label> <select id="copyCriteria"> <option value="1">Regular Text(1.4.3.a)</option> <option value="2">Placeholder Text (1.4.3.a)</option> <option value="3">Link or button text (Hover /Focus)(1.4.3.a)</option><option value="4">Regular Text(Gradient Background)(1.4.3.a)</option><option value="5">Large Text(1.4.3.b)</option> <option value="6">Large Link or button text (Hover /Focus)(1.4.3.b)</option><option value="7">Large Text(Gradient Background)(1.4.3.b)</option><option value="8">Focus indicator (1.4.1.a)</option><option value="9">Visual Boundary (1.4.11.a - Inner)</option><option value="10">Visual Boundary (1.4.11.a - outer)</option><option value="11">Focus indicator (1.4.11.b - Inner)</option><option value="12">Focus indicator (1.4.11.b - outer)</option><option value="13">Selected State (1.4.11.b)</option><option value="14">Icons (1.4.11.c)</option><option value="15">Graphical object  (1.4.11.c)</option> <option value="16"> Link contrast (1.4.1.b)</option><option value="17"> Focus indicator on border (1.4.11.b)</option> <option value="20">General</option> </select>  <button class=\"pickerbtn\" id=\"copyCCD\" style=\" background: transparent;border: transparent !important;height:25px !important\" title=\"Copy  Contrast Ratio Details\"  aria-label=\"Copy  Contrast Ratio details\"  > <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" style=\"stroke: #FFFFFF;stroke-width: 1.25px;\"><path d=\"M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z\"/></svg></button><span id=\"copyStatus\" aria-live=\"assertive\" style=\"font-size:12px;font-weight: normal\"></span></div></caption>' +
          '<tr><th scope="col">WCAG Standard</th><th scope="col">Small Text (4.5:1)</th><th scope="col" class="large-text-cls">Large Text,UI Components, & Graphical Objects (3:1)</th></tr>' +
          '<tr><th scope="row">AA</th><td id="' + orupVal[0] + 'SmallAA"></td><td id="' + orupVal[0] + 'LargeAA"></td></tr>' +
          '<tr><th scope="row">AAA</th><td id="' + orupVal[0] + 'SmallAAA"></td><td id="' + orupVal[0] + 'LargeAAA"></td></tr>' +
          '</table>' +
          '</fieldset>'
        );
    })


    // Populate color name <select>s
    for (var i = 0; i < color.length; i++) {
      $('select[id$="Name"]')
        .append('<option style="background-color:#' + color[i][0] + '" class="' + color[i][2] + '" value="#' + color[i][0] + '">' + color[i][1] + '</option>');
    }
    $('select[id$="ForeName"]').find('option[value="#FFFFFF"]').attr('selected', true);
    $('select[id$="BackName"]').find('option[value="#0000FF"]').attr('selected', true);


    $('[type=color]').each(function () {
      $(this).attr('aria-expanded', false);
    });

    // NAMED FUNCTIONS

    // Zoom image on canvas
    function zoom(dir) {
      var z = $('#zoomRange').val() / 25 + 1;
      if (z === 1) {
        $('#minus').prop('disabled', true);
      } else if (z === 5) {
        $('#plus').prop('disabled', true);
      } else {
        $('.zoom').prop('disabled', false);
      }
      if (dir === 'out') {
        imgX += ((newWidth - imgWidth * z) / 2);
        imgY += ((newHeight - imgHeight * z) / 2);
      } else if (dir === 'in') {
        imgX -= ((imgWidth * z - newWidth) / 2);
        imgY -= ((imgHeight * z - newHeight) / 2);
      }
      newWidth = imgWidth * z;
      newHeight = imgHeight * z;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, imgX, imgY, newWidth, newHeight);
    }

    // Fit image to canvas
    function fitImage() {
      $('#zoomRange').val(0);
      var imgRatio = Math.min(canvasWidth / img.width, 480 / img.height);
      imgWidth = img.width * imgRatio;
      imgHeight = img.height * imgRatio;
      newWidth = imgWidth;
      newHeight = imgHeight;
      imgX = (canvasWidth - imgWidth) / 2;
      imgY = (480 - imgHeight) / 2;
      ctx.clearRect(0, 0, canvasWidth, 480);
      ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
    }

    // Size the canvas in proportion to the viewport size
    function resizeCanvas() {
      canvasWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.36;
      $('canvas').attr('width', canvasWidth);
      $('#zoomRange').css('width', canvasWidth - 160);
      if ($('.canvasContainer').hasClass('hasImage')) {
        zoom('out');
      }
    }

    // Re-size the canvas and zoom slider when the window size changes
    $(window).resize(function () {
      resizeCanvas();
    });

    // Error messages
    function error(errType, field) {
      $('#errMsg').text('Please enter a valid ' + errType + ' value.');
      setTimeout(function () {    // Need setTimeout to set focus on element you just left
        field.focus().attr('aria-invalid', true);
      }, 1);
    }

    // Conversion Functions

    function hexLong(h) {
      // Convert short hex code like #FFF to #FFFFFF
      return '#' + Array(3).join(h.substr(1, 1)) + Array(3).join(h.substr(2, 1)) + Array(3).join(h.substr(3, 1));
    }

    function hexToRgb(hex, field) {
      if (hex) {
        $('input').attr('aria-invalid', 'false');
        $('#errMsg').empty();
        if (hex.length === 4) {
          hex = hexLong(hex);
        }
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
          return parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16);
        } else {
          error('hexadecimal', field);
        }
      }
    }

    function toHex(n) {
      try {
        n = parseInt(n, 10);
        if (isNaN(n)) return '00';
        n = Math.max(0, Math.min(n, 255));
        return '0123456789ABCDEF'.charAt((n - n % 16) / 16) + '0123456789ABCDEF'.charAt(n % 16);
      } catch (err) {
        console.log(err);
      }
    }

    function luminance(r, g, b) {
      var a = [r, g, b].map(function (v) {
        v /= 255;
        return (v <= 0.03928) ? v / 12.92 : Math.pow(((v + 0.055) / 1.055), 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    function rgbToHsl(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if (max === min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
      return [h, s, l];
    }

    function hslToRgb(h, s, l) {
      var r, g, b;
      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        var hue2rgb = function hue2rgb(p, q, t) {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    // Update when user changes a color
    function update($hexField) {
      $hexField.val($hexField.val().toUpperCase());
      var rgb = hexToRgb($hexField.val(), $hexField);
      var state = $hexField.attr('id').substr(0, 2); // either #or(iginal) or #up(dated)
      var ground = $hexField.attr('id').substr(2, 4);  // either Fore(ground) or Back(ground)
      if (state === 'up') {
        // If user updated the 'original' state, then keep idPrefix empty,
        // which will apply the changes to BOTH 'original' and 'updated'
        idPrefix = '[id$=up';
      } else {
        idPrefix = '[id$=';
      }

      // Make all color fields match
      $(idPrefix + ground + 'Hex], ' + idPrefix + ground + 'Choose], ' + idPrefix + ground + 'Name]').val($hexField.val());
      $(idPrefix + ground + 'Rgb]').val(rgb);

      // Update Sample Text colors
      $(idPrefix + 'Text]').css({
        'color': $('#' + state + 'ForeHex').val(),
        'background': $('#' + state + 'BackHex').val()
      });

      // Update the lightness sliders
      var myForeRgb = $('#' + state + 'ForeRgb').val().split(','),
        myBackRgb = $('#' + state + 'BackRgb').val().split(','),
        myForeHsl = rgbToHsl(myForeRgb[0], myForeRgb[1], myForeRgb[2]),
        myBackHsl = rgbToHsl(myBackRgb[0], myBackRgb[1], myBackRgb[2]);

      $(idPrefix + 'ForeLite]')
        .val(myForeHsl[2] * 100)
        .next('.swatch').css('background', 'linear-gradient(90deg,hsl(' + myForeHsl[0] * 360 + ',' + myForeHsl[1] * 100 + '%,0%),hsl(' + myForeHsl[0] * 360 + ',' + myForeHsl[1] * 100 + '%,50%),hsl(' + myForeHsl[0] * 360 + ',' + myForeHsl[1] * 100 + '%,100%))');

      $(idPrefix + 'BackLite]')
        .val(myBackHsl[2] * 100)
        .next('.swatch').css('background', 'linear-gradient(90deg,hsl(' + myForeHsl[0] * 360 + ',' + myBackHsl[1] * 100 + '%,0%),hsl(' + myBackHsl[0] * 360 + ',' + myBackHsl[1] * 100 + '%,50%),hsl(' + myForeHsl[0] * 360 + ',' + myForeHsl[1] * 100 + '%,100%))');

      // Evaluate contrast ratio and show result in the table
      var L1 = luminance(myForeRgb[0], myForeRgb[1], myForeRgb[2]),
        L2 = luminance(myBackRgb[0], myBackRgb[1], myBackRgb[2]);

      if (L1 > L2) {
        ratio = (L1 + 0.05) / (L2 + 0.05);
      } else {
        ratio = (L2 + 0.05) / (L1 + 0.05);
      }
      if (!isNaN(ratio)) {
        $(idPrefix + 'Ratio]').html((Math.floor(ratio * 100) / 100).toFixed(2) + '<span class="toOne"> : 1<span>');   // Truncate the decimal, don't round it
        if (ratio >= 4.5) {
          $(idPrefix + 'SmallAA]').html('pass').addClass('pass');
          $(idPrefix + 'LargeAAA]').html('pass').addClass('pass');
        } else {
          $(idPrefix + 'SmallAA]').html('fail').removeClass('pass');
          $(idPrefix + 'LargeAAA]').html('fail').removeClass('pass');
        }
        if (ratio >= 3) {
          $(idPrefix + 'LargeAA]').html('pass').addClass('pass');
        } else {
          $(idPrefix + 'LargeAA]').html('fail').removeClass('pass');
        }
        if (ratio >= 7) {
          $(idPrefix + 'SmallAAA]').html('pass').addClass('pass');
        } else {
          $(idPrefix + 'SmallAAA]').html('fail').removeClass('pass');
        }
      }
    }

    // INITIAL STATE

    $('#orForeHex').val('#FFFFFF');
    $('#orBackHex').val('#0000FF');
    $('option').each(function () {
      var $this = $(this);
      $this.css('background-color', $this.attr('value'));
    });
    $('#imgLoc').val('');
    $('#zoomRange').val(0);
    update($('#orForeHex'));
    update($('#orBackHex'));
    $('span.lightness input').each(function () {
      $(this).parent('span').prev('label').text( 'Adjust Lightness: ' + $(this).val() + '%');
    });
    $('.pick, .zoom, #zoomRange').prop('disabled', true).attr('aria-disabled', 'true');
    resizeCanvas();

    // Feature detection: Only item in question is <input type="color">
    if (document.getElementById('orForeChoose').type === 'text') {
      $('.inputColor').remove();
    }

    // Show focus when user is on file input
    $('body').on('focus mouseover', '.empty #imgLoc', function () {
      $('.uploadContainer').addClass('active');
    });
    $('body').on('blur mouseout', '.empty #imgLoc', function () {
      $('.uploadContainer').removeClass('active');
    });

    // Select a named color
    $('select').change(function () {
      if ($(this).attr('id') == 'orForeName' || $(this).attr('id') == 'orBackName') {
        var $this = $(this);
        $this.val($this.children('option:selected').val());
        update($this);
      }
    });

    // Enter a new hex value
    $('[id$=Hex]').change(function () {
      var $this = $(this);
      // If user omits the #, then prepend it
      if ($this.val().substr(0, 1) !== '#') {
        $this.val('#' + $this.val());
      }
      // If user entered shorthand hex like #FFF, then convert to #FFFFFF
      if ($this.val().length === 4) {
        $this.val(hexLong($this.val()));
      }
      // Change the RGB and color picker values to match the Hex value
      update($this);
    });

    // Upload an image
    $('body').on('change', '#imgLoc', function (event) {
      img.src = URL.createObjectURL(event.target.files[0]); // 'ascii-wild.gif';
      $(img).load(function () {
        // Don't use toggleClass here. Layout breaks if user clicks 'pick from image' and then
        // immediately uploads a new image
        $('.canvasContainer').removeClass('empty').addClass('hasImage');
        $('.uploadContainer').removeClass('active');
        $('.zoom:not(#minus), #zoomRange').prop('disabled', false).attr('aria-disabled', 'false');
        $('#zoomRange').focus();
        fitImage();
      });
      $('.pick').prop('disabled', false).attr('aria-disabled', 'false').removeAttr('title');
    });
    $('#fit').click(function () {
      fitImage();
    });

    // Enter a new RGB value
    $('[id$=Rgb]').change(function () {
      var $this = $(this);
      $('input').attr('aria-invalid', 'false');
      $('#errMsg').empty();
      var rgbCol = $this.val().split(',');
      $hexField = $this.closest('.inner').find('[id$=Hex]');
      try {
        $hexField.val('#' + toHex(rgbCol[0].trim()) + toHex(rgbCol[1].trim()) + toHex(rgbCol[2].trim()));
        update($hexField);
      } catch (err) {
        error('RGB', $this);
      }
    });

    // Pick a color with the "Choose Color" input
    $('[type=color]').change(function () {
      var $this = $(this);
      $(this).attr('aria-expanded', false);
      $hexField = $this.closest('.inner').find('[id$=Hex]');
      $hexField.val($this.val());
      update($hexField);
    });


    $('[type=color]').click(function () {
      $(this).attr('aria-expanded', true);
    });

    $('[type=color]').on('blur', function () {
      if ($(this).data("prevColor") == $(this).val()) {
        $(this).attr('aria-expanded', false);
      }
      updateData.bind(this)();
    });


    $('[type=color]').on('keyup', function (e) {
      if (e.keyCode == 27) {
        $(this).attr('aria-expanded', false);
      }
    });

    function updateData() {
      $(this).data("prevColor", $(this).val());
    }

    updateData.bind($("[type=color]"))();


    // Enter "pick color from image" mode
    $('body').on('click', '.pick:not([disabled])', function () {
      var $this = $(this);
      $('.pick').removeClass('active');
      $this.addClass('active');
      $('.canvasContainer').attr('title', 'Click on the image to pick a color.');
      $('canvas').addClass('active');
      $hexField = $this.closest('.inner').find('[id$=Hex]');
    });

    // Pick a color from the image
    $('body').on('click', 'canvas.active', function (e) {
      // I want to sample from the tip of the eyedropper, not its center, so I need to use an offset.
      var iconOffset = 7;
      var i = ctx.getImageData(e.pageX - this.offsetLeft - iconOffset, e.pageY - this.offsetTop +
        iconOffset, 1, 1).data;
      //console.log(e.pageX + ', ' + e.pageY + ', ' + this.offsetLeft + ', ' + this.offsetTop);
      $hexField.val('#' + toHex(i[0]) + toHex(i[1]) + toHex(i[2]));
      update($hexField);
      $('canvas, .pick').removeClass('active');
      $('.canvasContainer').removeAttr('title');
      // If user clicks on 'pick from image', then clicks/focuses on something else without picking a color, then deactivate the canvas.
      // However, user can click on 'pick from image', and then use the zoom controls, and the canvas remains active.
      $('input:not(#zoomRange)').focus(function () {
        $('canvas, .pick').removeClass('active');
      });

    });

    // If user clicks "Pick from image", but then focuses on another input instead, then un-activate the canvas and pick button
    $('input, select').focus(function () {
      $('.pick, canvas').removeClass('active');
    });

    // Pick a color with the lightness slider
    $('body').on('input', '.inner [type=range]', function () {
      var $this = $(this);
      $hexField = $this.closest('.inner').find('[id$=Hex]');
      var myRgb = hexToRgb($hexField.val(), $hexField).split(', ');
      var myHsl = rgbToHsl(myRgb[0], myRgb[1], myRgb[2]);
      myHsl[2] = $this.val() / 100;
      myRgb = hslToRgb(myHsl[0], myHsl[1], myHsl[2]);
      $hexField.val('#' + toHex(myRgb[0]) + toHex(myRgb[1]) + toHex(myRgb[2]));
      $this.parent('span').prev('label').text('Adjust Lightness : ' + $(this).val() + '%');
      update($hexField);
    });


    $('body').on('change', '.inner [type=range]', function () {
      $(this).trigger('input');
    });


    // Zoom & Drag Image  
    // defined but never used? var scale = 1, offset = {};
    var mouseDown = false;
    $('#plus').click(function () {
      $('#zoomRange')[0].value++;
      zoom('in');
    });
    $('#minus').click(function () {
      $('#zoomRange')[0].value--;
      zoom('out');
    });
    $('canvas').mousedown(function (evt) {
      mouseDown = true;
      offsetX = evt.clientX - imgX;
      offsetY = evt.clientY - imgY;
    });
    $('canvas').mouseup(function () {
      mouseDown = false;
    });
    $('canvas').mouseover(function () {
      mouseDown = false;
    });
    $('canvas').mouseout(function () {
      mouseDown = false;
    });
    $('canvas').mousemove(function (evt) {
      if (mouseDown) {
        imgX = evt.clientX - offsetX;
        imgY = evt.clientY - offsetY;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, imgX, imgY, newWidth, newHeight);
      }
    });
    $('body').on('input', '#zoomRange', function () {
      var newZoom = $('#zoomRange').val();
      if (oldZoom > newZoom) {
        zoom('out');
      } else if (oldZoom < newZoom) {
        zoom('in');
      }
      oldZoom = newZoom;
    });
  });

  setTimeout(()=>{

  document.getElementById('foreground-picker').addEventListener('click', () => {
    const resultElement = document.getElementById('orForeHex');
  
    if (!window.EyeDropper) {
      resultElement.textContent = 'Your browser does not support the EyeDropper API';
      return;
    }
  
    const eyeDropper = new EyeDropper();
  
    eyeDropper.open().then((result) => {
     
      resultElement.value = "";
      resultElement.focus();
      resultElement.value = (result.sRGBHex).includes('#') ? result.sRGBHex : rgb2hex(result.sRGBHex ) ;
      resultElement.dispatchEvent(new Event('input', { bubbles: true }));
      resultElement.dispatchEvent(new Event('change', { bubbles: true }));
      //resultElement.dispatchEvent(new Event('keyup', { bubbles: true }));
      
    }).catch((e) => {
     // resultElement.textContent = e;
    });
  });
  
 
  document.getElementById('background-picker').addEventListener('click', () => {
    const resultElement = document.getElementById('orBackHex');
  
    if (!window.EyeDropper) {
      resultElement.textContent = 'Your browser does not support the EyeDropper API';
      return;
    }
  
    const eyeDropper = new EyeDropper();
  
    eyeDropper.open().then((result) => {
      resultElement.value = "";
      resultElement.focus();
      resultElement.value = (result.sRGBHex).includes('#') ? result.sRGBHex : rgb2hex(result.sRGBHex ) ;
      resultElement.dispatchEvent(new Event('input', { bubbles: true }));
      resultElement.dispatchEvent(new Event('change', { bubbles: true }));
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


   

  document.getElementById('copyCCD').addEventListener("click",()=>{

    switch (Number(document.getElementById('copyCriteria').value)) {
      case 1:
          let msg = "It is important for the text to have good contrast ratio with its background of 4.5:1 at the minimum. When this is not met, people with color blindness and low vision will find it difficult to read the content and with the above details, we can see that the element is not meeting the minimum threshold of 4.5:1 contrast ratio."
          copyColor("Foreground text","Background",msg);
          break;
      case 2:
        let msg2 = "It is important for the placeholder text to have good contrast ratio with its background of 4.5:1 at the minimum. When this is not met, people with color blindness and low vision will find it difficult to read the content and with the above details, we can see that the placeholder element is not meeting the minimum threshold of 4.5:1 contrast ratio."
          copyColor("Placeholder text","Background",msg2);
          break;
        case 3:
          let msg3="It is important for the link or button text to have good contrast ratio with its background of 4.5:1 at the minimum on hover/focus. When this is not met, people with color blindness and low vision will find it difficult to read the content and with the above details, we can see that the link or button element is not meeting the minimum threshold of 4.5:1 contrast ratio."
          copyColor("Link or button text","Background",msg3);
          break;
        case 4:
          let msg4="It is important for the text to have good contrast ratio with its gradient background of 4.5:1 at the minimum. When this is not met, people with color blindness and low vision will find it difficult to read the content and with the above details, we can see that the element is not meeting the minimum threshold of 4.5:1 contrast ratio."
          copyColor("Foreground text","Background (Gradient)",msg4);
          break;
        case 5:
          let msg5="It is important for the large text to have good contrast ratio with its background of 3:1 at the minimum. When this is not met, people with color blindness and low vision will find it difficult to read the content and with the above details, we can see that the element is not meeting the minimum threshold of 3:1 contrast ratio."
          copyColor("Foreground text","Background",msg5);
          break;
        case 6:
          let msg6="It is important for the large link or button text to have good contrast ratio with its background of 3:1 at the minimum on hover/focus. When this is not met, people with color blindness and low vision will find it difficult to read the content and with the above details, we can see that the link or button element is not meeting the minimum threshold of 3:1 contrast ratio."
          copyColor("Link or button text","Background",msg6);
          break;
        case 7:
          let msg7="It is important for the large text to have good contrast ratio with its gradient background of 3:1 at the minimum. When this is not met, people with color blindness and low vision will find it difficult to read the content and with the above details, we can see that the element is not meeting the minimum threshold of 3:1 contrast ratio."
          copyColor("Foreground text","Background (Gradient)",msg7);
          break;
        case 8:
          let msg8 ="When color alone is used as the focus indicator of an element, people who are blind, have low vision, or are color blind will not be able to understand the focussed state of an element. It is imperative to have a 3:1 contrast ratio between the default border color and focused state color so that users with color blindness or low vision will be able to understand the element that is in a focussed state."
          copyColor("Focus indicator","Default Element",msg8);
          break;
        case 9:
          let msg9 ="It is important for a low vision or color blind user to know the visual boundary of an input element as it makes it easy for the user to know where to interact. To let that happen, we need to have a 3:1 contrast ratio between the visual boundary color and its background, from the details above we can see that the ratio is less than 3:1, making it difficult for the color blind user to identify the interactive area of the input element."
          copyColor("Visual boundary","Inner adjacent",msg9);
          break;
        case 10:
          let msg10="It is important for a low vision or color blind user to know the visual boundary of an input element as it makes it easy for the user to know where to interact. To let that happen, we need to have a 3:1 contrast ratio between the visual boundary color and its background, from the details above we can see that the ratio is less than 3:1, making it difficult for the color blind user to identify the interactive area of the input element."
          copyColor("Visual boundary","Outer adjacent",msg10);
          break;
        case 11:
          let msg11="When the visual focus indicator of an element is inside the component it needs to have a contrast ratio of 3:1 at the minimum with its inner background. From the color codes we can see that the visual focus indicator is not meeting the minimum threshold for the contrast with its inner adjacent color making it difficult for the colorblind and low vision users to identify the focussed element."
          copyColor("Focus indicator","Inner adjacent",msg11);
          break;
        case 12:
          let msg12="When the visual focus indicator of an element is outside the component it needs to have a contrast ratio of 3:1 at the minimum with its outer background. From the color codes we can see that the visual focus indicator is not meeting the minimum threshold for the contrast with its outer adjacent color making it difficult for the colorblind and low vision users to identify the focussed element."
          copyColor("Focus indicator","Outer adjacent",msg12);
          break;  
        case 13:
          let msg13="When the color contrast ratio of an interactive element's state with its background is less than 3:1, it becomes difficult for a color blind or low vision user to understand different states of the element."
          copyColor("Selected state","Adjacent",msg13);
          break; 
        case 14:
          let msg14="Icons convey crucial information about the element's functionality but when they do not meet the contrast ratio of 3:1 with its background then color blind and low vision users will not be able to perceive or understand the icon's functionality."
          copyColor("Icon","Adjacent background",msg14);
          break;  
        case 15:
          let msg15 ="Graphs convey crucial information about the data but when the colors used in the graphs do not meet the contrast ratio of 3:1 with its adjacent colors, then colorblind and low vision users will not be able to perceive or understand the graph's intent."
          copyColor("Graphical object","Adjacent",msg15);
          break;  
        case 16:
          let msg16="Link text is visually differentiated from surrounding body text only by using color, this causes people who are color blind or with low vision to miss those links."
          copyColor("Link text","Surrounding text",msg16);
          break;   
        case 17:
          let msg17 ="\nFocus indicator color :"+ document.getElementById('orForeHex').value + "\nOuter adjacent color :Fill details\nContrast Ratio   : Fill details\n\nVisual focus indicator of an element needs to have a contrast ratio of 3:1 at the minimum with its inner and outer background. From the color codes we can see that the visual focus indicator is not meeting the minimum threshold for the contrast with its inner and outer adjacent color making it difficult for the color blind and low vision users to identify the focussed element."
          copyColor("Focus indicator","Inner adjacent",msg17);
          break; 
        case 18:
          
          break;   
        case 19:
          
          break;   
        case 20:
          let msg20=""
          copyColor("Foreground","Background",msg20);
          break; 
    }

    
   function copyColor (color1,color2,description){
    let myMessage = "\nContrast Details\n\n"+ color1 +" color: " + document.getElementById('orForeHex').value +"\n" + color2 +" color: " + document.getElementById('orBackHex').value + "\nContrast Ratio: " + document.getElementById('orRatio').innerText + " \n\n" + description + " \n\n";
    navigator.clipboard.writeText(myMessage);

    document.getElementById('copyStatus').innerText ="Copied"

    setTimeout(()=>{document.getElementById('copyStatus').innerText =""},10000);
   }
       
  });


  },1000);
}


