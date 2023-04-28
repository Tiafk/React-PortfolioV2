const AddBtn = ({children, ...props}) => {
  return (
    <div className="pic">
      <button {...props} className="addBtn">
        {children}
      </button>
    </div>
  );
}

export default AddBtn;