import { useState } from "react";

function capitalize(str: string) {
  if (str === null) {
    return null;
  }
  let tokens = str.split(" ");
  if (tokens.length === 1 || str === "no communicator") {
    return str !== null ? str.charAt(0).toUpperCase() + str.slice(1) : null;
  } else {
    let tokens = str.split(" ");
    return `${tokens[0].charAt(0).toUpperCase() + tokens[0].slice(1)} ${
      tokens[1].charAt(0).toUpperCase() + tokens[1].slice(1)
    }`;
  }
}

const Filter = ({ options, onFilter, initialState }: any) => {
  const [checked, setChecked] = useState<any | null>(initialState);

  const handleChecked = (i: number) => {
    let ops = capitalize(Object.keys(options.values)[i]);
    let actualChecked: any;
    if (checked !== null) {
      let doesHave = checked.values.find((el: string) => el === ops);
      let filtered: any;
      if (doesHave !== undefined) {
        // remove
        filtered = checked.values.filter((el: string) => el !== ops);
        actualChecked = {
          trait_type: options.trait_type,
          values: filtered,
        };
      } else {
        actualChecked = {
          trait_type: options.trait_type,
          values: [ops, ...checked.values],
        };
      }
    } else {
      actualChecked = {
        trait_type: options.trait_type,
        values: [ops],
      };
    }
    setChecked(actualChecked);
    onFilter(actualChecked);
  };

  return (
    <div>
      <ul>
        {Object.keys(options.values).map((el: any, i: number) => {
          return (
            <li key={i}>
              <div className="flex items-center mb-4">
                <label
                  htmlFor={`nft-checkbox-${i}`}
                  className="ml-2 text-white text-lg font-medium dark:text-gray-300"
                >
                  {capitalize(el)}
                </label>
                <input
                  id={`nft-checkbox-${i}`}
                  type="checkbox"
                  checked={checked.values.includes(capitalize(el))}
                  onChange={() => handleChecked(i)}
                  value=""
                  className="w-5 h-5 ml-auto bg-slate-900 accent-red-500"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
