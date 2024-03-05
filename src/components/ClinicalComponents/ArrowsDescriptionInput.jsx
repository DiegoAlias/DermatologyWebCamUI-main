const CoordinatesInput = ({ description, onDescriptionChange }) => {
  return (
    <div>
      <div className="input-group  ">
        <input
          type="text"
          className="form-control form-control-md"
          placeholder="Input a arrow description"   
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
        />        
      </div>
    </div>
  );
};


export default CoordinatesInput;
