function openApp (paramsJson) {
  var commonParamSting = Object.keys(paramsJson).map(function (key) {
    if (paramsJson[key] === undefined) return ''
    return encodeURIComponent(key) + '=' + encodeURIComponent(paramsJson[key])
  }).join('&')

  var androidUrl = 'command code' + commonParamSting

  var iosUrl = 'schema://?params' + commonParamSting

  var platObj = checkEnvironment()

  if (platObj.system === 'ios') {
    if (platObj.shell === 'wechat') {
      alert('open browser prompt')
    } else {
      openIosApp(iosUrl)
    }
  } else if (platObj.system === 'android') {
    openAndroidApp(androidUrl)
  }

  // Android
  function openAndroidApp (androidUrl) {
    var jumpCommand = androidUrl
    var btn = document.createElement('button')
    $(btn).attr('data-clipboard-text', jumpCommand)
    new Clipboard(btn)
    $(btn).trigger('click')
    window.location.href = 'android download URL'
  }

  // ios
  function openIosApp (iosUrl) {
    var url = iosUrl,
      iosDownloadUrl = 'ios download URL'

    var loadDateTime = Date.now()
    setTimeout(function () {
      var timeOutDateTime = Date.now()
      if (timeOutDateTime - loadDateTime < 5000) {
        window.location = iosDownloadUrl
      } else {
        window.close()
      }
    }, 25)

    window.location = url
  }

  // check environment
  function checkEnvironment () {
    const ua = navigator.userAgent.toLowerCase()
    const testUa = regexp => regexp.test(ua)
    const testVs = regexp => (ua.match(regexp) + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.')

    let system = 'unknow',
      shell = 'unknow'

    if (testUa(/windows|win32|win64|wow32|wow64|macintosh|macintel|x11/ig)) {
      system = 'pc' // pc
    } else if (testUa(/android|adr/ig)) {
      system = 'android' // android
    } else if (testUa(/ios|iphone|ipad|ipod|iwatch/ig)) {
      system = 'ios' // ios
    }

    if (testUa(/micromessenger/ig)) {
      shell = 'wechat'
    } else if (testUa(/qqbrowser/ig)) {
      shell = 'qq'
    } else {
      shell = 'others'
    }
    return {
      system,
      shell
    }
  }
}
