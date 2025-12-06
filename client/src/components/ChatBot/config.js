import { createChatBotMessage } from "react-chatbot-kit";
import React, { useState, useRef, useEffect} from "react";

const config = {
  botName: "TEsMI",
  initialMessages: [
    createChatBotMessage(
      "¡Hola! Soy TEsMI, un bot que está aquí para ayudarte. ¿En qué puedo ayudarte?",
      { widget: "options" }
    ),
  ],

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

const Options = (props) => {

  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [messages, setMessages] = useState([]);
  const messageRefs = useRef([]);

  useEffect(() => {
    // Nos aseguramos de que estamos accediendo al último mensaje de la lista
    const lastIndex = 0; // Debería ser messages.length - 1
    const lastRef = messageRefs.current[lastIndex];
    
    if (lastRef) {
      // Desplazamos hacia el último mensaje
      lastRef.scrollIntoView({ 
        behavior: 'smooth', // Puedes usar 'auto' si prefieres sin animación
        block: 'start',
      });
    }
  }, [messages]);
  
  
  const options = [
    {
      id: 1,
      text: "¿Cómo realizar un protocolo de investigación?",
      subText: "Un protocolo de investigación se realiza siguiendo estos pasos:",
      details: [
        "Título del proyecto: Definir un nombre claro y preciso.",
        "Resumen: Breve descripción del estudio (objetivo, métodos y resultados esperados).",
        "Justificación: Explicar la importancia y relevancia de la investigación.",

        "Objetivos: Especificar los objetivos generales y específicos de la investigación.",
        "Marco teórico: Presentar el contexto, teorías y antecedentes relevantes.",
        "Hipótesis: Si aplica, plantear una hipótesis que guíe la investigación.",
        "Metodología: Detallar el diseño de investigación, población, muestra, técnicas y herramientas de recolección de datos.",
        "Cronograma: Establecer un calendario de actividades y plazos.",
        "Recursos: Especificar los recursos necesarios (financieros, humanos, materiales).",
        "Plan de análisis de datos: Explicar cómo se procesarán los datos obtenidos.",
        "Referencias: Incluir las fuentes bibliográficas consultadas.",
      ],
      textEnd: "Todo debe estar bien estructurado para garantizar claridad y viabilidad en la investigación.",
      subtextEnd: "¡Si requieres mayor informacion o que un experto te ayude en la elaboracion de tu proyecto de investigacion, ponte en contacto con nosotros!"
    },
    {
      id: 2,
      text: "¿Cómo citar en APA?",
      subText: "Para citar en formato APA 7, debes seguir estas pautas básicas dependiendo del tipo de fuente. Aquí te dejo algunos ejemplos comunes:",
      titleFormate: "Formato",
      titleExample: "Ejemplo",

      title1: "1. Libro:",
      text1: "Apellido, Inicial del nombre. (Año). Título del libro en cursiva. Editorial.",
      exampleText1: "García, M. (2019). Introducción a la psicología. Editorial PsicoPress.",


      title2: "2. Artículo de revista:",
      text2: "Apellido, Inicial del nombre. (Año). Título del artículo. Nombre de la revista en cursiva, volumen(número), páginas.",
      exampleText2: "Pérez, L. (2020). La influencia del estrés en el rendimiento académico. Revista de Psicología Educativa, 35(2), 45-59",

      title3: "3. Página web:",
      text3: "Apellido, Inicial del nombre. (Año, mes, día). Título del artículo o página. Nombre del sitio web. URL",
      exampleText3: "López, J. (2021, enero 15). Cómo mejorar tu productividad. Productividad Total. ",

      title4: "4. Capítulo de un libro editado:",
      text4: "Apellido, Inicial del nombre. (Año). Título del capítulo. En Inicial del nombre. Apellido (Ed.), Título del libro en cursiva (pp. páginas del capítulo). Editorial.",
      exampleText4: "Ramírez, C. (2018). La neurociencia del aprendizaje. En P. Sánchez (Ed.), Innovaciones en educación (pp. 123-145). Editorial Académica.",

      title5: "5. Trabajo académico o tesis:",
      text5: "Apellido, Inicial del nombre. (Año). Título de la tesis (Tesis de maestría o doctorado). Nombre de la institución. URL (si es accesible en línea)",
      exampleText5: "González, F. (2020). Estudio sobre la motivación en estudiantes universitarios (Tesis de maestría). Universidad Nacional de Psicología. ",
      textEnd: "Recuerda que en APA 7, el título de libros, revistas y reportes se escribe en cursiva, y se deben usar sangrías en las referencias.",
      subtextEnd: "¡Si requieres mayor información o que un experto te yude en como citar en APA7, ponte en contacto con nosotros!",

    },
    {
      id: 3,
      text: "¿Cómo empezar mi marco teórico?",
      subText: "Para empezar tu marco teórico, puedes seguir estos pasos:",

      title1: "1. Introducción al tema:",
      text1: "Comienza presentando el tema de tu investigación de manera general, definiendo conceptos clave y explicando su relevancia.",

      title2: "2. Revisión de antecedentes:",
      text2: "A continuación, realiza un recorrido por las investigaciones previas relacionadas con tu tema. Resalta los estudios más importantes, sus resultados y cómo han abordado el tema.",
      title3: "3. Teorías y enfoques clave:",
      text3: "Incorpora las teorías que sustentan tu investigación. Explica las teorías principales relacionadas con tu tema y cómo estas se aplican a tu estudio. ",

      title4: "4. Identificación de vacíos o áreas de investigación:",
      text4: "Finaliza tu introducción al marco teórico señalando posibles vacíos o áreas que no han sido suficientemente investigadas y que tu estudio podría abordar. ",

      textEnd: "Este enfoque te ayudará a construir una base sólida para tu marco teórico y a dar contexto a tu investigación.",
      subtextEnd: "¡Si requieres mayor información o que un experto te ayude en la elaboración tu marco teorico, ponte en contacto con nosotros!",

      details: [
        "Paso 1: Identifica teorías clave.",
        "Paso 2: Busca investigaciones previas.",
        "Paso 3: Relaciona con tu estudio.",
      ],
    },


    {
      id: 4,
      text: "¿Tengo que citar toda la información?",
      subText: "Sí, debes citar toda la información que provenga de fuentes externas, ya sea que la uses de forma directa (como una cita textual) o parafraseada. Esto incluye investigaciones previas, teorías, datos, y cualquier contenido que no sea tu propio análisis o interpretación. La cita adecuada le da crédito a los autores originales y evita el plagio.",
      treeText: "¡Si requieres mayor información o que un experto te ayude en como citar la información, ponte en contacto con nosotros!."


    },

    {
      id: 5,
      text: "¿Cómo iniciar con mi tesis?",
      subText: "Iniciar tu tesis puede ser un desafío, pero tener una estructura clara te ayudará a avanzar con confianza. Aquí te dejo algunos pasos para comenzar:",

      details: [
        "Definir el tema ",
        "Elaborar una pregunta de investigación",
        "Realizar una revisión preliminar de la literatura",
        "Escribir tus prepuestas (si es necesario)",
        "Desarrollar un esquema o índice",
        "Comienza con la introducción",
        "Redacta y ajusta a medica que avanzas",
        "Planitifica tu tiempo",

      ],
      textEnd: "Recuerda que lo más importante es comenzar, aunque sea con una primera versión borrador. A medida que avances, te sentirás más cómodo con el proceso. ¡Ánimo con tu tesis!.",
      subtextEnd: "¡Si requieres mayor información o que un experto te ayude en la elaboración de tu tesis, ponte en contacto con nosotros!.",

    },

    {
      id: 6,
      text: "¿Cómo ordenar mis tiempos para desarrollar un proyecto académico?",
      subText: "Para desarrollar un proyecto académico de manera efectiva, es fundamental tener un buen manejo del tiempo. Aquí te dejo algunos pasos y estrategias para ordenar tu tiempo y mantenerte enfocado en el desarrollo de tu proyecto:",

      details: [
        "Define el plazo final",
        "Divide el proyecto en etapas",
        "Establece fechas límite intermedias",
        "Organiza tu tiempo de manera diaria o semanal",
        "Prioriza tareas",
        "Mantén la flexibilidad",
        "Evita distracciones y establece bloques de tiempo",
        "Haz descansos y cuida tu bienestar",
        "Revisión constante"

      ],
      textEnd: "Con estas estrategias de organización del tiempo, podrás mantenerte enfocado, evitar el estrés de última hora y entregar un proyecto académico bien desarrollado. ¡La clave está en la planificación y la constancia!.",
      subtextEnd: "¡Si requieres mayor información o que un experto te ayude en el desarrollo de tu proyecto académico, ponte en contacto con nosotros!.",

    },

    {
      id: 7,
      text: "¿Cuantas paginas debe de tener mi tesis?",
      subText: "El número de páginas de una tesis puede variar según la universidad, el nivel académico (licenciatura, maestría, doctorado) y el tema que estés investigando. Sin embargo, te puedo dar una idea general:",

      details: [
        "Tesis de Licenciatura: En general, una tesis de licenciatura suele tener entre 40 y 80 páginas.",
        "Tesis de Maestría: Para una tesis de maestría, la extensión suele ser mayor, y suele oscilar entre 80 y 150 páginas.",
        "Tesis de Doctorado: Las tesis de doctorado son considerablemente más extensas y pueden tener entre 150 y 300 páginas o más",


      ],
      textTitle: "Factores que pueden influir en el número de páginas:",


      details2: [
        "Requisitos de la universidad: Cada institución tiene sus propias normativas sobre la extensión mínima o máxima de la tesis.",
        "El tema: Algunos temas requieren una mayor cantidad de información y análisis, lo que puede aumentar la longitud del trabajo.",
        "Formato y estilo: Las exigencias de formato (márgenes, interlineado, tipo de fuente, etc.) también influyen en la extensión final de la tesis.",


      ],
      textEnd: "Lo más importante es cumplir con los requisitos específicos de tu universidad y enfocarte en la calidad del contenido, no solo en la cantidad de páginas. Asegúrate de que cada sección esté bien desarrollada, clara y relevante para tu investigación.",
      subtextEnd: "¡Si requieres mayor información o que un experto te ayude en la elaboración de tu tesis ponte en contacto con nosotros!.",

    },

    {
      id: 8,
      text: "¿Cómo elijo el tema de mi tesis?",
      subText: "Elegir el tema de tu tesis es un paso crucial en el proceso de investigación, ya que marcará la dirección de todo tu trabajo académico. Aquí te doy algunos consejos para ayudarte a tomar una decisión acertada:",

      details: [
        "Intereses personales.",
        "Relevancia del tema.",
        "Viabilidad del tema.",
        "Originalidad y aporte al conocimiento.",
        "Posibilidad de desarrollo de la investigación.",
        "Consulta con tu director de tesis.",
        "Relevancia profesional.",
        "Evaluación de riesgos.",




      ],

      textEnd: "Considera las posibles dificultades: Reflexiona sobre cualquier desafío que podrías enfrentar al desarrollar el tema, como falta de datos, dificultades en el análisis o limitaciones en la disponibilidad de información.",
      subtextEnd: "¡Si requieres mayor información o que un experto te ayude en la elaboración de tu tesis ponte en contacto con nosotros!.",

    },

    {
      id: 9,
      text: "¿Qué es una hipótesis y como la formulo?",
      subText: "Una hipótesis es una suposición o proposición que se plantea como respuesta tentativa a una pregunta de investigación, basada en teorías previas, observaciones o experiencias. Es una afirmación que se puede comprobar mediante experimentación o análisis de datos. La hipótesis guía la dirección de la investigación, estableciendo lo que se espera encontrar. Para formular una hipótesis, puedes seguir estos pasos: ",

      details: [
        "Identifica el problema o pregunta de investigación.",
        "Revisa la literatura existente.",
        "Define las variables.",
        "Desarrolla una información clara y epecífica.",
        "Posibilidad de desarrollo de la investigación.",
        "Hazla testable.",





      ],

      textEnd: "Formular una buena hipótesis es clave para guiar tu investigación y darle un rumbo claro, así que tómate tu tiempo para desarrollarla bien. ¡Buena suerte!",
      subtextEnd: "¡Si requieres mayor información o que un experto te ayude en la elaboración de una hipotesis y como se formula ponte en contacto con nosotros!",

    },

    {
      id: 10,
      text: "¿Cómo interpretar los resultados en la discusión?",
      subText: "La discusión es una de las secciones más importantes de tu tesis o proyecto académico, ya que en ella interpretas los resultados obtenidos en tu investigación. Aquí se vinculan los hallazgos con tus objetivos de investigación, se comparan con investigaciones previas y se analizan las implicaciones de los resultados. A continuación, te doy algunos consejos sobre cómo interpretar los resultados en esta sección.Cómo interpretar los resultados:",

      details: [
        "Compara con la hipótesis: Explica si los resultados apoyan o refutan tu hipótesis.",
        "Explica las razones: Si los resultados no fueron los esperados, analiza por qué.",
        "Compara con estudios previos: Relaciona tus resultados con investigaciones anteriores.",
        "Reflexiona sobre la importancia: Discute la implicaciones teóricas y prácticas de tus resultados",
        "Sugiere futuras investigaciones: Propón nuevas preguntas o mejoras metodológicas para estudios futuros.",
        "Mantén una actitud crítica: reconoce la limitaciones y posibles áreas de mejora en el estudio"


      ],

      textEnd: "La discusión es clave para contextualizar tus hallazgos dentro de la literatura existente, explicar sus implicaciones y reconocer las limitaciones del estudio, lo que le da profundidad a tu trabajo académico.",
      subtextEnd: "¡Si requieres mayor información o que un experto te guíe en la interpretación de los resultados de discusión, ponte en contacto con nosotros!.",

    },

    {
      id: 11,
      text: "¿Cómo presentar mi tesis para la defensa?",
      subText: "Para presentar una tesis para la defensa, puedes preparar una presentación oral que incluya los resultados de tu investigación, conclusiones y metodología. También puedes usar recursos visuales como diapositivas. ",

      details: [
        "Define claramente tus objetivos.",
        "Utiliza un vocabulario preciso. ",
        "Selecciona las ideas principales.",
        "Considera incluir perspectivas o temas nuevos relacionados con tu tesis.",
        "Practica la defensa con técnicas de oratoria. ",


      ],

      textEnd: "Una buena defensa de tesis es una oportunidad para demostrar tu competencia como investigador y tu capacidad de presentar, argumentar y defender tus ideas de manera profesional. ¡Mucho éxito en tu defensa!.",
      subtextEnd: "¡Si requieres mayor información o que un experto te guíe en la presentación de tu tesis para la defensa, ponte en contacto con nosotros!",

    },


    {
      id: 12,
      text: "¿Cómo manejar el estrés durante la elaboración de mi tesis?",
      subText: "El estrés es una reacción natural cuando estás trabajando en un proyecto tan grande y significativo como tu tesis Aquí tienes algunos consejos para lidiar con el estrés mientras elaboras tu tesis: ",

      details: [
        "Organiza tu tiempo: Divide el trabajo en tareas pequeñas y establece metas claras.",
        "Haz pausas regulares: Usa técnicas como la Pomodoro y toma descansos para evitar la fatiga mental.",
        "Cuida tu bienestar físico y mental: Ejercicio, buena alimentación y descanso son clave.",
        "Busca apoyo: Habla con tu director de tesis, compañeros o familiares.",
        "Evita la procrastinación: Empieza con tareas pequeñas y sencillas para evitar la ansiedad.",
        "Acepta que no todo será perfecto: No te obsesiones con la perfección; haz lo mejor que puedas.",
        "Mantén una mentalidad positiva: Visualiza el éxito y celebra los pequeños logros.",
        "Haz un plan de contingencia: Prepárate para posibles obstáculos.",

      ],

      textEnd: "El estrés es inevitable, pero con un enfoque adecuado, puedes reducirlo significativamente y mantener el control. Recuerda que estás trabajando en un proyecto importante, pero es solo una parte de tu vida. Mantén el equilibrio y, cuando sea necesario, da un paso atrás para relajarte y recargar energías. ¡Ánimo, que lo lograrás!",
      subtextEnd: "¡Si requieres mayor información o que un experto te ayude en la elaboración de tu tesis ponte en contacto con nosotros!.",

    },

    {
      id: 13,
      text: "¿Cómo referenciar una imagen en APA 7?",
      subText: "Para referenciar una imagen en el formato APA 7 (American Psychological Association, 7ª edición), la forma de citar dependerá de la fuente de donde provenga la imagen (si es de un libro, artículo, sitio web, etc.). Aquí te muestro cómo hacerlo para diferentes tipos de fuentes:",

      details: [
        "Imagen impresa (de libro o artículo): Autor, A. A. (Año). Título de la obra (p. # de la imagen). Editorial.",
        "Imagen en línea (de sitio web): Autor, A. A. (Año). Título de la imagen [Formato]. Nombre del sitio web. URL",
        "Imagen sin autor (de sitio web o base de datos): Título de la imagen [Formato]. (Año). Nombre del sitio web. URL Recuerda siempre que si la imagen es parte de tu trabajo, debes numerarlas (Figura 1, Figura 2, etc.) y, si es necesario, darles un título o descripción breve.",


      ],

      subtextEnd: "¡Si requieres mayor información o que un experto te ayude e referenciar una imagen en APA 7, ponte en contacto con nosotros!.",

    }


  ];
  const opcionesMostradas = mostrarTodos ? options : options.slice(0, 4);
  const handleOptionClick = (option) => {
    
    const responseMessage = props.actionProvider.createChatBotMessage(
      `Has seleccionado: ${option.text}`
    );

    // Aquí usamos TailwindCSS para hacer que el mensaje ocupe todo el ancho
    const detailsMessage = props.actionProvider.createChatBotMessage(
      <>
        {option.id === 1 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <ol className="list-disc pl-4">
              {option.details.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ol>
            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>
            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>


          </div>
        ) : null}
        {option.id === 2 ? (
          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <p><strong>{option.title1}</strong></p>
            <p><strong>{option.titleFormate}</strong> <br />{option.text1}</p>
            <p><strong>{option.titleExample}</strong><br />{option.exampleText1}</p>

            <p><strong>{option.title2}</strong></p>
            <p><strong>{option.titleFormate}</strong> <br />{option.text2}</p>
            <p><strong>{option.titleExample}</strong><br />{option.exampleText2}</p>


            <p><strong>{option.title3}</strong></p>
            <p><strong>{option.titleFormate}</strong> <br />{option.text3}</p>
            <p><strong>{option.titleExample}</strong><br />{option.exampleText3}</p>

            <p><strong>{option.title4}</strong></p>
            <p><strong>{option.titleFormate}</strong> <br />{option.text4}</p>
            <p><strong>{option.titleExample}</strong><br />{option.exampleText4}</p>

            <p><strong>{option.title5}</strong></p>
            <p><strong>{option.titleFormate}</strong> <br />{option.text5}</p>
            <p><strong>{option.titleExample}</strong><br />{option.exampleText5}</p>

            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>
            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>

          </div>

        ) : null}

        {option.id === 3 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p><strong>{option.title1} </strong></p>
            <p>{option.text1}</p>


            <p><strong>{option.title2} </strong></p>

            <p>{option.text2}</p>
            <p><strong>{option.title3} </strong></p>

            <p>{option.text3}</p>
            <p><strong>{option.title4} </strong></p>

            <p>{option.text4}</p>
            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>
            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>

          </div>
        ) : null}



        {option.id === 4 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <p>{option.treeText}</p>



            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>



          </div>
        ) : null}
        {option.id === 5 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <ul className="list-disc pl-4">
              {option.details.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>

            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>

          </div>
        ) : null}

        {option.id === 6 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <ol className="list-disc pl-4">
              {option.details.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ol>
            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>

            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>

          </div>
        ) : null}

        {option.id === 7 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <ol className="list-disc pl-4">
              {option.details.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ol>

            <p><strong>{option.textTitle}</strong></p>
            <ul className="list-disc pl-4">
              {option.details2.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>

            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>

          </div>
        ) : null}

        {option.id === 8 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <ol className="list-disc pl-4">
              {option.details.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ol>

            <p><strong>{option.textTitle}</strong></p>

            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>
            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>


          </div>
        ) : null}


        {option.id === 9 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <ul className="list-disc pl-4">
              {option.details.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>

            <p><strong>{option.textTitle}</strong></p>

            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>

            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>

          </div>
        ) : null}

        {option.id === 10 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <ol className="list-disc pl-4">
              {option.details.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ol>

            <p><strong>{option.textTitle}</strong></p>

            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>
            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>


          </div>
        ) : null}

        {option.id === 11 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <ul className="list-disc pl-4">
              {option.details.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>

            <p><strong>{option.textTitle}</strong></p>

            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>
            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>


          </div>
        ) : null}


        {option.id === 12 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <ol className="list-disc pl-4">
              {option.details.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ol>

            <p><strong>{option.textTitle}</strong></p>

            <p>{option.textEnd}</p>
            <p>{option.subtextEnd}</p>
            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>


          </div>
        ) : null}


        {option.id === 13 ? (

          <div className="w-full"> {/* Esto asegura que ocupe todo el ancho disponible */}
            <p>{option.subText}</p>
            <ul className="list-disc pl-4">
              {option.details.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>

            <p><strong>{option.textTitle}</strong></p>

            <p>{option.subtextEnd}</p>
            <p style={{ textAlign: "center" }}> <a href="https://wa.me/+5215564727323" target="_blank" style={{ color: "white", fontWeight: "bold" }} > Contactar ahora! </a></p>
            
          </div>
        ) : null}

      </>


    );

   
    setMessages([responseMessage, detailsMessage]);
    // Mensaje adicional para preguntar por más ayuda
    const repeatMessage = props.actionProvider.createChatBotMessage(
      "¿En qué más puedo ayudarte?",
      { widget: "options" }
    );
  
    setMessages((prevMessages) => [...prevMessages, repeatMessage]);
  };
  console.log(messages)

  return (
    <div className="options-btn">
   {messages.map((message, index) => (
  <div
    key={index}
    ref={(el) => (messageRefs.current[index] = el)} // Asignamos cada ref al índice correspondiente
    className={`chat-message `} 
  >
  
     { message.message}
  </div>
))}



      {opcionesMostradas.map((option) => (
        <button
          key={option.id}
          className="btn btn-secondary"
          onClick={() => handleOptionClick(option)}
        >
          {option.text}
        </button>
      ))}
  
      {!mostrarTodos && (
        <button
          className="btn btn-primary"
          onClick={() => setMostrarTodos(true)}
        >
          Ver más
        </button>
      )}
    </div>
  );
  
};

export default config;
