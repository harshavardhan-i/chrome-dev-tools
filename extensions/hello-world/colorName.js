// Basic colors list 
// Edit this list to add or remove color options
const colors = [
    { 'colorName': 'White'	  ,'hexCode': '#FFFFFF',	'rgb': [255, 255, 255]},
    { 'colorName': 'Silver'	,'hexCode': '#C0C0C0',	'rgb': [192, 192, 192]},
    { 'colorName': 'Gray'	  ,'hexCode': '#808080',	'rgb': [128, 128, 128]},
    { 'colorName': 'Black'	  ,'hexCode': '#000000',	'rgb': [  0,   0,   0]},
    { 'colorName': 'Red'	    ,'hexCode': '#FF0000',	'rgb': [255,   0,   0]},
    { 'colorName': 'Maroon'	,'hexCode': '#800000',	'rgb': [128,   0,   0]},
    { 'colorName': 'Yellow'	,'hexCode': '#FFFF00',	'rgb': [255, 255,   0]},
    { 'colorName': 'Olive'	  ,'hexCode': '#808000',	'rgb': [128, 128,   0]},
    { 'colorName': 'Lime'	  ,'hexCode': '#00FF00',	'rgb': [  0, 255,   0]},
    { 'colorName': 'Green'	  ,'hexCode': '#008000',	'rgb': [  0, 128,   0]},
    { 'colorName': 'Aqua'	  ,'hexCode': '#00FFFF',	'rgb': [  0, 255, 255]},
    { 'colorName': 'Teal'	  ,'hexCode': '#008080',	'rgb': [  0, 128, 128]},
    { 'colorName': 'Blue'	  ,'hexCode': '#0000FF',	'rgb': [  0,   0, 255]},
    { 'colorName': 'Navy'	  ,'hexCode': '#000080',	'rgb': [  0,   0, 128]},
    { 'colorName': 'Pink'	,'hexCode': '#FF00FF',	'rgb': [255,   0, 255]},
    { 'colorName': 'Purple'	,'hexCode': '#800080',	'rgb': [128,   0, 128]}
];
  
// Maps hexcodes to Basic colors
function getColorName(hexcode) {
    let color = colors.find(ele => ele.hexCode === hexcode.toUpperCase());
    // If color listed in colors constant
    if(color){
      return color.colorName;
    } else {
      return  narrowHexToBasicColor(hexcode);
    }
}; 
  
// Maps specified color to listed colors
function narrowHexToBasicColor(hexCode){
    let color = "undefined";
    let rgb = hexToRGB(hexCode);
  
    if(rgb){
    //   console.log(rgb);
      color = getClosestColor(rgb);
    //   console.log("Closest basic color:", color);
    } 
  
    return color;
}
  
// Convert hex to rgb array.
function hexToRGB(hex){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
     ] : null;
}
  
// Finds closest point to coordinates (r, g, b) and returns
function getClosestColor(rgb){
  
    let minDistance = 999999;
    let color = "undefined";
  
    // Calculate 3d distance and select min distance color
    colors.forEach( ele =>{
      const rDist = Math.pow( Math.abs(rgb[0] - ele.rgb[0]), 2);
      const gDist = Math.pow( Math.abs(rgb[1] - ele.rgb[1]), 2);
      const bDist = Math.pow( Math.abs(rgb[2] - ele.rgb[2]), 2);
      const dist = Math.sqrt( rDist + gDist + bDist);
  
    //   console.log(rDist, gDist, bDist, dist);
    //   console.log(ele.colorName);
  
      if( dist < minDistance){
        minDistance = dist;
        color = ele.colorName;
      } 
  
    });  
    return color;
}
  
  
  