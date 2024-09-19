function loadCO2(){
    const url = new URL('https://66ebe3a12b6cf2b89c5c4254.mockapi.io/metropolis/api/v1/co2');
    url.searchParams.append('orderBy', 'id');
    url.searchParams.append('order', 'desc');

    
    fetch(url, {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) {
            return res.json()
        }       
      }).then(co2 => {
            document.getElementById('result').innerHTML = co2[0].co2Value
            console.log(co2)
      }).catch(error => {
        document.getElementById('result').innerHTML = 'Request failed'
      })
  }
  
  window.onload = loadCO2;