let arr4 = [
    {id:1,status:'pending'},
    {id:2,status:'pending'},
    {id:3,status:'complete'},
    {id:4,status:'pending'},
    {id:5,status:'Failed'},
    {id:6,status:'Success'}
    ];
    
    /* const statuses = [...new Set(arr4.map(obj => obj.status))];
    let results = {}
    statuses.forEach(status => {
    const noOfObj = arr4.filter(obj => obj.status === status ).length;
      results[status] = noOfObj;
     })
    console.log(results) */
    let results = {}
    for(let i=0; i<arr4.length; i++){
         if(results[arr4[i].status]){
              results[arr4[i].status] = results[arr4[i].status] + 1;
      }else{
              /* Object.assign(results, { status: arr4[i].status, count: 1 }) */
              results[arr4[i].status] =  1;
      }
    }
    
    console.log(results)
    
    