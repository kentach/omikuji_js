{
  const button = document.getElementById('btn');
  const result = document.getElementById('result');
  const stamp = document.getElementById('stamp');
  const stampRandom = [ "吉", "凶", "?" ]
  const omikuji = [ "吉","凶", "大吉", "小吉", "中吉", "末吉" ];
  let timeoutId;
  
  button.addEventListener('click', () => {
    timeoutId = setInterval(() => {
      result.textContent = omikuji[Math.floor(Math.random() * omikuji.length)];
    }, 50)

    setTimeout(() => {
      clearInterval(timeoutId)
    }, 2000) 
  })
  



  function changeStamp () {
    stamp.style.opacity = 0;

    setTimeout(() => {
      stamp.textContent 
        = stampRandom[Math.floor(Math.random() * stampRandom.length)];
        stamp.style.opacity = 0.85;
    }, 1000)
  }

  setInterval(changeStamp, 3000)
}