//https://jsonplaceholder.typicode.com/posts

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        alert(`Tilulo do primeiro poste: ${data[0].title}`);
    })

    .catch((error)=>{
        alert('Deu pau na Requisição');
    })
}

function inserir(){
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Novo post',
            body: 'Corpo de teste',
            userId: 2
        })
    }
    )
    .then((response)=>{
        return response.json();
    })
    .then((json)=>{
        console.log(json);
    })
}


document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir)

