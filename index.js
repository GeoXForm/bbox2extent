module.exports = function (bbox, callback) {
  var isArray = Object.prototype.toString.call(bbox) === '[object Array]'
  var isLongEnough = bbox.length === 4

  if (!isArray || !isLongEnough) {
    var err = 'invalid bbox object'
    return callback(err)
  }

  var extent = {
    'xmin': bbox[0],
    'ymin': bbox[1],
    'xmax': bbox[2],
    'ymax': bbox[3],
    'spatialReference': {
      'wkid': 4326,
      'latestWkid': 4326
    }
  }

  if (callback) callback(null, extent)
  else return extent
}
