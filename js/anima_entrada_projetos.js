 const myObserver = new IntersectionObserver((entries) => 
 {
    entries.forEach((entry) => 
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show')
        }
        else
        {
            entry.target.classList.remove('show')
        }
    })
 },
 {
    threshold:[.3]
 })

 const elements = document.querySelectorAll('.hidden') //Procura todos os elementos que possui a classe hidden e armazena na variavel "elements" como se fosse um array

 //Aqui, o forEach vai percorrer por todos os elementos da lista e vai observar cada um
 elements.forEach((element) => 
 {
    myObserver.observe(element) //Durante a observação, chama a váriavel myObserver que recebe o objeto
 })