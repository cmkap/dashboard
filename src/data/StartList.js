import Axios from 'axios';
import React,{useEffect, useState} from 'react';


function StartList() {

    const [participants, setParticipants] = useState([]);

    

    const fetchParticipants = async() => {
        const response = await Axios.get('https://ldt-tech-test.herokuapp.com/api/startlistentries')
        setParticipants(response.data)
    }

    useEffect(() => {
        fetchParticipants();
    },[])
    useEffect(() => {
        console.log(participants)
      }, [participants])

    return (
        <div className="StartList">
            {
                participants && participants.filter( participant => {
                    return participant.status === "CONFIRMED";
                }).map(participant => {
                    return(

                        
                        <div key={participant.id} style={{alignItems:'center',margin:'20px 60px'}}>
                            <h4>{participant.firstName}</h4>
                            <h4>{participant.lastName}</h4>
                            <h1>{participant.status}</h1>
                            <h1>{participant.id}</h1>
                        </div>
                    )
                })
            }
        </div>
    )

};

export default StartList