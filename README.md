# Web Móvil con Open Library API

## Descripción
Una aplicación web móvil que utiliza la Open Library API para listar y mostrar información detallada sobre libros.

## Estructura


## Características
- Lista interactiva con datos de la Open Library API.
- Busqueda por ISBN y por nombre completo o incompleto.
- Página de detalles con información ampliada, que funciona incorrectamente ya que no muestra las portadas de los libros.

## Cómo usar
1. Clona este repositorio.
2. Abre `index.html` en tu navegador.
3. Busca un libro o autor y haz clic en un resultado para ver los detalles.

## Créditos
- Developer: Álvaro Campos Bolufer
- API utilizada: [Open Library API](https://openlibrary.org/developers/api)

## Reflexiones
1. ¿Por qué elegiste esa API?

   Era la unica gratuita para hacer librerias, la usan en la libreria nacional de australia (https://trove.nla.gov.au/), tenia funcionalidades útiles aunque dificiles de implementar sin experiencia previa.
   
   La API mayor documentada, con mas tutoriales e información que la hace accesible es PokeAPI, pero como ya se dijo que no habría que repetir todo el mundo API ni concepto de página pues nada, me tuve que buscar otra.
   
    Llevaba buscando una API ya como semana y media, y de entre todas estas opciones ninguna era buena, así que me quedé con la de la libreria:
    - https://slimbook.com/shopby_category No valía.
    - https://cults3d.com/en/categories/game Lo mismo, que no vale.
    - https://printedwargames.com/ Tampoco era buena.
    - https://bindingofisaacrebirth.fandom.com/wiki/Binding_of_Isaac:_Rebirth_Wiki Mas de lo mismo.
    - https://bindingofisaac.fandom.com/wiki/The_Binding_of_Isaac_Wiki La han cambiado hace poco pero antes lo mismo, que nada.
    - https://monsterhunter.fandom.com/wiki/Monster_Hunter:_World Y aquí un poc mas de la misma historia
      
    

3. ¿Qué problemas tuviste y cómo los solucionaste?
   
    Que nadie me explico ni como hacer un pading, menos hablar de hacer una página reactive o usar .jso .json y ya es de otro mundo el uso de las propias API.
    Hay tutoriales de como usar las APIs de Open Library API: https://www.youtube.com/watch?v=reN_okp2Gq4&list=PLsrvTVF9yo_gY9PzisHfiyxdD9qDHBQyc&ab_channel=MekKarpeles
    Aun así es todo cuesta arriba si se tiene que hacer de forma autodidacta, mientras se estudia el resto de modulos.

5. Ponte una nota del 1 al 10, explica por qué te la pones y qué crees que podrías mejorar.
   
    Cualquier persona que haya pasado por esto sin tener ni idea de como se hace una página web reactive sea con grid o flexbox, que no haya usado antes .js/.json y que en dos semanas haya tenido que descubir que es una API, que API usar, y como manejar minimamente la API sin una sola clase de teória se merece un 12 sobre 10.
