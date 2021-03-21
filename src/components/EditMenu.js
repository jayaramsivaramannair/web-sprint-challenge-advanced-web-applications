import React from 'react';

const EditMenu = ({ colorToEdit, saveEdit, setColorToEdit, setEditing }) => {
  return (<form onSubmit={saveEdit}>
    <legend>edit color</legend>
    <label htmlFor="colorName">color name:</label>
    <input
      name="colorName"
      id="colorName"
      onChange={(e) => {
        console.log(e.target.name, e.target.value);
        setColorToEdit({ ...colorToEdit, color: e.target.value })
      }
      }
      value={colorToEdit.color}
    />

    <label htmlFor="hex">hex code:</label>
    <input
      name="hex"
      id="hex"
      onChange={(e) => {
        console.log(e.target.name, e.target.value);
        setColorToEdit({
          ...colorToEdit,
          code: { hex: e.target.value },
        })
      }
      }
      value={colorToEdit.code.hex}
    />

    <div className="button-row">
      <button type="submit">save</button>
      <button type="button" onClick={() => setEditing(false)}>cancel</button>
    </div>
  </form>);
}

export default EditMenu;