import { CSSProperties, useState } from 'react'
import { ClipLoader } from 'react-spinners'

const override: CSSProperties = {
  display: 'block',
  margin: '80px auto',
  borderColor: '#9E9E9E',
}

const Spinner: React.FC = () => {
  const [color] = useState<string>('#9e9e9e')
  const [loading] = useState<boolean>(true)

  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  )
}

export default Spinner
