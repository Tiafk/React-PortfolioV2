const CreateBtn = ({children, ...props}) => {
  return (
    <button {...props} className="create">
      {children}
    </button>
  );
}

export default CreateBtn;