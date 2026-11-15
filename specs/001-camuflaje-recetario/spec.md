# Spec 001: Recetario Casero (Camuflaje)

> Reto Warmi Innovathon · Makipuray · **Eje 3: Prevención y seguridad**
> Estado: v1 (borrador para el equipo) · Última revisión: 13 nov 2026

## Problema y usuaria

**Pregunta central del reto:** ¿Cómo podríamos ayudar a una mujer en riesgo a pedir ayuda de forma rápida y discreta, acompañándola a la vez en el acceso seguro a información y atención de su salud física y mental?

**Usuaria:** mujeres en situación de violencia (pareja, calle, laboral o universitaria), y jóvenes o mujeres en vulnerabilidad con poco acceso a información de salud.

**Situación que resolvemos:** quien la agrede o la controla puede revisar su celular o estar cerca. Escribir "ayuda" o abrir una app de emergencia puede ponerla en más riesgo. Pero **mandar una receta a una amiga es algo que nadie sospecha.**

## Propuesta de valor

No es una app de emergencia: es un recetario que sigue siendo un recetario. **La receta es una petición de ayuda disimulada.** La app prepara un mensaje que parece una conversación cotidiana sobre una receta; la usuaria revisa el texto y elige explícitamente a una persona de confianza antes de abrir WhatsApp. Por un acuerdo previo, ese mensaje significa *"te necesito ahora"*. La receta no le esconde nada al contacto: le esconde la petición a quien la vigila. Además, dentro del mismo recetario encuentra orientación y teléfonos de apoyo en Perú.

**Por qué hace falta si el contacto ya sabe su situación:** el contacto puede saber que ella está en riesgo en general, pero no *cuándo* necesita ayuda ahora, y ella no puede escribir "ayuda" ni llamar sin delatarse. La app resuelve el *cuándo* y el *cómo*, no el *qué*: el acuerdo previo define qué hacer y qué no hacer.

## Cómo funciona (visión)

1. **Acuerdo previo, en persona** (idealmente con una facilitadora de Makipuray): qué significa la receta, qué hará y qué **no** hará la persona de confianza, y cómo responder sin ponerse en riesgo. Ver `docs/ACUERDO-DE-CONFIANZA.md`.
2. **Configuración única:** elige su receta de confianza y anota 2 o 3 personas de confianza.
3. **Uso normal:** el recetario se ve como cualquier otro.
4. **Petición de ayuda:** abre la vista previa de la receta, revisa el mensaje y elige a la persona de confianza antes de abrir WhatsApp; puede sumar su ubicación si lo decide.
5. **Orientación:** desde la calculadora de porciones introduce el PIN que creó en la configuración inicial para abrir artículos breves, teléfonos de apoyo y un asistente de respuestas predefinidas. Bienestar no aparece en la navegación principal ni en Preferencias.

## Requisitos (formato EARS)

### A. Base (ya implementados en el MVP)

- **RF-1:** CUANDO la usuaria abre la app, EL SISTEMA muestra un recetario completo: inicio, búsqueda por nombre y categoría, y ficha de cada receta.
- **RF-2:** CUANDO marca una receta como favorita, EL SISTEMA la guarda en el dispositivo y la muestra en Favoritas.
- **RF-3:** CUANDO comparte una receta que no es la de confianza, EL SISTEMA presenta un mensaje común de receta y permite compartirlo desde el dispositivo o copiarlo.
- **RF-4 (señal):** CUANDO comparte una receta, EL SISTEMA presenta una vista previa del mensaje y del destinatario antes de abrir WhatsApp. Para la receta de confianza, el texto suena a conversación cotidiana sobre una receta y **no invita ni indica que la persona de confianza acuda a ningún lugar o confronte a alguien**. WhatsApp solo se abre cuando la usuaria elige explícitamente ese destinatario.
- **RF-5 (ubicación):** CUANDO la usuaria elige explícitamente incluir su ubicación, EL SISTEMA solicita el permiso del navegador y agrega un enlace de mapa al mensaje. EL SISTEMA no guarda la ubicación ni la comparte en segundo plano.
- **RF-6:** CUANDO la usuaria abre «Bienestar y apoyo» tras introducir su PIN en la calculadora de porciones, EL SISTEMA muestra los artículos breves de apoyo, teléfonos útiles en Perú y el asistente de respuestas predefinidas. La orientación no se ofrece en la navegación principal ni en Preferencias.
- **RF-7:** CUANDO la usuaria escribe al asistente palabras de riesgo (miedo, violencia, amenaza, etc.), EL SISTEMA responde con apoyo y los teléfonos de ayuda. EL SISTEMA aclara que es un asistente de respuestas predefinidas y no guarda la conversación.
- **RF-8:** CUANDO abre Tiendas, EL SISTEMA muestra un mapa con puntos de ejemplo marcados como **no verificados**.
- **RF-9:** CUANDO la app se instala o se abre sin conexión, EL SISTEMA carga sus propias pantallas y recursos.
- **RF-10:** CUANDO elige "Borrar mis datos guardados", EL SISTEMA elimina favoritas, perfil, contactos y preferencias de esta app.

### B. Nuevos en este sprint (prioridad: Must > Should > Could)

- **RF-11 (Must):** CUANDO la usuaria abre la app por primera vez, EL SISTEMA muestra la configuración inicial: una explicación en **tres tarjetas cortas** (qué es, cómo funciona la señal, qué no hace), la elección de la receta de confianza, el registro de contactos y la creación/confirmación de un PIN numérico de 6 dígitos.
- **RF-12 (Must):** CUANDO completa o sale de la configuración, EL SISTEMA no vuelve a mostrarla por sí solo. CUANDO ya existía un perfil sin PIN, EL SISTEMA solicita una actualización única para crearlo; después no la muestra al recargar.
- **RF-13 (Must):** MIENTRAS la usuaria está en la configuración, EL SISTEMA muestra siempre un botón **"Salir rápido"** bien visible. CUANDO lo toca, EL SISTEMA vuelve al recetario sin guardar lo escrito y sin volver a abrir la configuración.
- **RF-14 (Must):** MIENTRAS la usuaria navega por el recetario o Preferencias, EL SISTEMA no muestra enlaces a Bienestar, tutoriales ni al borrado total, y no incluye Bienestar en la navegación principal. La calculadora de porciones está disponible desde la ficha de receta; la orientación solo se muestra después de introducir el PIN. El PIN reduce pistas casuales, pero no vuelve invisible ni protege la app frente a quien inspeccione el dispositivo.
- **RF-15 (Must):** CUANDO la usuaria introduce el PIN creado durante la configuración inicial en el campo numérico de la calculadora de porciones, EL SISTEMA abre «Bienestar y apoyo». Un PIN incorrecto mantiene la calculadora y no muestra mensajes que confirmen el PIN.
- **RF-16 (Must):** CUANDO la usuaria ya está en Bienestar y apoyo, EL SISTEMA le permite actualizar contactos/PIN o borrar los datos de la app. CUANDO los borra, EL SISTEMA vuelve al recetario, limpia también el verificador del PIN y no activa la configuración sola.
- **RF-17 (Could):** CUANDO abre el engranaje, EL SISTEMA ofrece las opciones del recetario: tema claro/oscuro con ícono (☀️/🌙), tamaño de letra, vista en cuadros o lista, nombre para el saludo, limpiar favoritas e instalar la app. Ninguna opción muestra Bienestar ni modifica a las personas de confianza.
- **RF-18 (Should):** CUANDO registra contactos, EL SISTEMA propone el prefijo +51, abre el teclado numérico, exige 2 contactos y permite un tercero opcional con "+ Agregar otra".
- **RF-19 (Must):** CUANDO la usuaria solicita ajustar porciones en una receta, EL SISTEMA recalcula sus cantidades numéricas según las porciones deseadas; las cantidades "al gusto" se mantienen. El campo también acepta el PIN de 6 dígitos para abrir el área de apoyo.
- **RF-20 (Must):** MIENTRAS la usuaria está en la configuración, Preferencias o Bienestar y apoyo, SI pasan 60 segundos sin interacción, EL SISTEMA vuelve al inicio del recetario y descarta el contenido temporal del asistente. Este cierre no borra los datos guardados.
- **RF-21 (Should):** CUANDO la usuaria inicia un temporizador desde una receta y la app sigue abierta al vencer, EL SISTEMA muestra un aviso con las opciones «Ya está lista» y «Compartir receta». Compartir requiere que la usuaria elija destinatario y confirme en WhatsApp; ubicación solo se solicita mediante una acción explícita. El temporizador no envía alertas en segundo plano.
- **RF-22 (Should):** PARA el pitch, EL EQUIPO prepara una tarjeta impresa por ambas caras: una receta del prototipo y un QR verificado que abre la URL pública. La tarjeta no contiene datos personales ni presenta la app como servicio de emergencia.
- **RF-23 (Must):** CUANDO la usuaria toca cinco veces el título del recetario en un intervalo de tres segundos, EL SISTEMA abre la configuración para gestionar el PIN y los contactos, sin abrir directamente Bienestar y apoyo ni mostrar una pista visible de este acceso.
- **RF-24 (Must):** CUANDO el navegador informa que la app quedó oculta (por cambio de app/pestaña o bloqueo de pantalla), EL SISTEMA vuelve al inicio del recetario y descarta el contenido temporal de la vista. En Bienestar y apoyo, EL SISTEMA mantiene visible un botón «Salir rápido» para volver al recetario manualmente.

## Reglas de seguridad y límites

- **El mensaje nunca le pide a la persona de confianza que acuda ni que confronte a nadie.** Avisa; lo que se hace después lo define el acuerdo previo. La ubicación es información, no una orden.
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

## Criterios de aceptación → pruebas

| RF | Prueba | Cómo |
|---|---|---|
| RF-4 | La vista previa muestra destinatario y texto antes de abrir WhatsApp; el texto de confianza no invita a acudir; cada persona abre el chat con su número correcto | Manual + unitaria |
| RF-5 | Sin acción explícita no se pide ubicación; con ella el enlace se agrega al mensaje | Unitaria + manual |
| RF-10 | Tras borrar, no queda ninguna clave de datos o verificación de PIN, salvo la marca de configuración completada | Unitaria |
| RF-11 | Con almacenamiento vacío, al abrir "/" aparece la configuración con las tres tarjetas, selección de receta/contactos y creación/confirmación de PIN | Manual |
| RF-12 | Tras completar, recargar no reabre la configuración; un perfil previo sin PIN permite crearlo una sola vez | Unitaria + manual |
| RF-13 | "Salir rápido" visible en todos los pasos; no guarda contactos | Manual |
| RF-14–15 | Bienestar no aparece en navegación ni Preferencias; PIN correcto desde la calculadora abre apoyo y uno incorrecto no revela si acertó | Manual |
| RF-16 | Actualizar contactos/PIN y borrar desde apoyo; tras borrar no queda el PIN y se vuelve al recetario | Manual |
| RF-17 | Cada opción del engranaje cambia lo esperado y persiste | Manual |
| RF-18 | +51 por defecto; con 1 contacto no se puede continuar; el tercero es opcional | Unitaria + manual |
| RF-19 | Recalcular ingredientes con cantidades enteras/decimales y verificar que las cantidades cualitativas no cambian; usar PIN abre apoyo | Manual |
| RF-20 | Dejar configuración, Preferencias y apoyo sin tocar durante 60 s; cada vista vuelve al inicio | Manual |
| RF-21 | Con la app abierta vence el temporizador y aparece el aviso; no sale ningún mensaje ni ubicación hasta que se elija y confirme | Manual |
| RF-22 | Escanear el QR impreso desde otro teléfono; abre el MVP público y la URL de respaldo es legible | Manual |
| RF-23 | Cinco toques rápidos al título abren la configuración; menos de cinco o toques separados no la abren | Manual |
| RF-24 | Desde cualquier vista, cambiar de app/pestaña o bloquear la pantalla regresa al inicio al volver; en Bienestar, «Salir rápido» permanece accesible al desplazarse | Manual en móvil; depende de los eventos de ciclo de vida que notifique el navegador |

## Preguntas abiertas

- **P-1:** ¿La calculadora como acceso al apoyo permite encontrar los recursos sin aumentar el riesgo? Validar este flujo y el PIN con Makipuray y con usuarias antes de un piloto. El PIN local no es una protección técnica contra alguien que inspeccione el dispositivo.
- **P-6:** ¿La tarjeta con QR se entiende como acceso al recetario sin revelar datos ni prometer seguridad? Probar el diseño y el QR en el pitch.
- **P-7:** ¿Qué servicios de atención psicológica locales se pueden incluir y cómo se verifican? No publicar números particulares ni directorios sin validarlos con una organización especializada.
- **P-2:** ¿El texto exacto del mensaje es creíble y seguro? Se propone provisionalmente: *"Te paso la receta de mi … . Luego me cuentas cómo te quedó."* No invita a la persona a ir a una casa ni a otro lugar. Validar esta redacción con Makipuray antes de usarla con usuarias reales.
- **P-5:** ¿Una señal o dos? Una receta podría significar "escríbeme cuando puedas" y otra "urgente". Se deja como mejora futura.
- **P-3:** ¿Los teléfonos de apoyo mostrados siguen vigentes? Confirmar en fuentes oficiales antes de la demo.
- **P-4:** ¿Se publica el repositorio de forma abierta o privada hasta la entrega?