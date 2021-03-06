class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
        this._listaConsulta = new ListaConsultas();
        this._consulta
        }

    adiciona(evento) {
        evento.preventDefault();
     let consulta = this._criaConsulta();
     this._listaConsulta.adiciona(consulta);
     this._limpaFormulario();

     //console.log (this._inputData.value);
     //console.log (consulta);
    }

    _criaConsulta() {
        return new Consulta(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputPeso.value,
            this._inputAltura.value
        );
    }

    _limpaFormulario() {
        this._inputNome.value = "";
        this._inputData.value = "";
        this._inputPeso.value = "";
        this._inputAltura.value = "";

        this._inputNome.focus();
    }
}
