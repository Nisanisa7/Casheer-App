import{ useState } from 'react'

const useModal = () => {
    const [show, setShow] = useState(false);
   function handleOpen(){
       setShow(!show)
   }
   return {handleOpen, show}
}

export default useModal
