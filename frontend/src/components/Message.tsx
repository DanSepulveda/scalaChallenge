import { BiSearch } from 'react-icons/bi'
import { BsKeyboard } from 'react-icons/bs'
import { AiOutlineWarning } from 'react-icons/ai'
import { MessageProps } from '../types'

const Message = (props: MessageProps): JSX.Element => {
    const { icon, message } = props

    return (
        <div className='container px-5 d-flex justify-content-center'>
            <div className='px-5 loader mt-5 shadow-lg rounded-3 py-5 d-flex flex-column align-items-center'>
                {icon === 'BiSearch' && <BiSearch className='loader-icon text-center' />}
                {icon === 'BsKeyboard' && <BsKeyboard className='loader-icon text-center' />}
                {icon === 'AiOutlineWarning' && <AiOutlineWarning className='loader-icon text-center' />}
                <h2 className='text-center'>{message}</h2>
            </div>
        </div>
    )
}

export default Message