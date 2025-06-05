import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Detail = () => {

      const { id } = useParams()
      console.log('====================================');
      console.log();
      console.log('====================================');



      useEffect(() => {
            console.log('====================================');
            console.log(location.state);
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