interface Props {
    title: string;
    type?: "submit" | "reset" | "button"; // UNİON TYPE
    designs?: string;
    disabled?: boolean;
    icon?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const Button = ({title, type, designs, disabled, icon, handleClick}: Props) => {
  return (
    <button 
    onClick={handleClick}
    disabled={disabled}
    type={type} 
    className={ `custom-btn bg-blue-600 rounded-full hover:bg-blue-800 text-white transition 
    ${designs} `}>
      <span className="flex-1">{title}</span>

      {icon && <img className="w-7 h-6 " src={icon}/>}
    </button>
  )
};

export default Button;
