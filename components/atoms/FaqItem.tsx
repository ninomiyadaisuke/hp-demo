import {FC} from 'react'
import Text from './Text'

type Props = {
  title:string
  text:string
}

const FaqItem:FC<Props> = (props) => {
  const {title,text} = props;
  return (
    <li>
      <h3>{title}</h3>
      <Text text={text} />
    </li>
  )
}

export default FaqItem