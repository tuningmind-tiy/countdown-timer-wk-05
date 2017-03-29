const countdown = function() {

    let now = new Date()
    let eventDate = new Date(2018, 11, 21)

    let currentTime = now.getTime()
    let eventTime = eventDate.getTime()
    let remTime = eventTime - currentTime
   
  const getDays = function() {
    let d = Math.floor(remTime / (1000 * 60 * 60 * 24))
    return d
  }
  const getHours = function() {
    let h = Math.floor(remTime/ (1000 * 60 * 60))
    h %= 24
    h = (h < 10) ? "0" + h : h
    return h
  }
  const getMinutes = function() {
    let m = Math.floor(remTime / (1000 * 60))
    m %= 60
    m = (m < 10) ? "0" + m : m
    return m
  }
  const getSeconds = function() {
    let s = Math.floor(remTime / 1000)
    s %= 60
    s = (s < 10) ? "0" + s : s
    return s
  }
  d = getDays()
  h = getHours()
  m = getMinutes()
  s = getSeconds()

  document.getElementById('days').textContent = d
  document.getElementById('hours').textContent = h
  document.getElementById('minutes').textContent = m
  document.getElementById('seconds').textContent = s

  setTimeout(countdown, 1000)

}

countdown()

