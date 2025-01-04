// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import './book.css'

// function Book() {

//   return (
//     <div>
//          <div class="capa-transparente">
//     <div class="contenedor">

//             <section class="noticias">
//                 <article class="articulo">
//                     <h1 class="articulo__categoria" style={{color:"blue"}}>Mural</h1>
//                     <div class="articulo__cabecera" id="cubierta">
//                         <img src="https://images.unsplash.com/photo-1485178075098-49f78b4b43b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="medusa en el mar" class="articulo__imagen"/>
//                     </div>
//                     <div class="contenido">
//                         <time class="contenido__fecha">Enero 7 2020</time>
//                         <h2 class="contenido__titulo" style={{fontSize:"20px"}}>3+ years of architectural experience preferably within the hiring firm's field.</h2>
//                         <Link to="/book-now/1" className='btn btn-primary'>Book Now 1</Link>
//                         {/* <button  className="btn btn-primary" > Book Now </button> */}

//                     </div>
//                 </article>


//                 <article class="articulo">
//                     <h1 class="articulo__categoria"style={{color:"blue"}}>Markleo</h1>
//                     <div class="articulo__cabecera">
//                         <img src="https://images.unsplash.com/photo-1485178075098-49f78b4b43b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="halcon" class="articulo__imagen"/>
//                     </div>
//                     <div class="contenido">
//                         <time class="contenido__fecha">Marzo 12 2020</time>
//                         <h2 class="contenido__titulo"style={{fontSize:"20px"}}>13+ years of architectural experience preferably within the hiring firm's field.</h2>
//                         {/* <button className="btn btn-primary" > Book Now </button> */}
//                         <Link to="/book-now/2" className='btn btn-primary'>Book Now</Link>
//                     </div>
//                 </article>

//                 <article class="articulo">
//                     <h1 class="articulo__categoria" style={{color:"blue"}}>Karthick</h1>
//                     <div class="articulo__cabecera">
//                         <img src="https://images.unsplash.com/photo-1485178075098-49f78b4b43b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="insecto" class="articulo__imagen"/>
//                     </div>
//                     <div class="contenido">
//                         <time class="contenido__fecha">Julio 11 2020</time>
//                         <h2 class="contenido__titulo"style={{fontSize:"20px"}}>2+ years of architectural experience preferably within the hiring firm's field..</h2>
//                         {/* <button className="btn btn-primary" > Book Now </button> */}
//                         <Link to="/book-now/3" className='btn btn-primary'>Book Now</Link>
//                     </div>
//                 </article>
//                 <article class="articulo">
//                     <h1 class="articulo__categoria"style={{color:"blue"}}>Raina</h1>
//                     <div class="articulo__cabecera">
//                         <img src="https://images.unsplash.com/photo-1485178075098-49f78b4b43b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt=" naturalezar" class="articulo__imagen"/>
//                     </div>

//                     <div class="contenido">
//                         <time class="contenido__fecha">Octubre 24 2020</time>
//                         <h2 class="contenido__titulo"style={{fontSize:"20px"}}>8+ years of architectural experience preferably within the hiring firm's field.</h2>
//                         {/* <button className="btn btn-primary" > Book Now </button> */}
//                         <Link to="/book-now/4" className='btn btn-primary'>Book Now</Link>
//                     </div>
//                 </article>

//                 <article class="articulo">
//                     <h1 class="articulo__categoria"style={{color:"blue"}}>Velu</h1>
//                     <div class="articulo__cabecera">
//                         <img src="https://images.unsplash.com/photo-1485178075098-49f78b4b43b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"  alt="tigre acechando" class="articulo__imagen"/>
//                     </div>
//                     <div class="contenido">
//                         <time class="contenido__fecha">Noviembre 23 2020</time>
//                         <h2 class="contenido__titulo"style={{fontSize:"20px"}}>1+ years of architectural experience preferably within the hiring firm's field.</h2>
//                         {/* <button className="btn btn-primary" > Book Now </button> */}
//                         <Link to="/book-now/5" className='btn btn-primary'>Book Now</Link>
//                     </div>
//                 </article>

//                 <article class="articulo">
//                     <h1 class="articulo__categoria"style={{color:"blue"}}>Kavin</h1>
//                     <div class="articulo__cabecera">
//                         <img src="https://images.unsplash.com/photo-1485178075098-49f78b4b43b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"  alt="tigre acechando" class="articulo__imagen" />
//                     </div>
//                     <div class="contenido">
//                         <time class="contenido__fecha">Abril 5 2020</time>
//                         <h2 class="contenido__titulo"style={{fontSize:"20px"}}>6+ years of architectural experience preferably within the hiring firm's field.</h2>
//                         {/* <button className="btn btn-primary" > Book Now </button> */}
//                         <Link to="/book-now/6" className='btn btn-primary'>Book Now</Link>
//                     </div>
//                 </article>
//             </section>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Book;