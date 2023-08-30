import React, { useState ,useEffect} from 'react'

function CompareDays() {

    const [pastHours,setPastHours] = useState([])
    const [pastHoursUnix,setPastHoursUnix] = useState([])
    const [selectedHours,setSelectedHours] = useState([
        '2023-08-29T14:00:00','2023-08-31T13:00:00','2023-08-31T18:00:00'
    ])

    useEffect(() => {
        const startDate = new Date('2023-08-29T00:00:00');
        const hours = []


        for (let i=0; i<24 ; i++) {
            const hour = new Date(startDate)
            hour.setHours(startDate.getHours()+i)
            hours.push(hour)
        }
        setPastHours(hours)

        
        const unix = hours.map(el => Date.parse(el).toString()); // Use map directly to create the unix array
        setPastHoursUnix(unix); 
 
    
 
    
      }, []);
      
    console.log(pastHours)
    console.log(pastHoursUnix)
  
    console.log(Date.parse(pastHours[0]).toString() === pastHoursUnix[0])
  
    const currentDate = new Date();
    console.log(currentDate);
    console.log(Date.parse(currentDate).toString());
     
    return (

        <div>
                <h5>Selected Hours</h5>
                {selectedHours.map((hour,index)=>{
                    
                            return (
                        <>
                           <ul>
                              <li>{hour.toString()} - {Date.parse(hour).toString()}</li>
                          </ul>
                        </>
                    )
                    
                })}
        <h1>---------------------------------</h1>
        <h5>Upcoming Selected Hours</h5>

        {selectedHours.map((hour,index)=>{
                        if (Date.parse(hour).toString() >  Date.parse(currentDate).toString()) { 
                    return (
                        <>
                           <ul>
                              <li>{hour.toString()} - {Date.parse(hour).toString()}</li>
                          </ul>
                        </>
                    )
                        }
                })}


        <h1>---------------------------------</h1>

              {pastHours.map((hour, index) => {
                  return (
                      <>
                          <ul>
                              <li>{hour.toString()} - {Date.parse(hour).toString()}</li>
                          </ul>
                      </>
                  )
              }
              )
              }


        </div>
  )
}

export default CompareDays
