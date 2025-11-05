const btn_ig = document.getElementById("btn-ig")
btn_ig.addEventListener("click", function(event){
    event.preventDefault();

    const bloco = document.createElement("section");
    bloco.classList.add("redes-container");

    bloco.innerHTML=`
        <div class="redes-container" id="container">
        <h2>Conecte-se com a gente</h2>
        <h3>Instagram</a></h3>
            <div class="redes-links">
            <p><u><a href="https://www.instagram.com/kobiceee" target="_blank">Hendrik<i class="fa-brands fa-instagram"></i></a></u></p>
            <p><u><a href="https://www.instagram.com/theedumarins" target="_blank">Taua<i class="fa-brands fa-instagram"></i></a></u></p>
            <p><u><a href="" target="_blank">Andrey<i class="fa-brands fa-instagram"></i></a></u></p>
            <p><u><a href="" target="_blank">Fabio<i class="fa-brands fa-instagram"></i></a></u></p>
            <p><u><a href="" target="_blank">Felipe<i class="fa-brands fa-instagram"></i></a></u></p>
            </div>
        </div>  
    `
    const destino = document.querySelector(".inserir_redes");

    destino.innerHTML="";
    
    destino.appendChild(bloco);

    document.querySelector(".inserir_redes").scrollIntoView({behavior: "smooth"});

})

const btn_in = document.getElementById("btn-in")
btn_in.addEventListener("click", function(event){
    event.preventDefault();

    const bloco = document.createElement("section");
    bloco.classList.add("redes-container");

    bloco.innerHTML=`
        <div class="redes-container" id="container">
        <h2>Conecte-se com a gente</h2>
        <h3>Linked<i class="fa-brands fa-linkedin"></i></a></h3>
            <div class="redes-links">
            <p><u><a href="https://www.linkedin.com/in/hendrik-bernardes-obice-2913842bb" target="_blank">Hendrik<i class="fa-brands fa-linkedin"></i></a></u></p>
            <p><u><a href="" target="_blank">Taua<i class="fa-brands fa-linkedin"></i></a></u></p>
            <p><u><a href="https://www.linkedin.com/in/andrey-alves-paz-2b9ab9394?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">Andrey<i class="fa-brands fa-linkedin"></i></a></u></p>
            <p><u><a href="" target="_blank">Fabio<i class="fa-brands fa-linkedin"></i></a></u></p>
            <p><u><a href="" target="_blank">Felipe<i class="fa-brands fa-linkedin"></i></a></u></p>
            </div>
        </div>  
    `
    const destino = document.querySelector(".inserir_redes");

    destino.innerHTML="";
    
    destino.appendChild(bloco);

    document.querySelector(".inserir_redes").scrollIntoView({behavior: "smooth"});

})

const btn_git = document.getElementById("btn-git")
btn_git.addEventListener("click", function(event){
    event.preventDefault();

    const bloco = document.createElement("section");
    bloco.classList.add("redes-container");

    bloco.innerHTML=`
        <div class="redes-container" id="container">
        <h2>Conecte-se com a gente</h2>
        <h3>GitHub</a></h3>
            <div class="redes-links">
            <p><u><a href="https://github.com/Kobiceee" target="_blank">Hendrik<i class="fa-brands fa-github"></i></a></u></p>
            <p><u><a href="https://github.com/cigar143" target="_blank">Taua<i class="fa-brands fa-github"></i></a></u></p>
            <p><u><a href="https://github.com/andreyalvess" target="_blank">Andrey<i class="fa-brands fa-github"></i></a></u></p>
            <p><u><a href="" target="_blank">Fabio<i class="fa-brands fa-github"></i></a></u></p>
            <p><u><a href="https://github.com/felipediasss" target="_blank">Felipe<i class="fa-brands fa-github"></i></a></u></p>
            </div>
        </div>  
    `
    const destino = document.querySelector(".inserir_redes");

    destino.innerHTML="";
    
    destino.appendChild(bloco);

    document.querySelector(".inserir_redes").scrollIntoView({behavior: "smooth"});


})



