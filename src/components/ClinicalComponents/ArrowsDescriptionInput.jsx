
const CoordinatesInput = ({ description, onDescriptionChange }) => {

  return (
    <div>
      <div className="text-black">
        <input
          type="text"
          className="rounded-md px-2 w-44"
          placeholder="Input a arrow description"
          value={description}
          onChange={(e) => 
            onDescriptionChange(e.target.value)}        
        />
      </div>
    </div>
  );
};

export default CoordinatesInput;
