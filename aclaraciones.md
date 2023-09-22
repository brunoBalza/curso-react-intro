[CLASE 2] QUE ES UN COMPONENTE ?

    Primero que nada, es necesario saber que si en el archivo .js de la aplicacion nos encontramos con una funcion en la cual le han puesto un nombre con la primera letra en mayuscula (App), esto significa que esa funcion, es un COMPONENTE DE REACT

        esto es asi por la convencion

        en este caso, vemos que dentro de este componente que esta dentro del archivo (App.js) hay codigo de html, q es el que se va a insertar en el index.html

    lo que esta dentro de la funcion, no es el componente, es componente es TODO, lo q esta dentro que suele ser un "return", es justamente lo q este retorna

    lo esta dentro no es HTML, se llama JSX se denomina de esta manera, para saber q estamos escribiendo html pero dentro js

    las etiquetas estan en minusculas, esto las convierte en elementos de react

    dentro de los componentes podemos llamar otros componentes, q hemos armado por fuera, entiendo q es la forma correcta

        no olvidarse donde ubicar el nuevo componente, es necesario q entre dentro de una etique o elemento, porq sino no se va a vizualizar

        y obviamente estos siempre van a recibir propiedades

        y los elementos son encapsulados por los componentes

    EXISTE UN METODO .reder QUE NOS PERMITE ENVIAR NUESTRO JSX Y DE ESTA MANERA MOSTRARLO EN EL index.html

    PROPS: es lo que vamos a enviar, para que la informacion que nos va a devolver la app sea dinamica, sea en referencia a la info q nosotros le estamos brindando

        y estas las enviamos de la misma manera, pero a la vez tenemos q llamar a los props con la info deseada con el llamado a es info

[CLASE 3] COMPONENTES DE A LA APP

    vamos a crear dentro del componene "App" vamos llamar dentro estos componentes

        la lista que en la que nos salen los ToDo, va a ser otro componente que dentro de este si vamos a llamar a los items en particular

        como sabemos los llamados a los componentes dentro de otro se hace con los picoparentesis q se cierran solos, pero cuando vamos a querer encapsular otros para q pertenezcan a uno, no lo cerramos en una sola etiqueta, sino q armamos un cierre normal, o sea 2 

    TIPS DEL PROFE

        crea la estructura de todos los componentes, para entender mejor que es lo que tiene q hacer, para despues ir uno por uno

    Podriamos crear en el mismo codigo o archivos de App.js todos los componentes, pero lo que vamos a hacer es crear nuevos archivos para cada uno de los componentes y lo vamos a exportar pero no por defecto

    COMO EXPORTAMOS PERO NO POR DEFECTO

        vamos a hacer los "export nombrados", esto significa que vamos a poner el nombre de la funcion en un objeto "export { TodoCounter };" 
            dentro de este objeto vamos a poner el componente particular que quiero exportar

    AHORA QUE PASA CON LOS COMPONENTE QUE TIENEN OTRO POR DENTRO, COMO LLAMAMOS ESTOS (TodoList tiene dentro TodoItem)

        en componente de TodoList va a recibir como parametro un props
        y dentro del cuerpo en nuestro elemento, en este caso va a ser un "<ul>" vamos a crear una objeto q va a ser {props.children}
        de esta forma se va a renderizar lo q llamemos por dentro en el App.js, en la principal}}

[CLASE 4] COMUNICACION DE COMPONENTES

    Esta comunicacion se produce atravez de los "props" hace que la informacion que manejan los componentes sea dinamica, o sea que esa info la van a ir armando los usuarios

    estos se pasan como parametros dentro del componente que vamos a modificar

    SE LES LLAMA PROPS Y NO PARAMETROS, POR MAS QUE SE PASEN EN LA FX COMO PARAMETROS

        Estas props SON OBJETOS que por dentro tienen distintas propiedades

    estas props las podemos recibir en el cuerpo del componente como "props.nombreQueQueramos"
    o tambien podemos destructurar esa prop dentro del parametros y escribirlas cada una donde de un objeto "{total, completed, children}"

    al profe le gusta mas definir las propiedades en los parametros, asi despues no es necesario escribirlas en el cuerpo

        en este caso el componente "TodoCouter" va a recibir 2, "total" y "completed" 
        y estas las tenemos que pasar tambien como objetos dentro del texto o la data que lleve el componentes, en este caso, van a ser la cantidad de tareas realizadas sobre la cantidad de tareas totales

        y esta info a la vez tiene q ser recibida dentro del App.js o sea, componente pricipal q va a ser enviado al usuario

        <TodoCounter total={8] completed={10]/>

    PROPIEDAD CHILDREN: ES ESPECIAL: React automaticamente transforma todo lo que este dentro de nuestro componente en la propiedad children

        es decir que todo lo que este dentro de la etiqueta de apertura y la etiqueta de cierra, todo eso React lo transforma en la propiedad children

            esto quiere decir que si sacamos "props.children" y solo pasamos {children} como parametros y como data, va a funcionar de la misma manera

    Como vemos todos los componentes esta dentro de un DIV q se llama "App", esto es porq react no puedo renderizar varios elementos dentro de 1 return, pero de esta menera vamos a tener 2 div con la misma funcion, uno "root" q es el de html y otro el del JS q es donde estamos llamando a los componentes

        SOLUCION: para esto React a diseñado "<React.fragment> ... <React.fragment/>" q es el elemento que este necesita para que renderice este, y dentro podamos ubicar todos los elementos que queramos, y lo mas interesante es q este elemento no se ve en el HTML, o sea, que solo nos va a aparecer el div "root"
        y de esta manera no afecta a la estructura de la aplicacion

    OTRA FORMA DE RENDERIZAR VARIOS ELEMENTOS

        RENDERIZAR ARRAYS 

            Creamos una const q dentro de esta va a tener un array en que vamos a crear distintos objetos q van a representar la informacion de nuestros ToDos 

                const defaultTodos = [
                    {text: 'cortar cebolla', completed: true}
                    {text: 'cortar cebolla', completed: true}
                ]

            como React nos permite renderizar arrays, dentro de cada array, podemos renderizar elementos, o pasar componentes completos

            ahora vamos a usar el metodo map, cuando creemos el array dentro del componente en el que vamos a insertar los elementos, con este metodo .map crear un array apartir del array inicial

                dentro de este map, vamos a recibir un distinto TODO por cada objeto, elemento, dentro del array

                dentro de esta funcion q vamos a crear en .map, q es una iteracion de elementos, vamos a devolver un nuevo <todoItem />
    
                y por cada elemento que mandemos dentro del array este tiene que tener una propiedad "key" que sea distinta, ejemplo 1, 2, 3, etc
                SI O SI TRABAJAR CON KEY

        Otro elemento que tambien es distinto es el texto q va a tener cada TODO, con la funcion que vamnos a armar en .map, seleccionamos el valor de text, para llevarlo al archivo de TodoItem y desde ahi trabajar con este valor en "props.text" de esta menera podemos traernos cada uno de los items q tengamos

[CLASE 5] CSS en React

    Hay 2 formas de hacerlo, 

        a) en Linea
        b) hojas de estilo, q son los archivos q podemos importar desde nuestro css

    EN LINEA

        esto lo hacemos sobre la etiqueta que queremos darle estilo, agregando la propiedad style={{}} (CON DOBLE LLAVE)
        o sea, q los estilos en JSX se pasan dentro de un array

        de esta menera debemos armar una const que sea un objeto y que dentro de este, esten las propiedades CSS y sus valores, y enviar el nombre de la variable dentro de las llaves, ESTO NO SE HACE ASI,

        COMO DIJIMOS QUE LLEVA DOBLE LLAVES, ES PORQ SE ARMAA DIRECTAMENTE EL OBJETO (CON LLAVES) EN DONDE SE LLAMA AL OBJETO (LLAVES DE LA PROPIEDAD)

            <h1 style={{ 
                backgroundColor: 'grey'
            }}>

            IMPORTANTE EN JSX LAS PROPIEDADES SE HACEN CON LA NOMENCLARUTA DE CAMEL CASE 

                CSS SIMPLE: background-color: FFF000 
                JSX : backgroundColor: FFF000

    b) CSS

        entiendo que esta es la menera mas sencilla de hacerlo, porque trabajamos con CSS comun y corriente, sin necesidad de traducir todo a JSX
        luego importamos el archivo a donde lo necesitamos y listo

        lo importamos con comillitas simples y nada mas, anda de objeto ni from