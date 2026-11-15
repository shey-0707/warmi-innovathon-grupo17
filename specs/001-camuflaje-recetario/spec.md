# Spec 001: Recetario Casero (Camuflaje)

> Reto Warmi Innovathon · Makipuray · **Eje 3: Prevención y seguridad**
> Estado: v2 (borrador para el equipo) · Última revisión: 15 nov 2026

## Problema y usuaria

**Pregunta central del reto:** ¿Cómo podríamos ayudar a una mujer en riesgo a pedir ayuda de forma rápida y discreta, acompañándola a la vez en el acceso seguro a información y atención de su salud física y mental?

**Usuaria:** mujeres en situación de violencia (pareja, calle, laboral o universitaria), y jóvenes o mujeres en vulnerabilidad con poco acceso a información de salud.

**Situación que resolvemos:** quien la agrede o la controla puede revisar su celular o estar cerca. Escribir "ayuda" o abrir una app de emergencia puede ponerla en más riesgo. Pero **mandar una receta a una amiga es algo que nadie sospecha.**

## Propuesta de valor

No es una app de emergencia: es un recetario que sigue siendo un recetario. **La receta es una petición de ayuda disimulada.** La app prepara un mensaje que parece una conversación cotidiana sobre una receta; la usuaria revisa el texto y elige explícitamente a una persona de confianza antes de abrir WhatsApp. Por un acuerdo previo, ese mensaje significa *"te necesito ahora"*. La receta no le esconde nada al contacto: le esconde la petición a quien la vigila. Antes de que la usuaria escriba su PIN en la calculadora de costos, la app es solo un recetario: la petición de ayuda, los contactos, la ubicación y la orientación aparecen únicamente en el modo apoyo.

**Por qué hace falta si el contacto ya sabe su situación:** el contacto puede saber que ella está en riesgo en general, pero no *cuándo* necesita ayuda ahora, y ella no puede escribir "ayuda" ni llamar sin delatarse. La app resuelve el *cuándo* y el *cómo*, no el *qué*: el acuerdo previo define qué hacer y qué no hacer.

## Cómo funciona (visión)

1. **Acuerdo previo, en persona** (idealmente con una facilitadora de Makipuray): qué significa la receta, qué hará y qué **no** hará la persona de confianza, y cómo responder sin ponerse en riesgo. Ver `docs/ACUERDO-DE-CONFIANZA.md`.
2. **Configuración única:** elige su receta de confianza, anota 2 o 3 personas de confianza y crea un PIN de 6 dígitos.
3. **Uso normal:** el recetario se ve como cualquier otro y cada receta incluye una calculadora de costos, una función cotidiana para cualquiera.
4. **Modo apoyo:** al escribir su PIN en el campo «Presupuesto» de la calculadora y tocar Calcular, se abre el modo apoyo: enviar el mensaje de ayuda (con revisión previa y ubicación opcional), contactos, artículos breves, teléfonos de apoyo, asistente de respuestas predefinidas y el temporizador «Voy en camino». Antes del PIN, nada de esto aparece. Tras 60 segundos sin interacción, la app vuelve al inicio del recetario.

## Requisitos (formato EARS)

### A. Base (RF-3, RF-4 y RF-5 se modifican en este sprint)

- **RF-1:** CUANDO la usuaria abre la app, EL SISTEMA muestra un recetario completo: inicio, búsqueda por nombre y categoría, y ficha de cada receta.
- **RF-2:** CUANDO marca una receta como favorita, EL SISTEMA la guarda en el dispositivo y la muestra en Favoritas.
- **RF-3 (modificado):** CUANDO comparte una receta, EL SISTEMA presenta un mensaje común de receta y permite compartirlo desde el dispositivo o copiarlo. Fuera del modo apoyo, compartir nunca incluye la señal ni la ubicación.
- **RF-4 (señal, modificado):** CUANDO la usuaria, ya dentro del modo apoyo, elige «Enviar mensaje de ayuda», EL SISTEMA presenta una vista previa del mensaje y del destinatario antes de abrir WhatsApp. El texto suena a conversación cotidiana sobre su receta de confianza y puede mencionar el Punto Seguro al que se dirige (nombre y dirección), que ella elige en la vista previa. El texto **no pide ni indica que la persona de confianza confronte a alguien ni que acuda a la casa u otro lugar donde está quien agrede**. WhatsApp solo se abre cuando la usuaria elige explícitamente ese destinatario.
- **RF-5 (ubicación, modificado):** CUANDO la usuaria elige explícitamente incluir su ubicación, EL SISTEMA solicita el permiso del navegador y agrega un enlace de mapa al mensaje. EL SISTEMA solo guarda la ubicación en el dispositivo cuando la usuaria inicia el temporizador «Voy en camino» (RF-21); la borra al confirmar su llegada, al enviar el mensaje o al cerrar el modo apoyo, y nunca la comparte ni la sigue en segundo plano.
- **RF-6:** CUANDO la usuaria, ya en el modo apoyo, abre «Bienestar y apoyo», EL SISTEMA muestra los artículos breves de apoyo, teléfonos útiles en Perú y el asistente de respuestas predefinidas. La orientación no se ofrece en la navegación principal ni en Preferencias.
- **RF-7:** CUANDO la usuaria escribe al asistente palabras de riesgo (miedo, violencia, amenaza, etc.), EL SISTEMA responde con apoyo y los teléfonos de ayuda. EL SISTEMA aclara que es un asistente de respuestas predefinidas y no guarda la conversación.
- **RF-8:** CUANDO abre Tiendas, EL SISTEMA muestra un mapa con puntos de ejemplo marcados como **no verificados**.
- **RF-9:** CUANDO la app se instala o se abre sin conexión, EL SISTEMA carga sus propias pantallas y recursos.
- **RF-10:** CUANDO elige "Borrar mis datos guardados", EL SISTEMA elimina favoritas, perfil, contactos y preferencias de esta app.

### B. Nuevos en este sprint (prioridad: Must > Should > Could)

- **RF-11 (Must):** CUANDO la usuaria abre la app por primera vez, EL SISTEMA muestra la configuración inicial: una explicación en **tres tarjetas cortas** (qué es, cómo funciona la señal, qué no hace), la elección de la receta de confianza, el registro de contactos y la creación/confirmación de un PIN numérico de 6 dígitos.
- **RF-12 (Must):** CUANDO completa o sale de la configuración, EL SISTEMA no vuelve a mostrarla por sí solo. CUANDO ya existía un perfil sin PIN, EL SISTEMA solicita una actualización única para crearlo; después no la muestra al recargar.
- **RF-13 (Must):** MIENTRAS la usuaria está en la configuración, EL SISTEMA muestra siempre un botón **"Salir rápido"** bien visible. CUANDO lo toca, EL SISTEMA vuelve al recetario sin guardar lo escrito y sin volver a abrir la configuración.
- **RF-14 (Must):** MIENTRAS la usuaria navega por el recetario o Preferencias, EL SISTEMA no muestra enlaces a Bienestar, tutoriales ni al borrado total, y no incluye Bienestar en la navegación principal. La señal de ayuda, los contactos y la ubicación tampoco se muestran antes del PIN. La calculadora de costos está disponible desde la ficha de receta; el modo apoyo solo se muestra después de introducir el PIN. El PIN reduce pistas casuales, pero no vuelve invisible ni protege la app frente a quien inspeccione el dispositivo.
- **RF-15 (Must):** CUANDO la usuaria escribe el PIN creado en la configuración inicial en el campo «Presupuesto» de la calculadora de costos y toca Calcular, EL SISTEMA abre el modo apoyo. Cualquier otro valor solo calcula, sin mostrar mensajes que confirmen o descarten el PIN.
- **RF-16 (Must):** CUANDO la usuaria ya está en el modo apoyo, EL SISTEMA le permite actualizar contactos/PIN o borrar los datos de la app. CUANDO los borra, EL SISTEMA vuelve al recetario, limpia también el verificador del PIN y no activa la configuración sola.
- **RF-17 (Could):** CUANDO abre el engranaje, EL SISTEMA ofrece las opciones del recetario: tema claro/oscuro con ícono (☀️/🌙), tamaño de letra, vista en cuadros o lista, nombre para el saludo, limpiar favoritas e instalar la app. Ninguna opción muestra el modo apoyo ni modifica a las personas de confianza.
- **RF-18 (Should):** CUANDO registra contactos, EL SISTEMA propone el prefijo +51, abre el teclado numérico, exige 2 contactos y permite un tercero opcional con "+ Agregar otra".
- **RF-19 (Must):** CUANDO la usuaria abre la calculadora de una receta, EL SISTEMA le permite ingresar el precio de cada ingrediente y muestra el total y el costo por porción. El campo «Presupuesto» compara el total con ese monto y también acepta el PIN de 6 dígitos para abrir el modo apoyo. Ajustar las porciones recalcula las cantidades numéricas; las cantidades «al gusto» se mantienen.
- **RF-20 (Must):** MIENTRAS la usuaria está en la configuración, Preferencias o el modo apoyo (incluido el envío de mensaje y el temporizador), SI pasan 60 segundos sin interacción, EL SISTEMA vuelve al inicio del recetario, descarta el contenido temporal y exige el PIN para volver a entrar. Este cierre no borra los datos guardados.
- **RF-21 (Should):** CUANDO la usuaria, desde el modo apoyo, inicia el temporizador «Voy en camino» (15, 30 o 45 minutos), EL SISTEMA solicita permiso de ubicación, la guarda solo en el dispositivo y ofrece preparar un mensaje inicial con esa ubicación para que ella lo revise y lo envíe. El temporizador se presenta como un temporizador de cocina y sigue corriendo aunque el modo apoyo se bloquee. SI la app sigue abierta al vencer, EL SISTEMA muestra un aviso neutro con «Ya está lista» (cancela y borra la ubicación guardada) y «Compartir receta» (pide el PIN y abre la revisión del mensaje con la última ubicación guardada). EL SISTEMA calcula el vencimiento con la hora de fin; si la app estuvo oculta, muestra el aviso al volver. EL SISTEMA nunca envía mensajes ni ubicación por sí solo ni actúa en segundo plano.
- **RF-22 (Should):** PARA el pitch, EL EQUIPO prepara una tarjeta impresa por ambas caras: una receta del prototipo y un QR verificado que abre la URL pública. La tarjeta no contiene datos personales ni presenta la app como servicio de emergencia.
- **RF-23 (Must):** CUANDO la usuaria toca cinco veces el título del recetario en un intervalo de tres segundos, EL SISTEMA solicita el PIN. SI el PIN es correcto, abre la configuración para gestionar el PIN y los contactos. SI no lo es, no muestra ningún dato guardado ni pista del acceso. El PIN no se puede recuperar: si se olvida, se borran los datos del navegador y se vuelve a configurar.
- **RF-24 (Must):** CUANDO el navegador informa que la app quedó oculta (por cambio de app/pestaña o bloqueo de pantalla), EL SISTEMA vuelve al inicio del recetario y descarta el contenido temporal de la vista. En el modo apoyo, EL SISTEMA mantiene visible un botón «Salir rápido» para volver al recetario manualmente.
- **RF-25 (Must):** CUANDO la usuaria está en el modo apoyo, EL SISTEMA muestra la acción «Enviar mensaje de ayuda», que usa la receta de confianza y los contactos registrados (RF-4, RF-5) y sugiere el Punto Seguro más cercano si hay ubicación disponible. La usuaria puede cambiarlo por otro de la lista o quitarlo antes de enviar.

## Reglas de seguridad y límites

- **El mensaje no le pide a la persona de confianza que confronte a nadie ni que vaya a la casa de la usuaria o al lugar donde está quien agrede.** Puede mencionar, con apariencia de mandado de cocina, el Punto Seguro al que se dirige la usuaria, para que su contacto pueda reunirse con ella allí. Lo que haga la persona de confianza lo define el acuerdo previo. La ubicación es información, no una orden.
- **Se recomienda elegir contactos fuera del entorno de quien agrede** y que no vivan en el mismo hogar, y registrar al menos 2 para no depender de una sola persona. El contacto no tiene que ser familiar: puede ser una amiga, una compañera o una persona acompañante de Makipuray.
- **Discreta no es invisible.** La app no puede impedir que alguien con acceso al celular la abra o revise el almacenamiento del navegador. Se dice con claridad.
- El mensaje enviado **queda en el historial de WhatsApp** de la usuaria. Recomendación en la orientación: activar mensajes temporales en ese chat o borrarlo.
- La app **no llama a emergencias, no vigila ni monitorea.** Siempre se muestra: "si hay peligro inmediato, busca ayuda local cuando sea seguro hacerlo".
- Los puntos del mapa son **ejemplos**; no se presentan como lugares seguros ni como destino recomendado.
- Ningún contacto, ubicación ni mensaje sale del dispositivo salvo que la usuaria lo envíe.

## Fuera de alcance (en este sprint)

- Cuentas, registro e inicio de sesión (no hay backend).
- Autenticación segura del dispositivo o de los datos guardados. El PIN local es solo una barrera de discreción.
- Renombrar las claves de almacenamiento a nombres neutros.
- Elegir contactos desde la agenda del teléfono.
- Mensajes o ubicación enviados automáticamente, alertas confiables en segundo plano, grabación de audio/video o seguimiento de ubicación.
- IA generativa en respuestas de apoyo.
- Verificación real de "puntos seguros" (se hace en la fase de co-diseño con Makipuray).

Nota: guardar la última ubicación solo en el dispositivo mientras corre el temporizador «Voy en camino» está permitido (RF-5, RF-21). Sigue fuera de alcance el seguimiento continuo o en segundo plano.

## Criterios de aceptación → pruebas

| RF | Prueba | Cómo |
|---|---|---|
| RF-4 | En el modo apoyo, la vista previa muestra destinatario, texto y el Punto Seguro sugerido antes de abrir WhatsApp; se puede cambiar o quitar el Punto Seguro; el texto no pide acudir a la casa ni confrontar a nadie; antes del PIN no existe ninguna forma de llegar a ese mensaje | Manual + unitaria |
| RF-5 | La ubicación solo se guarda al iniciar el temporizador y se borra con «Ya está lista», al enviar el mensaje o al cerrar el modo apoyo | Unitaria + manual |
| RF-10 | Tras borrar, no queda ninguna clave de datos o verificación de PIN, salvo la marca de configuración completada | Unitaria |
| RF-11 | Con almacenamiento vacío, al abrir "/" aparece la configuración con las tres tarjetas, selección de receta/contactos y creación/confirmación de PIN | Manual |
| RF-12 | Tras completar, recargar no reabre la configuración; un perfil previo sin PIN permite crearlo una sola vez | Unitaria + manual |
| RF-13 | "Salir rápido" visible en todos los pasos; no guarda contactos | Manual |
| RF-14–15 | El modo apoyo no aparece en navegación ni Preferencias; PIN correcto en «Presupuesto» abre el modo apoyo y uno incorrecto solo calcula | Manual |
| RF-16 | Actualizar contactos/PIN y borrar desde el modo apoyo; tras borrar no queda el PIN y se vuelve al recetario | Manual |
| RF-17 | Cada opción del engranaje cambia lo esperado y persiste | Manual |
| RF-18 | +51 por defecto; con 1 contacto no se puede continuar; el tercero es opcional | Unitaria + manual |
| RF-19 | Sumar precios de ingredientes y verificar total y costo por porción; las cantidades «al gusto» no cambian; un número cualquiera como presupuesto no revela nada | Unitaria + manual |
| RF-20 | Dejar configuración, Preferencias y modo apoyo sin tocar durante 60 s; cada vista vuelve al inicio y se pide el PIN | Manual |
| RF-21 | Temporizador de 1 minuto: se guarda la ubicación al iniciar; al vencer aparece el aviso; «Compartir receta» pide el PIN; nada se envía solo; «Ya está lista» borra la ubicación | Manual |
| RF-22 | Escanear el QR impreso desde otro teléfono; abre el MVP público y la URL de respaldo es legible | Manual |
| RF-23 | Cinco toques rápidos al título piden el PIN; con el PIN correcto abren la configuración; sin PIN no se ve ningún contacto; menos de cinco toques o toques separados no hacen nada | Manual |
| RF-24 | Desde cualquier vista, cambiar de app/pestaña o bloquear la pantalla regresa al inicio al volver; en el modo apoyo, «Salir rápido» permanece accesible al desplazarse | Manual en móvil; depende de los eventos de ciclo de vida que notifique el navegador |
| RF-25 | Desde el modo apoyo se abre el mensaje con la receta de confianza y los contactos; fuera del modo apoyo no existe esa acción | Manual |

## Preguntas abiertas

- **P-1:** ¿La calculadora de costos como acceso al apoyo permite encontrar los recursos sin aumentar el riesgo? Validar este flujo y el PIN con Makipuray y con usuarias antes de un piloto. El PIN local no es una protección técnica contra alguien que inspeccione el dispositivo.
- **P-6:** ¿La tarjeta con QR se entiende como acceso al recetario sin revelar datos ni prometer seguridad? Probar el diseño y el QR en el pitch.
- **P-7:** ¿Qué servicios de atención psicológica locales se pueden incluir y cómo se verifican? No publicar números particulares ni directorios sin validarlos con una organización especializada.
- **P-2:** ¿El texto exacto del mensaje es creíble y seguro? Se propone provisionalmente: *"Te paso la receta de mi … . Luego me cuentas cómo te quedó."* No invita a la persona a ir a una casa ni a otro lugar. Validar esta redacción con Makipuray antes de usarla con usuarias reales.
- **P-5:** ¿Una señal o dos? Una receta podría significar "escríbeme cuando puedas" y otra "urgente". Se deja como mejora futura.
- **P-3:** ¿Los teléfonos de apoyo mostrados siguen vigentes? Confirmar en fuentes oficiales antes de la demo.
- **P-4:** ¿Se publica el repositorio de forma abierta o privada hasta la entrega?
- **P-8:** ¿Cuánto tarda pedir ayuda con el PIN (receta, calculadora, PIN, enviar)? Medir el tiempo con usuarias y con Makipuray y decidir si el compromiso entre discreción y rapidez es aceptable.
- **P-9:** ¿Mencionar el Punto Seguro en el mensaje es seguro y creíble? Validar con Makipuray la redacción como mandado de cocina y que solo se sugieran Puntos Seguros verificados. En el prototipo los puntos son de ejemplo y no deben presentarse como lugares seguros.