import {useEffect, useRef, useState} from "react"
import './App.css'

function App() {
  const videoRef = useRef()

   useEffect(() => {
    const videoElement = videoRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting){
            videoElement.play()
          } else {
            videoElement.pause()
          }
        })
      },
      {threshold: 0.5}
    )
    if (videoElement){
      observer.observe(videoElement)
    }

    return() => {
      if(videoElement){
        observer.unobserve(videoElement)
      }
    }
   }, []);

  return (
    <>
      <p className=" ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        illo nam dolores eligendi eum facere, quis beatae architecto culpa nisi
        ad nostrum! Maxime dicta velit aliquid, repudiandae laborum tempora
        pariatur placeat consequatur rerum in voluptas facilis fuga, veniam
        repellendus culpa illum. Odit dolorem corporis quae illo magni aliquam
        laudantium omnis at consectetur dolorum adipisci placeat voluptatibus
        quos, quibusdam distinctio fugiat nisi reprehenderit quas in culpa
        obcaecati neque et sunt. Dolorem suscipit ipsam voluptate, facere
        assumenda esse quibusdam unde architecto maxime non quidem? Qui eum
        incidunt magni voluptatem culpa consectetur, voluptate explicabo ipsa
        numquam praesentium, iure eaque <br /><br />assumenda doloribus itaque tempora
        dolorem ipsam facere. Cupiditate expedita nobis officia dolores itaque
        consectetur quis asperiores voluptatum alias. Iure vitae deserunt quidem
        corporis ratione! Quasi temporibus molestiae a fuga fugit est nobis
        nulla minus repellendus neque inventore nemo cumque nesciunt officiis,
        voluptatibus ratione perferendis similique unde pariatur, consequatur
        consequuntur ut? Natus iure atque amet dolores, illum, numquam qui
        fugiat error, adipisci eveniet perspiciatis libero exercitationem
        repellat beatae tempore officia inventore ad magni ipsam deleniti eum
        maiores velit cum sed! Natus eaque sapiente quidem distinctio ducimus
        repellendus unde consectetur modi mollitia inventore incidunt eum
        adipisci vel porro <br /><br />harum corrupti quas tenetur hic, earum consequatur
        ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        aperiam tempore numquam cupiditate hic eaque adipisci facere sit
        ratione, id itaque saepe reprehenderit. Commodi soluta reiciendis vel
        cum magnam quae facilis consectetur. Praesentium architecto earum,
        inventore facilis quia harum accusantium quibusdam, minima repellat ex
        doloremque ratione veniam impedit. Nam excepturi doloremque eveniet
        veniam beatae quis dolore nostrum exercitationem voluptatem explicabo
        maxime laudantium ducimus eos illum nihil distinctio nesciunt libero
        quasi necessitatibus odio eligendi, magnam similique accusantium.
        Voluptatum at eaque dolorum illum error perferendis hic maxime odit?
        Exercitationem, adipisci illum sequi dignissimos laborum rerum in minus
        doloribus repellendus eveniet quaerat qui consequuntur non est aliquid
        magnam, vitae facere ut nesciunt? Expedita eaque minima, facilis
        officiis aspernatur aliquam voluptatem iste sapiente rerum dolor sit
        ullam dolorem ea sunt harum qui quod quo maiores asperiores quae quasi
        necessitatibus! <br /><br />Earum est placeat quam. Rem itaque quis, ut maiores
        repudiandae quidem ipsam similique commodi, iure doloremque error rerum
        asperiores consequatur voluptatum in magnam. Eveniet ex ipsum ab ullam
        consectetur consequatur provident commodi architecto porro delectus, qui
        error impedit! Repellendus, adipisci! Blanditiis eaque laudantium
        voluptates, facilis deserunt voluptate neque similique veniam officiis,
        nesciunt hic odio, culpa esse deleniti expedita architecto quae
        perspiciatis. Vel similique et sapiente?
      </p>
      <div className=" flex justify-center">
        <video className=" w-[150px] " ref={videoRef} muted loop>
          <source src="test_video.mp4" type="video/mp4" />
        </video>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        aperiam tempore numquam cupiditate hic eaque adipisci facere sit
        ratione, id itaque saepe reprehenderit. Commodi soluta reiciendis vel
        cum magnam quae facilis consectetur. Praesentium architecto earum,
        inventore facilis quia harum accusantium quibusdam, minima repellat ex
        doloremque ratione veniam impedit. Nam excepturi doloremque eveniet
        veniam beatae quis dolore nostrum exercitationem voluptatem explicabo
        maxime laudantium ducimus eos illum nihil distinctio nesciunt libero
        quasi necessitatibus odio eligendi, magnam similique accusantium.
        Voluptatum at eaque dolorum illum error perferendis hic maxime odit?
        Exercitationem, adipisci illum sequi dignissimos laborum rerum in minus
        doloribus repellendus eveniet quaerat qui consequuntur non est aliquid
        magnam, vitae facere ut nesciunt? Expedita eaque minima, facilis
        officiis aspernatur aliquam voluptatem iste sapiente rerum dolor sit
        ullam dolorem ea sunt harum qui quod quo maiores asperiores quae quasi
        necessitatibus! Earum est placeat quam. Rem itaque quis, ut maiores
        repudiandae quidem ipsam similique commodi, iure doloremque error rerum
        asperiores consequatur voluptatum in magnam. Eveniet ex ipsum ab ullam
        consectetur consequatur provident commodi architecto porro delectus, qui
        error impedit! Repellendus, adipisci! Blanditiis eaque laudantium
        voluptates, facilis deserunt voluptate neque similique veniam officiis,
        nesciunt hic odio, culpa esse deleniti expedita architecto quae
        perspiciatis. Vel similique et sapiente?
      </p>
    </>
  );
}

export default App
