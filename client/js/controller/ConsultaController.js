class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
        }

    adiciona(event) {
        evento.preventDefault();
     let consulta = new Consulta (
       this._inputNome.value,
       new Date (this._inputData.value.split('-')),
       this._inputPeso.value,
       this._inputAltura.value
        );

     console.log (this._inputData.value);
     console.log (consulta);

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
