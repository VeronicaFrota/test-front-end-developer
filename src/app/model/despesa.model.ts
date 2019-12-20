import { Data } from '@angular/router'

export class Despesa {
    dados: [
        {
            ano: number
            mes: number
            tipoDespesa: string
            codDocumento: number
            tipoDocumento: string
            codTipoDocumento: number
            dataDocumento: Data
            numDocumento: string
            valorDocumento: number
            urlDocumento: string
            nomeFornecedor: string
            cnpjCpfFornecedor: string
            valorLiquido: number
            valorGlosa: number
            numRessarcimento: number
            codLote: number
            parcela: number
        }
    ]
}

