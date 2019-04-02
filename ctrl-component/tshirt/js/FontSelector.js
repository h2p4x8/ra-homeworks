const FontSelector = ({fonts, selectedFont, onSelect}) => {
    const text = 'abc';

    const checkSelected = (fontName) => {
      if (!selectedFont) {
        return false;
      }
      return fontName === selectedFont.name ? true : false;
    };

    const onChange = (e) => {
      if (e.target.checked) {
        onSelect(fonts.find(font => font.name === e.target.value))
      }
    }

    const fontsCollection = fonts.map((font) => {
      return (<div className="grid center font-item">
        <input type="radio"
             name="font"
             value={font.name}
             id={font.name}
             defaultChecked={checkSelected(font.name)}
             onChange={onChange} />
        <label htmlFor={font.name} className="grid-1">
          <PictureFont text={text} path={font.path} />
        </label>
      </div>)
    });


    return (
      <div className="font-picker">
          {fontsCollection}
      </div>
    );
};
