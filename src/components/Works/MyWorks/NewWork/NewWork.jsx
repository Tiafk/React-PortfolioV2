function NewWork(props) {
  return (
    <a className="wrapper-work whitemode" href={props.work.url}>
      <div className="pic">
        <img src={props.work.image} alt="#" />
      </div>
      <div className="castom">
        <p className="text">{props.work.title}</p>
      </div>
    </a>
  );
}

export default NewWork;
