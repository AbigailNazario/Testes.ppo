var menuI = document.querySelectorAll('.item-menu')

//Essa função remove a classe ativo do item que não foi clicado e adiciona no item que foi clicado
function selectLink(){
    menuI.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

//Para que o sistema sempre "escute" quando o usuário clicar em um item (mudando a cor)

menuI.forEach((item)=>
    item.addEventListener('click', selectLink)
)