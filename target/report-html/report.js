$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/alugarFilme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Alugar Filme",
  "description": "Como um usuário\r\nEu quero cadastrar alugueis de filmes\r\nPara controlar preços e datas de entrega",
  "id": "alugar-filme",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@esse"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 10,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 11
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 12
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 13
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "o preço do aluguel será R 3",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AluguarFilmeSteps.umFilme(DataTable)"
});
formatter.result({
  "duration": 451023000,
  "status": "passed"
});
formatter.match({
  "location": "AluguarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 12191600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AluguarFilmeSteps.oPreçoDoAluguelSeráR(int)"
});
formatter.result({
  "duration": 1569800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AluguarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 2880300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AluguarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 316900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 20,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 23,
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AluguarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 319900,
  "status": "passed"
});
formatter.match({
  "location": "AluguarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 59200,
  "status": "passed"
});
formatter.match({
  "location": "AluguarFilmeSteps.nãoSeráPossívelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 245500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AluguarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 63800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 27,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "que o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "o preço do aluguel será R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 32,
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "a pontuação será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 36,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 37,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 38,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ],
      "line": 39,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;4"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 40,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 37,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@esse"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "o preço do aluguel será R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 32,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "a pontuação será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AluguarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 158200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AluguarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 81600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AluguarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 125900,
  "status": "passed"
});
formatter.match({
  "location": "AluguarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 67800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AluguarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 116500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AluguarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 381500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AluguarFilmeSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "duration": 112400,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@esse"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "que o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "o preço do aluguel será R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 32,
  "name": "a data de entrega será em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "a pontuação será de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AluguarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 111700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AluguarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 74900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AluguarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 55100,
  "status": "passed"
});
formatter.match({
  "location": "AluguarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 72600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AluguarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 103500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AluguarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 291100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "AluguarFilmeSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "duration": 107500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@esse"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "que o preço do aluguel seja R$ 10",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "o preço do aluguel será R$ 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 32,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "a pontuação será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AluguarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 297000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "AluguarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 652200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AluguarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 81000,
  "status": "passed"
});
formatter.match({
  "location": "AluguarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 82200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    }
  ],
  "location": "AluguarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 90300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AluguarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 340100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AluguarFilmeSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "duration": 76100,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@esse"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "que o preço do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "que o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "o preço do aluguel será R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 32,
  "name": "a data de entrega será em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "a pontuação será de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AluguarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 116000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AluguarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 65900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AluguarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 122600,
  "status": "passed"
});
formatter.match({
  "location": "AluguarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 78200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 27
    }
  ],
  "location": "AluguarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 100600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AluguarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 355000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "AluguarFilmeSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "duration": 108600,
  "status": "passed"
});
});