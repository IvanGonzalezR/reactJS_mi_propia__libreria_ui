## Instala ésta librería en tu proyecto con NPM con el siguiente comando:

### npm install reactjs_creacion_de_librerias_ui

Componentes personalizados incluídos en la librería:

**<Button>**
  Propiedades:
  
  className: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColorHover: PropTypes.string,
  colorHover: PropTypes.string,
  borderRadius: PropTypes.string,
  
<ContainerFlex>
  Propiedades:
  
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  gap: PropTypes.string,

  flexDirection: PropTypes.oneOf([ 'row', 'row-reverse', 'column', 'column-reverse' ]),
  alignContent: PropTypes.oneOf([ 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch' ]),
  alignItems: PropTypes.oneOf([ 'center', 'flex-start', 'flex-end', 'stretch', 'baseline' ]),
  justifyContent: PropTypes.oneOf([ 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly' ])
  
<MediaImg>
  Propiedades:
  
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  borderRadius: PropTypes.string,
  className: PropTypes.string,
  
<Text>
  Propiedades:
  
  className: PropTypes.string,
  component: PropTypes.oneOf([ "p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6" ]),
  fontWeight: PropTypes.number,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,

