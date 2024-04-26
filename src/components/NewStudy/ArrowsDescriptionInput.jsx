
const CoordinatesInput = ({ description, onDescriptionChange }) => {

  return (
    <div>
      <div className="text-black">
        <input
          type="text"
          className="rounded-md px-3 py-1 w-64 text-center"
          placeholder="Input a arrow tag"
          value={description}
          onChange={(e) => 
            onDescriptionChange(e.target.value)}        
        />
      </div>
    </div>
  );
};

export default CoordinatesInput;
