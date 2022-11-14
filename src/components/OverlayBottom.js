import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Image from 'react-bootstrap/Image'
import classnames from 'classnames'


export default function TriggerExample({placeholder, espacamento, mensagem}) {
  const renderTooltip = (props) => (
    <Tooltip {...props}>
      {mensagem}
    </Tooltip>
  )
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
     <Image className={classnames('habilidades', espacamento)} src={placeholder} alt="placeholder"/>
     
    </OverlayTrigger>
  )
}

