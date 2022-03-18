import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const Labels = () => {
  const { labels, updateLabel } = useContext(GlobalContext);

  const handlerOnChangeLabels = (lbl, checked) => {
    updateLabel({ label: lbl, checked: !checked });
  };

  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">
        Label
      </p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            onChange={() => handlerOnChangeLabels(lbl, checked)}
            checked={checked}
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">
            {lbl}
          </span>
        </label>
      ))}
    </React.Fragment>
  )
}

export default Labels;