class DataHelper {

    constructor() {
        throw new Error("Essa classe não pode ser instanciada.");
    }
    
     static textoParaData(texto) {
         if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) //expressao regular
              throw new Error ("O formato da data deve ser yyyy-MM-dd");
          
        return new Date(...
                 texto
                .split('-')
                .map((item, indice) => item - (indice % 2)));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
        // ´  ´ crase é do SpringTemplate, fazendo uma mascara para String que será criada
    }
    
}