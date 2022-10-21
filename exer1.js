const caixa1 =document.querySelector("#caixa1")
const caixa2 =document.querySelector("#caixa2")
const botao =document.querySelector("#btn_copiar")
const todoscurso = [...document.querySelectorAll(".curso")]

todoscurso.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.toggle("selecionado")
    })
})
btn_transferir.addEventListener("click",()=>{
   const cursoselecionados=[...document.querySelectorAll(".selecionado")]
   const cursosnaoselecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
   
    cursoselecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosnaoselecionados.map((el)=>{
        caixa1.appendChild(el)
    })
 })

