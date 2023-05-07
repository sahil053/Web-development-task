function solution(D) {
    let days = {
      'Mon': 0,
      'Tue': 0,
      'Wed': 0,
      'Thu': 0,
      'Fri': 0,
      'Sat': 0,
      'Sun': 0
    };
    
    let sortedDates = Object.keys(D).sort();
    
    for(let i=0; i<sortedDates.length; i++) {
      let date = new Date(sortedDates[i]);
      let day = date.toLocaleString('en-us', { weekday: 'short' });
      days[day] += D[sortedDates[i]];
      
      if(i === sortedDates.length-1) {
        let nextDate = new Date(date);
        nextDate.setDate(date.getDate() + 1);
        let nextDay = nextDate.toLocaleString('en-us', { weekday: 'short' });
        days[nextDay] = D[sortedDates[i]];
      } else {
        let nextDate = new Date(sortedDates[i+1]);
        let diff = (nextDate - date)/(1000*60*60*24);
        if(diff > 1) {
          let mean = (D[sortedDates[i]] + D[sortedDates[i+1]])/2;
          for(let j=1; j<diff; j++) {
            let newDate = new Date(date);
            newDate.setDate(date.getDate() + j);
            let newDay = newDate.toLocaleString('en-us', { weekday: 'short' });
            days[newDay] = mean;
          }
        }
      }
    }
    
    return days;
  }
  