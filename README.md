# bbox2extent

[![](https://img.shields.io/npm/v/bbox2extent.svg?style=flat-square)](https://www.npmjs.com/package/bbox2extent)
[![](https://img.shields.io/travis/ngoldman/bbox2extent.svg?style=flat-square)](https://travis-ci.org/ngoldman/bbox2extent)

Transform a GeoJSON bounding box into an Esri-formatted extent object.

```
npm install bbox2extent
```

## Usage

```
var bbox2extent = require('bbox2exent')
var bbox = [100, 0, 105, 1]

var extent = bbox2extent(bbox)

// OR

bbox2extent(function (err, extent) {
  if (err) throw err

  console.log(extent)
  // {
  //   xmin: 100,
  //   ymin: 0,
  //   xmax: 105,
  //   ymax: 1,
  //   spatialReference: {
  //     wkid: 4326,
  //     latestWkid: 4326
  //   }
  // }
})

## License

[ISC](LICENSE.md)
