window.addEventListener('load', crearEstructura);

function crearEstructura(){

       var datos = [
        {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
        ];        

    var div = document.createElement('div');
    div.setAttribute('id', 'todos-los-viajes');

    var sub = document.createElement('h1');
    var txt = document.createTextNode('Subtituloo');

    sub.appendChild(txt);
    div.appendChild(sub);

    var ul = document.createElement('ul');
    div.appendChild(ul);

    for (let i = 0; i < datos.length; i++) {
        
        var li = document.createElement('li');

        var img = document.createElement('img');
        img.setAttribute('src', datos[i][src]);
        li.appendChild(img);

        ul.appendChild(li);

    }

    

    

    div.appendChild(ul);

    
    document.body.appendChild(div);
}