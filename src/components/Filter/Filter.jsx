export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
};
