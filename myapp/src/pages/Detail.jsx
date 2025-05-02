import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Detail = () => {
      const location = useLocation()
      const data = location.state.item

      useEffect(() => {
            console.log('====================================');
            console.log(data);
            console.log('====================================');


      }, [])


      return (
            <div>
                  {

                        <div>
                              <p>
                                    {data.name}
                              </p>
                              <p>
                                    {data.description}
                              </p>
                              <p>id : {data.id}</p>
                        </div>
                  }
            </div>
      )
}

export default Detail