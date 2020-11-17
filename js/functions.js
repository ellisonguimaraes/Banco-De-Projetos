window.onload = function(){
        
    //Check File API support
    if(window.File && window.FileList && window.FileReader)
    {
        var filesInput = document.getElementById("files");
        
        filesInput.addEventListener("change", function(event){
            
            var files = event.target.files; //FileList object
            var output = document.getElementById("result");
            
            for(var i = 0; i< files.length; i++)
            {
                var file = files[i];
                
                //Only pics
                if(!file.type.match('image'))
                  continue;
                
                var picReader = new FileReader();
                
                picReader.addEventListener("load",function(event){
                    
                    var picFile = event.target;
                    
                    var div = document.createElement("div");
                    
                    div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
                            "title='" + picFile.name + "'/>";
                    
                    output.insertBefore(div,null);            
                
                });
                
                 //Read the image
                picReader.readAsDataURL(file);
            }                               
           
        });
    }
    else
    {
        console.log("Your browser does not support File API");
    }
}

function add_integrante(tipo){
    html = `<select class="form-control">
    <option value="" selected disabled hidden>Nome do ${tipo}</option>
    <option value="Leonardo Lima">Leonardo Lima</option>
    <option value="Valdir Verde">Valdir Verde</option>
    <option value="Tiago Santiago">Tiago Santiago</option>
    <option value="Maria Maricena">Maria Maricena</option>
    <option value="Marcos Mariatti">Marcos Mariatti</option>
    </select>`
    document.querySelector("#select_" + tipo).insertAdjacentHTML('beforeend', html);

}

function add_tag(){
    var tag = document.querySelector('#tags');
    if (tag){
        var nova_tag =  document.createElement("button");
        nova_tag.type="button";
        nova_tag.className ="btn btn-outline-warning tag_button";
        nova_tag.innerHTML = tag.value;
        document.querySelector('div.tag_output').appendChild(nova_tag);
        tag.value = "";
    }
}
    