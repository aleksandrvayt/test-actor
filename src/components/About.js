import React, {useState,useEffect} from 'react'
import { Form } from './Form'
import Hero from './Hero'

export default function About() {

        const [actors, setActors] = useState([])
        const [loading, setLoading] = useState(true)
      
        useEffect(() => {
          debugger
          fetch('https://swapi.co/api/people/')
            .then(response => response.json())
            .then(parse => parse.results)
            .then(actors => {  
                setActors(actors)
                setLoading(false)
            })
        }, [])
       
        function removeActors(name) {
          setActors(actors.filter(actor => actor.name !== name))
        }
      
        function addActors(name) {
          setActors(
            actors.concat([
              {
                name,
                id: Date.now()
              }
            ])
          )
        }
        return (
        
          <div>
              <Form onCreate={addActors}/>
              {loading && <h2>Загрузка...</h2>}
              {actors.length ? (
                
                actors.map(actor => {
                return <Hero actors={actor} removeActors={removeActors} key={actor.name}/>
                })) : loading ? null : (
                <p>Нет актеров!</p>
              )}
           </div> 
        )
      }
